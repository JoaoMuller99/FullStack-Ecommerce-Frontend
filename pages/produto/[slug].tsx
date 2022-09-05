import { useRouter } from "next/router";
// Components
import Loader from "../../components/loader";
import Galeria from "../../components/galeria";
import ProdutoDetalhado from "../../components/detalhes_produto";
// Query for URQL
import { useQuery } from "urql";
import { GET_PRODUCT_QUERY } from "../../lib/query";
// Types
import { DadosProduto, Imagem, Produtos } from "../../types/products";

export default function DetalhesProduto() {
  const router = useRouter();
  const [resultado] = useQuery<Produtos>({ query: GET_PRODUCT_QUERY, variables: { slug: router.query.slug } });

  const { data, fetching, error } = resultado;

  if (fetching) return <Loader />;

  if (error) return <div>Erro: {error.message}</div>;

  let dadosProduto: DadosProduto | undefined;
  let dadosImagem: Imagem | undefined;

  if (data) dadosProduto = (data.products.data[0] || {}).attributes;

  if (dadosProduto) dadosImagem = dadosProduto.image.data.attributes.formats.medium;

  console.log(data);

  return (
    <Galeria>
      {dadosProduto && dadosImagem ? (
        <ProdutoDetalhado
          imagem={dadosImagem}
          titulo={dadosProduto.title}
          descricao={dadosProduto.description}
          preco={dadosProduto.price}
          slug={dadosProduto.slug}
        />
      ) : (
        <>
          <Loader />
          {`${router.replace("/404")}`}
        </>
      )}
    </Galeria>
  );
}
