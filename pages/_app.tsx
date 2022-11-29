import Head from "next/head";
import type { AppProps } from "next/app";
// Components
import Nav from "components/nav";
// Lib
import { Provider, createClient } from "urql";
import { StateContext } from "lib/context";
// Global styles
import "styles/globals.scss";

const client = createClient({ url: process.env.NEXT_PUBLIC_BACKEND_API || "" });

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <StateContext>
      <Provider value={client}>
        <Head>
          <title>The iPad Store</title>
          <meta name="description" content="The best place to buy your iPad" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Nav />
        <Component {...pageProps} />
      </Provider>
    </StateContext>
  );
}

export default MyApp;
