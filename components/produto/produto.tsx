import Link from "next/link";
import Image from "next/image";
// Types
import { DadosProduto } from "types/products";
// Util
import { formataNumeroParaBRL } from "util/helpers";
// Styles
import styles from "./produto.module.scss";

interface Props {
  produto: DadosProduto;
}

export default function Produto(props: Props) {
  const { title, price, image } = props.produto;

  const formatoFoto: "small" | "medium" | "large" | "thumbnail" = "large";

  return (
    <div className={styles.container}>
      <Link href={`/produto/${props.produto.slug}`}>
        <div>
          <Image
            src={image.data.attributes.formats[formatoFoto].url}
            width={image.data.attributes.formats[formatoFoto].width}
            height={image.data.attributes.formats[formatoFoto].height}
            alt={image.data.attributes.formats[formatoFoto].name}
          />
        </div>
      </Link>
      <div className={styles.infosContainer}>
        <h2>{title}</h2>
        <h3>{formataNumeroParaBRL(price)}</h3>
      </div>
    </div>
  );
}
