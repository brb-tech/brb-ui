import { ThemeProvider as EmotionThemeProvider } from "@emotion/react";
import merge from "lodash.merge";
import React, { createContext, Fragment, useCallback } from "react";
import { useMemo } from "react";
// import useSafeLayoutEffect from "../hooks/useSafeLayoutEffect";
import defaultTheme from "./theme";
import ResetCSS from "./reset-css";
// import { IThemeMode } from "../types";
import { ProviderProps } from "./types";
import { useLocalStorage, useSafeLayoutEffect } from "@brb-ui/hooks";
import { Theme } from ".";

export const Context = createContext<ProviderProps>({});

const Provider: React.FC<ProviderProps & React.PropsWithChildren> = ({
  children,
  prefixCls,
  initialThemeMode,
  useSystemThemeMode,
  themeModeKey,
  theme,
  supportedThemes,
  ...rest
}) => {
  if ("cookies" in rest) {
    console.log("cookies");
  }
  const [themeMode, setThemeMode, removeThemeMode] = useLocalStorage<Theme["themeMode"]>(themeModeKey!, "dark");

  // console.log(themeMode);
  const setThemeModeMiddleware = useCallback(
    (_theme: Theme["themeMode"]) => {
      if (initialThemeMode) return;
      try {
        setThemeMode(_theme);
      } catch (e) {
        console.error(e);
      }
    },
    [initialThemeMode]
  );

  // useSafeLayoutEffect(() => {

  //   if(initialThemeMode){

  //   }
  //   if (initialThemeMode && themeMode && initialThemeMode !== themeMode) {
  //     setThemeMode(initialThemeMode);
  //   }
  // }, [initialThemeMode, themeMode]);

  useSafeLayoutEffect(() => {
    if (themeMode) {
      document.body.className = `${prefixCls}-ui-${themeMode}`;
      document.documentElement.style.setProperty(`--${prefixCls}-ui-color-mode`, themeMode);
    }
    return () => {};
  }, [themeMode, prefixCls]);

  // const emit = useCallback(({ key, newValue }: StorageEvent) => {
  //   switch (key) {
  //     case "theme":
  //       setThemeModeMiddleware(newValue as IThemeMode);
  //       break;

  //     default:
  //       break;
  //   }
  // }, []);

  // useSafeLayoutEffect(() => {
  //   window.addEventListener("storage", emit);
  //   return () => {
  //     window.removeEventListener("storage", emit);
  //   };
  // }, []);

  const themeObject = useMemo(() => {
    const pre = defaultTheme(themeMode, supportedThemes, prefixCls);
    const next = theme ? theme(themeMode, supportedThemes, prefixCls) : {};

    return merge(pre, next);
  }, [prefixCls, theme, themeMode, supportedThemes]);

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
  initialThemeMode: "system",
  themeModeKey: "brb-ui-theme-mode",
  prefixCls: "brb"
};

export default Provider;
