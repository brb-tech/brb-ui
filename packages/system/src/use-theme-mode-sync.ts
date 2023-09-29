import { useCallback } from "react";
import { SystemTheme } from "./theme";
import { useSafeLayoutEffect } from "@brb-ui/hooks";
import { useLocalStorage } from "@brb-ui/hooks";
import { ProviderProps } from "./types";

const useThemeModeSync = (
  prefixCls?: string,
  initialThemeMode?: ProviderProps["initialThemeMode"],
  useSystemThemeMode?: boolean
) => {
  const [themeMode, setThemeMode, removeThemeMode] = useLocalStorage<SystemTheme>("theme", "dark");

  console.log(themeMode);
  const setThemeModeMiddleware = useCallback(
    (_theme: SystemTheme) => {
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

  return { themeMode, setThemeModeMiddleware };
};

export default useThemeModeSync;
