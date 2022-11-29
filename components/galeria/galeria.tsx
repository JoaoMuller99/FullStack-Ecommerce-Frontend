// Styles
import styles from "./galeria.module.scss";

interface Props {
  children: React.ReactNode;
}

export default function Galeria(props: Props) {
  return <main className={styles.main}>{props.children}</main>;
}
