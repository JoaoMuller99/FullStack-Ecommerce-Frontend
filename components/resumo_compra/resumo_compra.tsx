// Styles
import styles from "./resumo_compra.module.scss";

interface Props {
  idCompra: string;
  valor: string;
  email: string;
}

export default function ResumoCompra(props: Props) {
  return (
    <div className={styles.container}>
      <h2>
        Número Pedido: <span>{props.idCompra}</span>
      </h2>
      <h2>
        Valor: <span>{props.valor}</span>
      </h2>
      <h2>
        Email: <span>{props.email}</span>
      </h2>
    </div>
  );
}
