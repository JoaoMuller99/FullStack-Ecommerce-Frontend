import type { AppProps } from "next/app";
import Head from "next/head";
import { Router } from "next/router";
import { useEffect, useState } from "react";
// Components
import Loader from "components/loader";
import Nav from "components/nav";
// Lib
import { UserProvider } from "@auth0/nextjs-auth0/client";
import { StateContext } from "lib/context";
import { createClient, Provider } from "urql";
// Global styles
import "styles/globals.scss";

const client = createClient({ url: process.env.NEXT_PUBLIC_BACKEND_API || "" });

function MyApp({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const start = () => {
      console.log("start");
      setLoading(true);
    };

    const end = () => {
      console.log("end");
      setLoading(false);
    };

    Router.events.on("routeChangeStart", start);
    Router.events.on("routeChangeComplete", end);
    Router.events.on("routeChangeError", end);

    return () => {
      Router.events.off("routeChangeStart", start);
      Router.events.off("routeChangeComplete", end);
      Router.events.off("routeChangeError", end);
    };
  }, []);

  return (
    <UserProvider>
      <StateContext>
        <Provider value={client}>
          <Head>
            <title>The iPad Store</title>
            <meta name="description" content="The best place to buy your iPad" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
          {loading ? (
            <Loader />
          ) : (
            <>
              <Nav />
              <Component {...pageProps} />
            </>
          )}
        </Provider>
      </StateContext>
    </UserProvider>
  );
}

export default MyApp;
