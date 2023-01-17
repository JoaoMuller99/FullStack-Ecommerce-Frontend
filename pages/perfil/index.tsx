import { InferGetServerSidePropsType } from "next";
// Components
import BtnSair from "components/btn_sair";
import ResumoCompra from "components/resumo_compra";
// Libs
import { getSession, withPageAuthRequired } from "@auth0/nextjs-auth0";
import Stripe from "stripe";
// Util
import { formataNumeroParaBRL } from "util/helpers";

const stripe = new Stripe(process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY || "", { apiVersion: "2022-11-15" });

export const getServerSideProps = withPageAuthRequired({
  async getServerSideProps(ctx) {
    const session = await getSession(ctx.req, ctx.res);
    const stripeId = session?.user[`${process.env.AUTH0_BASE_URL}/stripe_customer_id`];
    const paumentIntents = await stripe.paymentIntents.list({ customer: stripeId });

    return { props: { orders: paumentIntents.data } };
  },
});

export default function Perfil(props: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <div>
      {props.user && (
        <>
          <h2>{props.user.name}</h2>
          <p>{props.user.email}</p>
          <div>
            {props.orders.map((order) => (
              <ResumoCompra key={order.id} idCompra={order.id} valor={formataNumeroParaBRL(order.amount / 100)} email={props.user?.email} />
            ))}
          </div>
          <BtnSair />
        </>
      )}
    </div>
  );
}
