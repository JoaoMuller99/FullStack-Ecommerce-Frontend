import { useRouter } from "next/router";
import Image from "next/image";
// Components
import Loader from "../../components/loader";
// Query for URQL
import { useQuery } from "urql";
import { GET_PRODUCT_QUERY } from "../../lib/query";
// Types
import { DadosProduto, Produtos } from "../../types/products";

export default function DetalhesProduto() {
  const router = useRouter();
  const [resultado] = useQuery<Produtos>({ query: GET_PRODUCT_QUERY, variables: { slug: router.query.slug } });

  const { data, fetching, error } = resultado;

  if (fetching) return <Loader />;

  if (error) return <div>Erro: {error.message}</div>;

  let dadosProduto: DadosProduto | undefined;

  if (data) dadosProduto = (data.products.data[0] || {}).attributes;

  console.log(data);

  return (
    <div>
      {dadosProduto && (
        <>
          <Image src="/" width={1} height={1} alt="" />
          <div>
            <h3>{dadosProduto.title}</h3>
            <p>{dadosProduto.description}</p>
          </div>
          <div>
            <span>Quantity</span>
            <button>Plus</button>
            <p>0</p>
            <button>Minus</button>
          </div>
          <button>Adicionar ao carrinho</button>
        </>
      )}
    </div>
  );
}
