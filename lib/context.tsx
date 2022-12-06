import { createContext, ReactNode, useContext, useEffect, useState } from "react";
// Types
import { DadosProduto } from "types/products";

interface ItemCarrinho extends DadosProduto {
  quantidade: number;
}

interface ContextValuesTypes {
  mostrarCarrinho: boolean;
  alterarExibicaoCarrinho: (acao: "exibir" | "esconder") => void;
  itensCarrinho: ItemCarrinho[];
  quantidadeItensCarrinho: number;
  adicionarAoCarrinho: (produto: DadosProduto, quantidade: number) => void;
  removerDoCarrinho: (produto: ItemCarrinho) => void;
  valorTotalCarrinho: number;
}

const initValues: ContextValuesTypes = {
  mostrarCarrinho: false,
  alterarExibicaoCarrinho: () => {},
  itensCarrinho: [],
  quantidadeItensCarrinho: 0,
  adicionarAoCarrinho: () => {},
  removerDoCarrinho: () => {},
  valorTotalCarrinho: 0,
};

const ShopContext = createContext(initValues);

export const StateContext = (props: { children: ReactNode }) => {
  const [mostrarCarrinho, setMostrarCarrinho] = useState<boolean>(false);
  const [itensCarrinho, setItensCarrinho] = useState<ItemCarrinho[]>([]);
  const [quantidadeItensCarrinho, setQuantidadeItensCarrinho] = useState<number>(0);
  const [valorTotalCarrinho, setValorTotalCarrinho] = useState<number>(0);

  useEffect(() => {
    setQuantidadeItensCarrinho(itensCarrinho.reduce((contador, valorAtual) => contador + valorAtual.quantidade, 0));
    setValorTotalCarrinho(itensCarrinho.reduce((contador, valorAtual) => contador + valorAtual.price * valorAtual.quantidade, 0));
  }, [itensCarrinho]);

  const alterarExibicaoCarrinho = (acao: "exibir" | "esconder") => {
    if (acao === "exibir") setMostrarCarrinho(true);
    else setMostrarCarrinho(false);
  };

  const adicionarAoCarrinho = (produto: DadosProduto, quantidade: number) => {
    const indexProdutoJaAdicionado = itensCarrinho.findIndex((item) => produto.slug === item.slug);

    if (indexProdutoJaAdicionado === -1) {
      setItensCarrinho((prevState) => [...prevState, { ...produto, quantidade }]);
    } else {
      setItensCarrinho((prevState) =>
        prevState.map((item) => (item.slug === produto.slug ? { ...item, quantidade: item.quantidade + quantidade } : item))
      );
    }
  };

  const removerDoCarrinho = (produto: ItemCarrinho) => {
    if (produto.quantidade === 1) {
      setItensCarrinho((prevState) => prevState.filter((item) => item.slug !== produto.slug));
    } else {
      setItensCarrinho((prevState) =>
        prevState.map((item) => (item.slug === produto.slug ? { ...item, quantidade: item.quantidade - 1 } : item))
      );
    }
  };

  return (
    <ShopContext.Provider
      value={{
        mostrarCarrinho,
        alterarExibicaoCarrinho,
        itensCarrinho,
        quantidadeItensCarrinho,
        adicionarAoCarrinho,
        removerDoCarrinho,
        valorTotalCarrinho,
      }}
    >
      {props.children}
    </ShopContext.Provider>
  );
};

export const useShopContext = () => useContext(ShopContext);
