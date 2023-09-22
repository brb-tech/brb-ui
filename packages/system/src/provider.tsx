import { ThemeProvider as EmotionThemeProvider } from "@emotion/react";
import merge from "lodash.merge";
import React, { createContext, Fragment, useCallback } from "react";
import { useMemo } from "react";
// import useSafeLayoutEffect from "../hooks/useSafeLayoutEffect";
import defaultTheme from "./theme";
import ResetCSS from "./reset-css";
// import { IThemeMode } from "../types";
import { ProviderProps } from "./types";

export const Context = createContext<ProviderProps>({});

const Provider: React.FC<ProviderProps & React.PropsWithChildren> = ({ children, theme, prefixCls = "brb" }) => {
  // const { themeMode, setThemeModeMiddleware } = useThemeModeSync(hardThemeMode, themeCookie, prefixCls);

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
    const pre = defaultTheme();
    const next = theme ? theme() : {};

    return merge(pre, next);
  }, []);
  console.log(themeObject);

  return (
    // <Context.Provider value={{ themeMode, setThemeMode: setThemeModeMiddleware, hardThemeMode, themeCookie }}>
    <EmotionThemeProvider theme={themeObject}>
      <ResetCSS />
      {children}
    </EmotionThemeProvider>
    // </Context.Provider>
  );
};

export default Provider;
