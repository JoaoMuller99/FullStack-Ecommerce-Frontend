import Image from "next/image";
// Context
import { useEffect } from "react";
import { useShopContext } from "../../lib/context";
// Icons
import { FaShoppingCart } from "react-icons/fa";
import { AiFillMinusCircle, AiFillPlusCircle } from "react-icons/ai";
// Styles
import styles from "./carrinho.module.scss";

const Carrinho = () => {
  const { mostrarCarrinho, alterarExibicaoCarrinho, itensCarrinho } = useShopContext();

  useEffect(() => {
    const body = document.getElementsByTagName("body")[0];

    if (mostrarCarrinho) body.style.overflow = "hidden";
    else body.style.overflow = "auto";
  }, [mostrarCarrinho]);

  return (
    <>
      <section className={`${styles.container} ${mostrarCarrinho ? styles.exibir : ""}`} onClick={() => alterarExibicaoCarrinho("esconder")}>
        <main onClick={(e) => e.stopPropagation()}>
          {itensCarrinho &&
            (itensCarrinho.length === 0 ? (
              <div className={styles.carrinhoVazio}>
                <h1>Você possui algumas compras para fazer 😉</h1>
                <FaShoppingCart />
              </div>
            ) : (
              itensCarrinho.map((item) => {
                const image = item.image.data.attributes.formats.thumbnail;
                return (
                  <div className={styles.item} key={item.slug}>
                    <Image src={image.url} width={image.width} height={image.height} alt={image.name} />
                    <div>
                      <h3>{item.title}</h3>
                      <h3>{item.price}</h3>
                      <div className={styles.quantidadeContainer}>
                        <span>Quantidade</span>
                        <button>
                          <AiFillMinusCircle />
                        </button>
                        <p>{item.quantidade}</p>
                        <button>
                          <AiFillPlusCircle />
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })
            ))}
        </main>
      </section>
    </>
  );
};

export default Carrinho;
