import { Provider, styled } from "@brb-ui/core";
import type { AppContext, AppProps } from "next/app";
import App from "next/app";

const Header = styled.header`
  height: 64px;
  border-bottom: 1px solid ${({ theme }) => theme.system.blueGray[3]};
`;

export default function _APP({ Component, pageProps, cookies, ...rest }: AppProps & { cookies?: string }) {
  return (
    <Provider cookies={cookies}>
      <Header css={{ color: "red" }}></Header>
      <Component {...pageProps} />
    </Provider>
  );
}

_APP.getInitialProps = async (appContext: AppContext) => {
  const appProps = await App.getInitialProps(appContext);
  return { ...appProps, cookies: appContext.ctx.req?.headers.cookie };
};
