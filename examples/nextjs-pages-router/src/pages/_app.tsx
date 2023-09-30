import type { AppContext, AppProps } from "next/app";
import App from "next/app";

export default function _APP({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

_APP.getInitialProps = async (appContext: AppContext) => {
  const appProps = await App.getInitialProps(appContext);
  console.log(appContext);
  // const cookieParse = cookie.parse(appContext.ctx.req?.headers.cookie || "");
  // appProps.pageProps.theme = cookieParse["theme"] || "dark";
  return { ...appProps };
};
