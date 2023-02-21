# WELCOME || BEM-VINDO

**Para ler esse README em português clique [aqui](https://github.com/JoaoMuller99/FullStack-Ecommerce-Frontend/blob/main/README_PT.md)!**

## See the demo video bellow:
[![image](https://user-images.githubusercontent.com/80433203/220348256-065af9e6-6efc-4923-96ab-58073f0fed36.png)](https://www.youtube.com/watch?v=SGHfFzSTKGM&t=)

## This project was built with

- [Next.js](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Stripe](https://stripe.com/)
- [Auth0](https://auth0.com/)
- [URQL](https://www.npmjs.com/package/urql)
- [Framer Motion](https://www.framer.com/motion/)
- [React Icons](https://react-icons.github.io/react-icons/)
- [React Hot Toast](https://react-hot-toast.com/)
- [Sass](https://sass-lang.com/)

**For this project to work, you will need to clone and run [this](https://github.com/JoaoMuller99/FullStack-Ecommerce-Backend) code aswell!**

## Getting Started

First, install the packages by running:

```bash
npm install
# or
yarn install
```

After that, you will have to configure the following ENVIROMENT VARIABLES at your **.env.local** file (create it in the root folder of this project):

```bash
NEXT_PUBLIC_BACKEND_API="http://localhost:1337/graphql"
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY="YOUR STRIPE KEY"
NEXT_PUBLIC_STRIPE_SECRET_KEY="YOUR STRIPE SECRET KEY"
AUTH0_CLIENT_SECRET="YOUR AUTH0 CLIENT SECRET"
AUTH0_CLIENT_ID="YOUR AUTH0 CLIENT ID"
AUTH0_ISSUER_BASE_URL="YOUR AUTH0 DOMAIN"
AUTH0_SECRET='use [openssl rand -hex 32] to generate a 32 bytes value'
AUTH0_BASE_URL="http://localhost:3000"
```

## Setting Up Stripe

1. Create an account at [https://dashboard.stripe.com/login](https://dashboard.stripe.com/login).
2. Fill in your business profile (you can also skip it and fill it in later).
3. Create a business by clicking on _New Business_ and give it a name.
4. Copy your stripe publishable and secret keys and add it to your .env.local.

## Setting Up Auth0

1. Create an account at [https://auth0.com/](https://auth0.com/).
2. Create a new application.
3. Go to your application settings, copy and paste at your .env.local the needed keys (check the [docs](https://auth0.com/docs/quickstart/webapp/nextjs/interactive) for additional help).
4. Fill in the following fields.

```bash
Allowed Callback URLs: "http://localhost:3000/api/auth/callback"
Allowed Logout URLs: "http://localhost:3000"
Allowed Web URLs: "http://localhost:3000"
```

## Finally

With the backend cofigured and running (click [here](https://github.com/JoaoMuller99/FullStack-Ecommerce-Backend) for more information), you can start the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

This project was created for educational purposes only, so feel free to make some tweaks if you want to. Thank you so much for trying it out!
