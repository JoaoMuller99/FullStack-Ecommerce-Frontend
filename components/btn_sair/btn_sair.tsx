import { useRouter } from "next/router";
// Styles
import styles from "./btn_sair.module.scss";

export default function BtnSair() {
  const router = useRouter();

  return (
    <div className={styles.container}>
      <button onClick={() => router.push("/api/auth/logout")}>Sair</button>
    </div>
  );
}
