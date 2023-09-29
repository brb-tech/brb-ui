import { ProviderProps } from "./types";

export const ThemeScript: React.FC<
  Pick<ProviderProps, "initialThemeMode" | "useSystemThemeMode" | "prefixCls" | "themeModeKey">
> = ({ initialThemeMode, prefixCls, useSystemThemeMode, themeModeKey }) => {
  return (
    <script
      dangerouslySetInnerHTML={{
        __html: `
        (function() {
            try {
              var themeMode = '';
              if (${useSystemThemeMode}) {
                var mql = window.matchMedia('(prefers-color-scheme: dark)');
                if (mql.matches) {
                  themeMode = 'dark';
                } else {
                  themeMode = 'light';
                }
              }else{
                themeMode = localStorage.getItem(${themeModeKey}) || ${initialThemeMode};
              }

              if(themeMode){
                document.body.classList.add(${prefixCls}-ui-)
              }
              
            } catch(e){}})();
        `
      }}
    />
  );
};
