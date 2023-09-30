import { ProviderProps } from "./types";

export const ThemeModeScript: React.FC<
  Required<Pick<ProviderProps, "initialThemeMode" | "useSystemThemeMode" | "prefixCls" | "themeModeKey">>
> = ({ initialThemeMode, prefixCls = "brb", useSystemThemeMode, themeModeKey }) => {
  const bodyClassName = `${prefixCls}-ui`;
  const s = () => {};
  return (
    <script
      dangerouslySetInnerHTML={{
        __html: `
        (function () {
          try {
            let themeMode = "";
            if (${useSystemThemeMode}) {
              themeMode = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
            } else {
              themeMode = localStorage.getItem("${themeModeKey}") || ${initialThemeMode};
            }
    
            if (themeMode) {
              const cls = "${prefixCls}" + "-ui-" + themeMode;
              document.body.classList.add(cls);
              document.documentElement.setAttribute("data-theme", themeMode);
            }
          } catch (e) {
            console.error("An error occurred with ThemeModeScript");
            throw e;
          }
        })();
        `
      }}
    />
  );
};