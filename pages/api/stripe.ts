import { NextApiRequest, NextApiResponse } from "next";
// Lib
import Stripe from "stripe";

const stripe = new Stripe(process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY || "", { apiVersion: "2022-11-15" });

interface Dados {
  title: string;
  description: string;
  price: number;
  slug: string;
  __typename: string;
  image: {
    data: {
      attributes: {
        formats: {
          thumbnail: {
            url: string;
          };
        };
      };
    };
  };
  quantidade: number;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<any>) {
  if (req.method === "POST") {
    try {
      const session = await stripe.checkout.sessions.create({
        submit_type: "pay",
        mode: "payment",
        payment_method_types: ["card"],
        line_items: req.body.map((item: Dados) => {
          return {
            price_data: {
              currency: "brl",
              product_data: {
                name: item.title,
                images: [item.image.data.attributes.formats.thumbnail.url],
              },
              unit_amount: item.price * 100,
            },
            quantity: item.quantidade,
          };
        }),
        cancel_url: `${req.headers.origin}/canceled`,
        success_url: `${req.headers.origin}/success`,
      });

      res.status(200).json(session);
    } catch (error: any) {
      res.status(error.statusCode || 500).json(error.message);
    }
  }
}
