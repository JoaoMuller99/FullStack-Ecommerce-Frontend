interface Imagem {
  ext: string;
  hash: string;
  height: number;
  mime: string;
  name: string;
  path: string | null;
  provider_metadata: { public_id: string; resource_type: string };
  size: number;
  url: string;
  width: number;
}

interface ImagemObj {
  data: {
    attributes: {
      formats: {
        large: Imagem;
        medium: Imagem;
        small: Imagem;
        thumbnail: Imagem;
      };
    };
  };
}

export type DadosProduto = {
  description: string;
  image: ImagemObj;
  price: number;
  slug: string;
  title: string;
};
export type Dados = { attributes: DadosProduto };
export type Produtos = { products: { data: Dados[] } };
