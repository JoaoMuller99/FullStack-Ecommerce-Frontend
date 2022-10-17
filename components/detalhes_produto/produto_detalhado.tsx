import Image from "next/image";
// Types
import { Imagem } from "../../types/products";
import { AiFillPlusCircle, AiFillMinusCircle } from "react-icons/ai";
// Context
import { useStateContext } from "../../lib/context";
// Styles
import styles from "./produto_detalhado.module.scss";

interface Props {
  imagem: Imagem | undefined;
  titulo: string;
  descricao: string;
  preco: number;
  slug: string;
}

export default function ProdutoDetalhado(props: Props) {
  const { quantidade, aumentaQuantidade, diminuiQuantidade } = useStateContext();

  return (
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
          <span>Quantity</span>
          <button onClick={diminuiQuantidade}>
            <AiFillMinusCircle />
          </button>
          <p>{quantidade}</p>
          <button onClick={aumentaQuantidade}>
            <AiFillPlusCircle />
          </button>
        </div>
        <button className={styles.botaoAdicionar}>Adicionar ao carrinho</button>
      </div>
    </div>
  );
}
