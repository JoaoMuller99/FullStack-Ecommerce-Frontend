// Lib
import PacmanLoader from "react-spinners/PacmanLoader";
// Styles
import styles from "./loader.module.scss";

export default function Loader() {
  const color = "black";

  return (
    <div className={styles.container}>
      <PacmanLoader color={color} />
    </div>
  );
}
