import { Provider } from "@brb-ui/system";
import type { AppContext, AppProps } from "next/app";
import App from "next/app";

export default function _APP({ Component, pageProps, cookies, ...rest }: AppProps & { cookies?: string }) {
  console.log(rest);
  return (
    <Provider cookies={cookies}>
      <Component {...pageProps} />
    </Provider>
  );
}

_APP.getInitialProps = async (appContext: AppContext) => {
  const appProps = await App.getInitialProps(appContext);
  return { ...appProps, cookies: appContext.ctx.req?.headers.cookie };
};
