import { createContext, ReactNode, useContext, useEffect, useState } from "react";
// Types
import { DadosProduto } from "../types/products";

interface ContextValuesTypes {
  mostrarCarrinho: boolean;
  itensCarrinho: any[];
  quantidadeItensCarrinho: number;
  adicionarAoCarrinho: (produto: DadosProduto, quantidade: number) => void;
}

interface ItemCarrinho extends DadosProduto {
  quantidade: number;
}

const initValues: ContextValuesTypes = { mostrarCarrinho: false, itensCarrinho: [], quantidadeItensCarrinho: 0, adicionarAoCarrinho: () => {} };

const ShopContext = createContext(initValues);

export const StateContext = (props: { children: ReactNode }) => {
  const [mostrarCarrinho, setMostrarCarrinho] = useState<boolean>(false);
  const [itensCarrinho, setItensCarrinho] = useState<ItemCarrinho[]>([]);
  const [quantidadeItensCarrinho, setQuantidadeItensCarrinho] = useState<number>(0);

  useEffect(() => {
    setQuantidadeItensCarrinho(itensCarrinho.reduce((contador, valorAtual) => contador + valorAtual.quantidade, 0));
  }, [itensCarrinho]);

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

  return (
    <ShopContext.Provider value={{ mostrarCarrinho, itensCarrinho, quantidadeItensCarrinho, adicionarAoCarrinho }}>
      {props.children}
    </ShopContext.Provider>
  );
};

export const useShopContext = () => useContext(ShopContext);
