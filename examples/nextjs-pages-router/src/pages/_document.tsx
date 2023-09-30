import NextDocument, { Html, Head, Main, NextScript, DocumentContext } from "next/document";
import { ThemeModeScript } from "@brb-ui/core";

export default class Document extends NextDocument {
  static getInitialProps(ctx: DocumentContext) {
    return NextDocument.getInitialProps(ctx);
  }

  render() {
    return (
      <Html>
        <Head />
        <body>
          <ThemeModeScript initialThemeMode="system" useSystemThemeMode prefixCls="brb" themeModeKey="theme" />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
