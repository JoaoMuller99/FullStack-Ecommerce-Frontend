import { useRouter } from "next/router";
// Libs
import { motion } from "framer-motion";
import Stripe from "stripe";
// Util
import { formataNumeroParaBRL } from "util/helpers";
// Styles
import styles from "./sucesso_container.module.scss";

export default function SucessoContainer(props: Stripe.Response<Stripe.Checkout.Session>) {
  const router = useRouter();

  const detalhesPedido = props.customer_details;

  const endereco = `${detalhesPedido?.address?.line1} ${detalhesPedido?.address?.line2}`.replaceAll("undefined", "");

  return (
    <div className={styles.container}>
      <motion.div
        className={styles.descricao}
        animate={{ opacity: 1, scale: 1 }}
        initial={{ opacity: 0, scale: 0.75 }}
        transition={{ duration: 0.5 }}
      >
        <div>
          <h1>Obrigado pela sua compra!</h1>
          <h2>Um e-mail de confirmação foi enviado para</h2>
          <h2>{detalhesPedido?.email}</h2>
        </div>
        <div>
          <h3>Endereço</h3>
          <p>
            <span>Cidade:</span> {detalhesPedido?.address?.city || "Não informado"}
          </p>
          <p>
            <span>País:</span> {detalhesPedido?.address?.country || "Não informado"}
          </p>
          <p>
            <span>Endereço:</span> {endereco.trim() !== "" ? endereco : "Não informado"}
          </p>
          <p>
            <span>CEP:</span> {detalhesPedido?.address?.postal_code || "Não informado"}
          </p>
          <p>
            <span>Estado:</span> {detalhesPedido?.address?.state || "Não informado"}
          </p>
        </div>
        <div>
          <h3>Produtos</h3>
          {props.line_items?.data.map((item) => (
            <div key={item.id}>
              <p>
                <span>Produto:</span> {item.description}
              </p>
              <p>
                <span>Quantidade:</span> {item.quantity}
              </p>
              <p>
                <span>Valor:</span>{" "}
                {item.price?.unit_amount ? formataNumeroParaBRL((item.price?.unit_amount / 100) * (item.quantity || 1)) : "Não informado"}
              </p>
            </div>
          ))}
        </div>
        <button onClick={() => router.push("/")}>Continue comprando</button>
      </motion.div>
    </div>
  );
}
