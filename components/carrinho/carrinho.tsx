// Context
import { useEffect } from "react";
import { useShopContext } from "../../lib/context";
// Styles
import styles from "./carrinho.module.scss";

const Carrinho = () => {
  const { mostrarCarrinho, alterarExibicaoCarrinho } = useShopContext();

  useEffect(() => {
    const body = document.getElementsByTagName("body")[0];

    if (mostrarCarrinho) body.style.overflow = "hidden";
    else body.style.overflow = "auto";
  }, [mostrarCarrinho]);

  return (
    <>
      <section className={`${styles.container} ${mostrarCarrinho ? styles.exibir : ""}`} onClick={() => alterarExibicaoCarrinho("esconder")}>
        <main onClick={(e) => e.stopPropagation()}>
          <div>Vazio</div>
        </main>
      </section>
    </>
  );
};

export default Carrinho;
