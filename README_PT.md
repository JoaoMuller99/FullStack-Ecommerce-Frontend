# BEM-VINDO || WELCOME

Esse é um projeto [Next.js](https://nextjs.org/) criado com [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

**To read this README in english click [here](https://github.com/JoaoMuller99/FullStack-Ecommerce-Frontend/blob/main/README.md)!**

**Para esse projeto funcionar, você precisará clonar e rodar [esse](https://github.com/JoaoMuller99/FullStack-Ecommerce-Backend) código também!**

## Começando

Primeiro, instale os pacotes rodando o comando:

```bash
npm install
# ou
yarn install
```

Depois disso, você precisará configurar as seguintes VARIÁVEIS DE AMBIENTE no seu arquivo **.env.local** (crie ele na pasta principal do seu projeto):

```bash
NEXT_PUBLIC_BACKEND_API="http://localhost:1337/graphql"
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY="SUA STRIPE KEY"
NEXT_PUBLIC_STRIPE_SECRET_KEY="SUA STRIPE SECRET KEY"
AUTH0_CLIENT_SECRET="SEU AUTH0 CLIENT SECRET"
AUTH0_CLIENT_ID="SEU AUTH0 CLIENT ID"
AUTH0_ISSUER_BASE_URL="SEU AUTH0 DOMAIN"
AUTH0_SECRET='use [openssl rand -hex 32] para gerar uma sequência 32 bytes'
AUTH0_BASE_URL="http://localhost:3000"
```

## Configurando o Stripe

1. Crie uma conta em [https://dashboard.stripe.com/login](https://dashboard.stripe.com/login).
2. Preencha os dados do seu negócio (você pode pular e preencher mais tarde).
3. Crie um negócio clicando em _New Business_ e dê um nome.
4. Copie suas chaves do stripe (publishable e secret keys) e adicione elas ao seu arquivo .env.local.

## Configurando o Auth0

1. Crie uma conta em [https://auth0.com/](https://auth0.com/).
2. Crie uma nova aplicação.
3. Vá nas configurações da sua aplicação, copie e cole, no seu arquivo .env.local, as chaves necessárias (dê uma olhada na [documentação](https://auth0.com/docs/quickstart/webapp/nextjs/interactive) para informações adicionais).
4. Preencha os seguintes campos.

```bash
Allowed Callback URLs: "http://localhost:3000/api/auth/callback"
Allowed Logout URLs: "http://localhost:3000"
Allowed Web URLs: "http://localhost:3000"
```

## Finalmente

Com o backend configurado e rodando (clique [aqui](https://github.com/JoaoMuller99/FullStack-Ecommerce-Backend) para mais informações), você pode iniciar o servidor de desenvolvimento:

```bash
npm run dev
# or
yarn dev
```

Abra [http://localhost:3000](http://localhost:3000) no seu navegador para ver o resultado.
