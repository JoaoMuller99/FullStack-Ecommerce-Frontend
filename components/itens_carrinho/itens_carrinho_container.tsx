import Image from "next/image";
// Libs
import { motion } from "framer-motion";
// Context
import { useShopContext } from "lib/context";
// Icons
import { AiFillMinusCircle, AiFillPlusCircle } from "react-icons/ai";
// Util
import { formataNumeroParaBRL } from "util/helpers";
// Styles
import styles from "./itens_carrinho_container.module.scss";

interface Props {
  itemAnimation: {
    initial: {};
    animate: {};
  };
}

const itensContainerAnimation = {
  initial: { opacity: 1 },
  animate: {
    opacity: 1,
    transition: {
      delayChildren: 0.25,
      staggerChildren: 0.1,
    },
  },
};

const ItensCarrinhoContainer = (props: Props) => {
  const { itensCarrinho, adicionarAoCarrinho, removerDoCarrinho } = useShopContext();

  return (
    <motion.div variants={itensContainerAnimation} animate="animate" initial="initial" layout className={styles.itensContainer}>
      {itensCarrinho.map((item) => {
        const image = item.image.data.attributes.formats.thumbnail;
        return (
          <motion.div layout variants={props.itemAnimation} className={styles.item} key={item.slug}>
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
    </motion.div>
  );
};

export default ItensCarrinhoContainer;
