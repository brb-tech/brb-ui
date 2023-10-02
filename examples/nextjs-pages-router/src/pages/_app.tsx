import { Provider, styled } from "@brb-ui/core";
import type { AppContext, AppProps } from "next/app";
import App from "next/app";
import Header from "widgets/header";

export default function _APP({ Component, pageProps, cookies, ...rest }: AppProps & { cookies?: string }) {
  return (
    <Provider cookies={cookies}>
      <Header />
      <Component {...pageProps} />
    </Provider>
  );
}

_APP.getInitialProps = async (appContext: AppContext) => {
  const appProps = await App.getInitialProps(appContext);
  return { ...appProps, cookies: appContext.ctx.req?.headers.cookie };
};
