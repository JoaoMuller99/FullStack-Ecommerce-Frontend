import { useEffect, useState } from "react";
// Components
import ItensCarrinhoContainer from "components/itens_carrinho";
import Loader from "components/loader";
// Context
import { useShopContext } from "lib/context";
// Icons
import { FaShoppingCart } from "react-icons/fa";
// Libs
import { motion } from "framer-motion";
import { getStripe } from "lib/getStripe";
// Util
import { formataNumeroParaBRL } from "util/helpers";
// Styles
import styles from "./carrinho.module.scss";

const itemAnimation = {
  initial: {
    opacity: 0,
    scale: 0.8,
  },
  animate: {
    opacity: 1,
    scale: 1,
  },
};

const Carrinho = () => {
  const { mostrarCarrinho, alterarExibicaoCarrinho, itensCarrinho, valorTotalCarrinho } = useShopContext();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleCompra = async () => {
    try {
      setIsLoading(true);
      const stripe = await getStripe();
      const response = await fetch("/api/stripe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(itensCarrinho),
      });

      const data = await response.json();
      if (stripe) {
        await stripe.redirectToCheckout({ sessionId: data.id });
      }
    } catch (e) {
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const body = document.getElementsByTagName("body")[0];

    if (mostrarCarrinho) body.style.overflow = "hidden";
    else body.style.overflow = "auto";
  }, [mostrarCarrinho]);

  if (isLoading) return <Loader />;

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={styles.container}
      onClick={() => alterarExibicaoCarrinho("esconder")}
    >
      <motion.main
        initial={{ x: "100%" }}
        animate={{ x: "0%" }}
        exit={{ x: "100%" }}
        transition={{ ease: "easeInOut", duration: 0.25 }}
        onClick={(e: any) => e.stopPropagation()}
      >
        <button onClick={() => alterarExibicaoCarrinho("esconder")} className={styles.sair} type="button">
          Fechar
        </button>
        {itensCarrinho &&
          (itensCarrinho.length === 0 ? (
            <motion.div
              variants={itemAnimation}
              animate="animate"
              initial="initial"
              transition={{ delay: 0.25 }}
              className={styles.carrinhoVazio}
            >
              <h1>Você possui algumas compras para fazer 😉</h1>
              <FaShoppingCart />
            </motion.div>
          ) : (
            <>
              <ItensCarrinhoContainer itemAnimation={itemAnimation} />
              <motion.div variants={itemAnimation} animate="animate" initial="initial" transition={{ delay: 0.25 }} className={styles.checkout}>
                <h3>Subtotal: {formataNumeroParaBRL(valorTotalCarrinho)}</h3>
                <button onClick={handleCompra} type="button">
                  Finalizar compra
                </button>
              </motion.div>
            </>
          ))}
      </motion.main>
    </motion.section>
  );
};

export default Carrinho;
