import { ThemeProvider as EmotionThemeProvider } from "@emotion/react";
import merge from "lodash.merge";
import React, { createContext, useCallback, useState } from "react";
import { useMemo } from "react";
import defaultTheme from "./theme";
import ResetCSS from "./reset-css";
import { ProviderProps } from "./types";
import { useSafeLayoutEffect } from "@brb-ui/hooks";
import { Theme } from ".";
import { parse } from "cookie";
import { isBrowser } from "@brb-ui/utils";
import { set } from "js-cookie";

export const getThemeModeFromLS = (themeModeKey: string): Theme["themeMode"] | null => {
  try {
    const themeModeFromJS = isBrowser ? localStorage.getItem(themeModeKey) : undefined;
    return (themeModeFromJS ?? null) as Theme["themeMode"] | null;
  } catch {
    return null;
  }
};

export const getThemeModeFromCookies = (themeModeKey: string, cookies?: string): Theme["themeMode"] | null => {
  try {
    const themeModeFromCookie = parse(cookies || "")[themeModeKey];
    return (themeModeFromCookie ?? null) as Theme["themeMode"] | null;
  } catch {
    return null;
  }
};

export const Context = createContext<ProviderProps>({});

const Provider: React.FC<ProviderProps & React.PropsWithChildren> = ({
  children,
  prefixCls,
  initialThemeMode,
  themeMode,
  themeModeKey,
  theme,
  supportedThemes,
  ...rest
}) => {
  const [internalThemeMode, setInternalThemeMode] = useState<Theme["themeMode"]>(
    "cookies" in rest
      ? getThemeModeFromCookies(themeModeKey!, rest.cookies) || initialThemeMode!
      : getThemeModeFromLS(themeModeKey!) || initialThemeMode!
  );

  const mergedThemeMode = themeMode || internalThemeMode;

  const setThemeModeMiddleware = useCallback(
    (_themeMode: Theme["themeMode"]) => {
      if (themeMode) return;
      try {
        setInternalThemeMode(_themeMode);
        set(themeModeKey!, _themeMode, {
          expires: Number.MAX_SAFE_INTEGER
        });
      } catch (e) {
        console.error(e);
      }
    },
    [themeModeKey, themeMode]
  );

  useSafeLayoutEffect(() => {
    if (themeMode) {
      document.body.className = `${prefixCls}-ui-${mergedThemeMode}`;
      document.documentElement.style.setProperty(`--${prefixCls}-ui-theme-mode`, mergedThemeMode);
      document.documentElement.setAttribute("data-theme", mergedThemeMode);
    }
    return () => {};
  }, [mergedThemeMode, prefixCls]);

  const emit = useCallback(
    ({ key, newValue }: StorageEvent) => {
      switch (key) {
        case themeModeKey:
          setThemeModeMiddleware(newValue as Theme["themeMode"]);
          break;
        default:
          break;
      }
    },
    [themeModeKey]
  );

  useSafeLayoutEffect(() => {
    window.addEventListener("storage", emit);
    return () => {
      window.removeEventListener("storage", emit);
    };
  }, [emit]);

  const themeObject = useMemo(() => {
    const pre = defaultTheme(mergedThemeMode, supportedThemes, prefixCls);
    const next = theme ? theme(mergedThemeMode, supportedThemes, prefixCls) : {};

    return merge(pre, next);
  }, [prefixCls, theme, mergedThemeMode, supportedThemes]);

  return (
    // <Context.Provider value={{ themeMode, setThemeMode: setThemeModeMiddleware, hardThemeMode, themeCookie }}>
    <EmotionThemeProvider theme={themeObject}>
      <ResetCSS />
      {children}
    </EmotionThemeProvider>
    // </Context.Provider>
  );
};

Provider.defaultProps = {
  initialThemeMode: "dark",
  themeModeKey: "brb-ui-theme-mode",
  prefixCls: "brb"
};

export default Provider;
