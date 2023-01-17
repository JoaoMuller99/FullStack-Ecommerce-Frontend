import Head from "next/head";
import { useState } from "react";
// Types
import { AiFillMinusCircle, AiFillPlusCircle } from "react-icons/ai";
import { DadosProduto, Imagem } from "../../types/products";
// Context
import { useShopContext } from "lib/context";
// Util
import { notificacao } from "util/helpers";
// Styles
import styles from "./produto_detalhado.module.scss";

interface Props {
  imagem: Imagem | undefined;
  titulo: string;
  descricao: string;
  preco: number;
  slug: string;
  produto: DadosProduto;
}

export default function ProdutoDetalhado(props: Props) {
  const [quantidade, setQuantidade] = useState<number>(1);
  const { adicionarAoCarrinho } = useShopContext();

  const aumentaQuantidade = () => {
    setQuantidade((prevQuantidade) => prevQuantidade + 1);
  };

  const diminuiQuantidade = () => {
    if (quantidade > 1) setQuantidade((prevQuantidade) => prevQuantidade - 1);
    else setQuantidade(1);
  };

  return (
    <>
      <Head>
        <title>The iPad Store - {props.titulo}</title>
      </Head>
      <div className={styles.container}>
        {props.imagem && (
          <picture>
            <source srcSet={props.imagem.url} type={props.imagem.mime} />
            <img src={props.imagem.url} alt={props.imagem.name} />
          </picture>
        )}
        <div className={styles.infoContainer}>
          <h3>{props.titulo}</h3>
          <p>{props.descricao}</p>
          <div className={styles.quantidadeContainer}>
            <span>Quantidade</span>
            <button onClick={diminuiQuantidade}>
              <AiFillMinusCircle />
            </button>
            <p>{quantidade}</p>
            <button onClick={aumentaQuantidade}>
              <AiFillPlusCircle />
            </button>
          </div>
          <button
            className={styles.botaoAdicionar}
            onClick={() => {
              adicionarAoCarrinho({ ...props.produto }, quantidade);
              notificacao();
            }}
          >
            Adicionar ao carrinho
          </button>
        </div>
      </div>
    </>
  );
}
