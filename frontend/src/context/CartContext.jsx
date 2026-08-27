import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [carrinho, setCarrinho] = useState([]);

  function adicionarAoCarrinho(produto) {
    setCarrinho((carrinhoAtual) => {
      const produtoExistente = carrinhoAtual.find(
        (item) => item.id === produto.id
      );

      if (produtoExistente) {
        return carrinhoAtual.map((item) =>
          item.id === produto.id
            ? { ...item, quantidade: item.quantidade + 1 }
            : item
        );
      }

      return [
        ...carrinhoAtual,
        {
          ...produto,
          quantidade: 1,
        },
      ];
    });
  }

  function aumentarQuantidade(id) {
    setCarrinho((carrinhoAtual) =>
      carrinhoAtual.map((item) =>
        item.id === id
          ? { ...item, quantidade: item.quantidade + 1 }
          : item
      )
    );
  }

  function diminuirQuantidade(id) {
    setCarrinho((carrinhoAtual) =>
      carrinhoAtual
        .map((item) =>
          item.id === id
            ? { ...item, quantidade: item.quantidade - 1 }
            : item
        )
        .filter((item) => item.quantidade > 0)
    );
  }

  function removerDoCarrinho(id) {
    setCarrinho((carrinhoAtual) =>
      carrinhoAtual.filter((item) => item.id !== id)
    );
  }

  const quantidadeTotal = carrinho.reduce(
    (total, item) => total + item.quantidade,
    0
  );

  const valorTotal = carrinho.reduce(
    (total, item) => total + Number(item.preco) * item.quantidade,
    0
  );

  return (
    <CartContext.Provider
      value={{
        carrinho,
        adicionarAoCarrinho,
        aumentarQuantidade,
        diminuirQuantidade,
        removerDoCarrinho,
        quantidadeTotal,
        valorTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}