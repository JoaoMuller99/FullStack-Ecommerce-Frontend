import Link from "next/link";
// Components
import Carrinho from "../carrinho";
// Icon
import { FaShoppingCart } from "react-icons/fa";
// Context
import { useShopContext } from "../../lib/context";
// Styles
import styles from "./nav.module.scss";

export default function Nav() {
  const { alterarExibicaoCarrinho } = useShopContext();

  return (
    <nav className={styles.nav}>
      <Link href="/">iPad Store</Link>
      <div>
        <div onClick={() => alterarExibicaoCarrinho("exibir")}>
          <FaShoppingCart />
          <h3>Carrinho</h3>
        </div>
      </div>
      <Carrinho />
    </nav>
  );
}
