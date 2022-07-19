import Head from "next/head";
import type { AppProps } from "next/app";

// Lib
import { Provider, createClient } from "urql";
// Global styles
import "../styles/globals.scss";

const client = createClient({ url: process.env.NEXT_PUBLIC_BACKEND_API || "" });

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider value={client}>
      <Head>
        <title>The iPad Store</title>
        <meta name="description" content="The best place to buy your iPad" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
