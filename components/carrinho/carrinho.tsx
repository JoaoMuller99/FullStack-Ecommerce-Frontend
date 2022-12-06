import Image from "next/image";
import { useEffect } from "react";
// Context
import { useShopContext } from "lib/context";
// Icons
import { FaShoppingCart } from "react-icons/fa";
import { AiFillMinusCircle, AiFillPlusCircle } from "react-icons/ai";
// Libs
import { motion } from "framer-motion";
// Util
import { formataNumeroParaBRL } from "util/helpers";
// Styles
import styles from "./carrinho.module.scss";

const animation = {
  initial: {
    opacity: 0,
    scale: 0.8,
  },
  animate: {
    opacity: 1,
    scale: 1,
    transition: { delay: 0.25 },
  },
};

const Carrinho = () => {
  const { mostrarCarrinho, alterarExibicaoCarrinho, itensCarrinho, adicionarAoCarrinho, removerDoCarrinho, valorTotalCarrinho } =
    useShopContext();

  useEffect(() => {
    const body = document.getElementsByTagName("body")[0];

    if (mostrarCarrinho) body.style.overflow = "hidden";
    else body.style.overflow = "auto";
  }, [mostrarCarrinho]);

  return (
    <>
      {mostrarCarrinho && (
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className={styles.container}
          onClick={() => alterarExibicaoCarrinho("esconder")}
        >
          <motion.main
            initial={{ x: "100%" }}
            animate={{ x: "0%" }}
            transition={{ ease: "easeInOut", duration: 0.25 }}
            onClick={(e: any) => e.stopPropagation()}
          >
            {itensCarrinho &&
              (itensCarrinho.length === 0 ? (
                <motion.div variants={animation} animate="animate" initial="initial" className={styles.carrinhoVazio}>
                  <h1>Você possui algumas compras para fazer 😉</h1>
                  <FaShoppingCart />
                </motion.div>
              ) : (
                <>
                  <div className={styles.itensContainer}>
                    {itensCarrinho.map((item) => {
                      const image = item.image.data.attributes.formats.thumbnail;
                      return (
                        <motion.div variants={animation} animate="animate" initial="initial" className={styles.item} key={item.slug}>
                          <Image src={image.url} width={image.width} height={image.height} alt={image.name} />
                          <div>
                            <h3>{item.title}</h3>
                            <h3>{formataNumeroParaBRL(item.price)}</h3>
                            <div className={styles.quantidadeContainer}>
                              <span>Quantidade</span>
                              <button onClick={() => removerDoCarrinho(item)}>
                                <AiFillMinusCircle />
                              </button>
                              <p>{item.quantidade}</p>
                              <button onClick={() => adicionarAoCarrinho(item, 1)}>
                                <AiFillPlusCircle />
                              </button>
                            </div>
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
                  <div className={styles.checkout}>
                    <h3>Subtotal: {formataNumeroParaBRL(valorTotalCarrinho)}</h3>
                    <button type="button">Finalizar compra</button>
                  </div>
                </>
              ))}
          </motion.main>
        </motion.section>
      )}
    </>
  );
};

export default Carrinho;
