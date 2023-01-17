// Libs
import toast from "react-hot-toast";

export const formataNumeroParaBRL = (numero: number): string => {
  /**
   * Formata o número para os padrões brasileiros, adiciando a moeda na frente
   * Ex: 10000.5 é transformado em R$10.000,50
   * @param {number} numero [Número a ser transformado]
   * @return {string} [Retorna o número modificado, em formato de string]
   */
  return new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(numero);
};

export const notificacao = () => {
  toast.success("Adicionado ao carrinho!", { duration: 1500 });
};
