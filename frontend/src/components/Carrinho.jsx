import { useState } from "react";
import { useCart } from "../context/CartContext";

export default function Carrinho({ aberto, fechar }) {
  const {
    carrinho,
    aumentarQuantidade,
    diminuirQuantidade,
    removerDoCarrinho,
    valorTotal,
  } = useCart();

  const [cliente, setCliente] = useState({
    nome: "",
    telefone: "",
    recebimento: "Retirada",
    endereco: "",
    observacao: "",
  });

  function alterarCampo(event) {
    const { name, value } = event.target;

    setCliente((dadosAtuais) => ({
      ...dadosAtuais,
      [name]: value,
    }));
  }

  function finalizarWhatsApp() {
    if (!cliente.nome.trim()) {
      alert("Por favor, informe seu nome.");
      return;
    }

    if (!cliente.telefone.trim()) {
      alert("Por favor, informe seu telefone.");
      return;
    }

    if (
      cliente.recebimento === "Entrega" &&
      !cliente.endereco.trim()
    ) {
      alert("Por favor, informe o endereço para entrega.");
      return;
    }

    const numero = "5534999999999";

    const itens = carrinho
      .map((item) => {
        const subtotal =
          Number(item.preco) * item.quantidade;

        return `${item.quantidade}x ${item.nome}
R$ ${subtotal.toFixed(2)}`;
      })
      .join("\n\n");

    const endereco =
      cliente.recebimento === "Entrega"
        ? `\n📍 Endereço: ${cliente.endereco}`
        : "";

    const observacao = cliente.observacao.trim()
      ? `\n\n📝 Observação:\n${cliente.observacao}`
      : "";

    const mensagem = `🥖 PEDIDO — ART PÃO PANIFICADORA

👤 Cliente: ${cliente.nome}
📱 Telefone: ${cliente.telefone}
📦 Recebimento: ${cliente.recebimento}${endereco}

🛒 ITENS DO PEDIDO

${itens}

💰 TOTAL: R$ ${valorTotal.toFixed(2)}${observacao}

Gostaria de confirmar a disponibilidade do pedido.`;

    const url = `https://wa.me/${numero}?text=${encodeURIComponent(
      mensagem
    )}`;

    window.open(url, "_blank");
  }

  return (
    <>
      {aberto && (
        <div
          onClick={fechar}
          className="fixed inset-0 z-50 bg-black/40"
        />
      )}

      <aside
        className={`fixed right-0 top-0 z-[60] h-full w-full max-w-md bg-creme shadow-2xl transition-transform duration-300 ${
          aberto ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex h-full flex-col">

          {/* Cabeçalho */}
          <div className="flex items-center justify-between border-b border-marrom/10 px-6 py-5">
            <h2 className="font-serif text-2xl font-bold text-marrom">
              🛒 Seu pedido
            </h2>

            <button
              type="button"
              onClick={fechar}
              className="text-3xl text-marrom"
              aria-label="Fechar carrinho"
            >
              ×
            </button>
          </div>

          {/* Conteúdo */}
          <div className="flex-1 overflow-y-auto p-6">
            {carrinho.length === 0 ? (
              <div className="flex h-full flex-col items-center justify-center text-center">
                <p className="text-5xl">🥖</p>

                <h3 className="mt-4 font-serif text-2xl font-bold text-marrom">
                  Seu carrinho está vazio
                </h3>

                <p className="mt-2 text-marrom-claro">
                  Adicione alguns produtos do cardápio.
                </p>
              </div>
            ) : (
              <>
                {/* Produtos */}
                <div className="space-y-5">
                  {carrinho.map((item) => (
                    <div
                      key={item.id}
                      className="rounded-2xl bg-white p-5 shadow-sm"
                    >
                      <div className="flex justify-between gap-4">
                        <div>
                          <h3 className="font-serif text-xl font-bold text-marrom">
                            {item.nome}
                          </h3>

                          <p className="mt-1 text-sm text-marrom-claro">
                            R$ {Number(item.preco).toFixed(2)} cada
                          </p>
                        </div>

                        <button
                          type="button"
                          onClick={() =>
                            removerDoCarrinho(item.id)
                          }
                          className="text-sm font-semibold text-red-600"
                        >
                          Remover
                        </button>
                      </div>

                      <div className="mt-5 flex items-center justify-between">
                        <div className="flex items-center gap-3">

                          <button
                            type="button"
                            onClick={() =>
                              diminuirQuantidade(item.id)
                            }
                            className="flex h-9 w-9 items-center justify-center rounded-full bg-bege font-bold text-marrom"
                          >
                            −
                          </button>

                          <span className="min-w-6 text-center font-bold text-marrom">
                            {item.quantidade}
                          </span>

                          <button
                            type="button"
                            onClick={() =>
                              aumentarQuantidade(item.id)
                            }
                            className="flex h-9 w-9 items-center justify-center rounded-full bg-dourado font-bold text-marrom"
                          >
                            +
                          </button>

                        </div>

                        <strong className="text-marrom">
                          R${" "}
                          {(
                            Number(item.preco) *
                            item.quantidade
                          ).toFixed(2)}
                        </strong>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Checkout */}
                <div className="mt-8 border-t border-marrom/10 pt-8">

                  <p className="font-serif text-2xl font-bold text-marrom">
                    Seus dados
                  </p>

                  <p className="mt-2 text-sm text-marrom-claro">
                    Preencha para enviarmos o pedido completo.
                  </p>

                  <div className="mt-5 space-y-4">

                    <div>
                      <label
                        htmlFor="nome"
                        className="mb-2 block text-sm font-semibold text-marrom"
                      >
                        Nome *
                      </label>

                      <input
                        id="nome"
                        type="text"
                        name="nome"
                        value={cliente.nome}
                        onChange={alterarCampo}
                        placeholder="Seu nome"
                        className="w-full rounded-xl border border-marrom/20 bg-white px-4 py-3 outline-none focus:border-dourado"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="telefone"
                        className="mb-2 block text-sm font-semibold text-marrom"
                      >
                        Telefone / WhatsApp *
                      </label>

                      <input
                        id="telefone"
                        type="tel"
                        name="telefone"
                        value={cliente.telefone}
                        onChange={alterarCampo}
                        placeholder="(34) 99999-9999"
                        className="w-full rounded-xl border border-marrom/20 bg-white px-4 py-3 outline-none focus:border-dourado"
                      />
                    </div>

                    <div>
                      <p className="mb-2 text-sm font-semibold text-marrom">
                        Como deseja receber? *
                      </p>

                      <div className="grid grid-cols-2 gap-3">

                        <button
                          type="button"
                          onClick={() =>
                            setCliente((dados) => ({
                              ...dados,
                              recebimento: "Retirada",
                            }))
                          }
                          className={`rounded-xl px-4 py-3 font-semibold ${
                            cliente.recebimento === "Retirada"
                              ? "bg-marrom text-white"
                              : "bg-bege text-marrom"
                          }`}
                        >
                          Retirada
                        </button>

                        <button
                          type="button"
                          onClick={() =>
                            setCliente((dados) => ({
                              ...dados,
                              recebimento: "Entrega",
                            }))
                          }
                          className={`rounded-xl px-4 py-3 font-semibold ${
                            cliente.recebimento === "Entrega"
                              ? "bg-marrom text-white"
                              : "bg-bege text-marrom"
                          }`}
                        >
                          Entrega
                        </button>

                      </div>
                    </div>

                    {cliente.recebimento === "Entrega" && (
                      <div>
                        <label
                          htmlFor="endereco"
                          className="mb-2 block text-sm font-semibold text-marrom"
                        >
                          Endereço *
                        </label>

                        <input
                          id="endereco"
                          type="text"
                          name="endereco"
                          value={cliente.endereco}
                          onChange={alterarCampo}
                          placeholder="Rua, número, bairro..."
                          className="w-full rounded-xl border border-marrom/20 bg-white px-4 py-3 outline-none focus:border-dourado"
                        />
                      </div>
                    )}

                    <div>
                      <label
                        htmlFor="observacao"
                        className="mb-2 block text-sm font-semibold text-marrom"
                      >
                        Observações
                      </label>

                      <textarea
                        id="observacao"
                        name="observacao"
                        value={cliente.observacao}
                        onChange={alterarCampo}
                        rows="3"
                        placeholder="Ex.: retirar às 16h, sem cebola..."
                        className="w-full resize-none rounded-xl border border-marrom/20 bg-white px-4 py-3 outline-none focus:border-dourado"
                      />
                    </div>

                  </div>
                </div>
              </>
            )}
          </div>

          {/* Rodapé */}
          {carrinho.length > 0 && (
            <div className="border-t border-marrom/10 bg-white p-6">

              <div className="flex items-center justify-between">
                <span className="text-lg font-semibold text-marrom">
                  Total
                </span>

                <strong className="font-serif text-2xl text-marrom">
                  R$ {valorTotal.toFixed(2)}
                </strong>
              </div>

              <button
                type="button"
                onClick={finalizarWhatsApp}
                className="mt-5 w-full rounded-xl bg-green-600 px-5 py-4 font-bold text-white hover:bg-green-700"
              >
                Finalizar pelo WhatsApp
              </button>

            </div>
          )}
        </div>
      </aside>
    </>
  );
}