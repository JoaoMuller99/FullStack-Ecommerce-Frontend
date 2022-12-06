import Link from "next/link";
// Components
import Carrinho from "../carrinho";
// Icon
import { FaShoppingCart } from "react-icons/fa";
// Context
import { useShopContext } from "lib/context";
// Libs
import { AnimatePresence } from "framer-motion";
// Styles
import styles from "./nav.module.scss";

export default function Nav() {
  const { alterarExibicaoCarrinho, quantidadeItensCarrinho, mostrarCarrinho } = useShopContext();

  return (
    <nav className={styles.nav}>
      <Link href="/">iPad Store</Link>
      <div>
        <div onClick={() => alterarExibicaoCarrinho("exibir")}>
          {quantidadeItensCarrinho > 0 && <span>{quantidadeItensCarrinho}</span>}
          <FaShoppingCart />
          <h3>Carrinho</h3>
        </div>
      </div>
      <AnimatePresence>{mostrarCarrinho && <Carrinho />}</AnimatePresence>
    </nav>
  );
}
