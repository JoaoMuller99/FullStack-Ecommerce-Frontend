import Image from "next/image";
// Types
import { Imagem } from "../../types/products";
import { AiFillPlusCircle, AiFillMinusCircle } from "react-icons/ai";
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
          <button>
            <AiFillMinusCircle />
          </button>
          <p>0</p>
          <button>
            <AiFillPlusCircle />
          </button>
        </div>
        <button className={styles.botaoAdicionar}>Adicionar ao carrinho</button>
      </div>
    </div>
  );
}
