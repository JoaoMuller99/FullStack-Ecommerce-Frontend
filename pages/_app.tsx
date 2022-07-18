import type { AppProps } from "next/app";
// Lib
import { Provider, createClient } from "urql";
// Global styles
import "../styles/globals.scss";

const client = createClient({ url: "http://localhost:1337/graphql" });

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider value={client}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
