import type { NextPage } from "next";
// Components
import Loader from "components/loader/loader";
import Galeria from "components/galeria";
import Produto from "components/produto";
// Query for URQL
import { useQuery } from "urql";
import { PRODUCT_QUERY } from "lib/query";
// Types
import { Produtos } from "types/products";

const Home: NextPage = () => {
  const [resultado] = useQuery<Produtos>({ query: PRODUCT_QUERY });
  const { data, fetching, error } = resultado;

  if (fetching) return <Loader />;

  if (error) return <div>Erro: {error.message}</div>;

  return (
    <Galeria>
      {data &&
        data.products.data.map((produto) => {
          const id = produto.attributes.slug;
          return <Produto key={id} produto={produto.attributes} />;
        })}
    </Galeria>
  );
};

export default Home;
