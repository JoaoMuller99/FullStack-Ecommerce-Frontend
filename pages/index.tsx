import type { NextPage } from "next";
import Head from "next/head";
// Components
import Loader from "../components/loader/loader";
// Query for URQL
import { useQuery } from "urql";
import { PRODUCT_QUERY } from "../lib/query";
// Types
import { Produtos } from "../types/products";

const Home: NextPage = () => {
  const [resultado] = useQuery<Produtos>({ query: PRODUCT_QUERY });
  const { data, fetching, error } = resultado;

  if (fetching) return <Loader />;

  if (error) return <div>Erro: {error.message}</div>;

  console.log(data);

  return (
    <>
      <Head>
        <title>The iPad Store</title>
        <meta name="description" content="The best place to buy your iPad" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>{data && data.products.data.map((produto) => <div key={produto.attributes.slug}>{produto.attributes.title}</div>)}</main>
    </>
  );
};

export default Home;
