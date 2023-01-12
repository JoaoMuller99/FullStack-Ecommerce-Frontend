import { GetServerSideProps, InferGetServerSidePropsType } from "next";
// Libs
import Stripe from "stripe";
// Components
import SucessoContainer from "components/sucesso_container";

interface SucessoProps {
  pedido: Stripe.Response<Stripe.Checkout.Session>;
}

const stripe = new Stripe(process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY || "", { apiVersion: "2022-11-15" });

export const getServerSideProps: GetServerSideProps<SucessoProps> = async (context) => {
  const sessionId = context.query.session_id;

  try {
    const pedido = await stripe.checkout.sessions.retrieve(typeof sessionId === "string" ? sessionId : "", {
      expand: ["line_items"],
    });

    return { props: { pedido } };
  } catch {
    return { notFound: true };
  }
};

export default function Sucesso(props: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return <SucessoContainer {...props.pedido} />;
}
