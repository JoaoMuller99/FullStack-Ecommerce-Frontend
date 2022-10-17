import { createContext, ReactNode, useContext, useState } from "react";

interface contextValuesTypes {
  quantidade: number;
  aumentaQuantidade: () => void;
  diminuiQuantidade: () => void;
}

const initValues: contextValuesTypes = { quantidade: 0, aumentaQuantidade: () => {}, diminuiQuantidade: () => {} };

const ShopContext = createContext(initValues);

export const StateContext = (props: { children: ReactNode }) => {
  const [mostrarCarrinho, setMostrarCarrinho] = useState<boolean>(false);
  const [itensCarrinho, setItensCarrinho] = useState([]);
  const [quantidade, setQuantidade] = useState<number>(1);

  const aumentaQuantidade = () => {
    setQuantidade((prevQuantidade) => prevQuantidade + 1);
  };

  const diminuiQuantidade = () => {
    if (quantidade > 1) setQuantidade((prevQuantidade) => prevQuantidade - 1);
    else setQuantidade(1);
  };

  return <ShopContext.Provider value={{ quantidade, aumentaQuantidade, diminuiQuantidade }}>{props.children}</ShopContext.Provider>;
};

export const useStateContext = () => useContext(ShopContext);
