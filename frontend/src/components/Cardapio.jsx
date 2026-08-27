import { useEffect, useState } from "react";
import { useCart } from "../context/CartContext";
import { API_URL } from "../config";

const categorias = [
  "Todos",
  "Pães",
  "Bolos",
  "Cafés",
  "Salgados",
];

export default function Cardapio() {
  const { adicionarAoCarrinho } = useCart();
  const [produtos, setProdutos] = useState([]);
  const [categoriaSelecionada, setCategoriaSelecionada] =
    useState("Todos");

  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState("");

  useEffect(() => {
    async function buscarCardapio() {
      try {
        const resposta = await fetch(
            `${API_URL}/api/cardapio`
          );

        if (!resposta.ok) {
          throw new Error("Não foi possível carregar o cardápio.");
        }

        const dados = await resposta.json();

        setProdutos(dados);
      } catch (erro) {
        console.error(erro);
        setErro("Não foi possível carregar o cardápio.");
      } finally {
        setCarregando(false);
      }
    }

    buscarCardapio();
  }, []);

  const produtosFiltrados =
    categoriaSelecionada === "Todos"
      ? produtos
      : produtos.filter(
          (produto) =>
            produto.categoria === categoriaSelecionada
        );

  return (
    <section
      id="cardapio"
      className="bg-creme px-6 py-24 md:py-32"
    >
      <div className="mx-auto max-w-7xl">

        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-marrom-claro">
            Nossas delícias
          </p>

          <h2 className="mt-4 font-serif text-4xl font-bold text-marrom md:text-5xl">
            Nosso Cardápio
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-marrom-claro">
            Escolha entre nossos pães, bolos, cafés e salgados
            preparados todos os dias.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {categorias.map((categoria) => (
            <button
              key={categoria}
              type="button"
              onClick={() =>
                setCategoriaSelecionada(categoria)
              }
              className={`rounded-full px-5 py-3 font-semibold ${
                categoriaSelecionada === categoria
                  ? "bg-marrom text-white"
                  : "bg-bege text-marrom hover:bg-dourado"
              }`}
            >
              {categoria}
            </button>
          ))}
        </div>

        {carregando && (
          <p className="mt-12 text-center text-marrom-claro">
            Carregando cardápio...
          </p>
        )}

        {erro && (
          <p className="mt-12 text-center font-semibold text-red-700">
            {erro}
          </p>
        )}

        {!carregando && !erro && (
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {produtosFiltrados.map((produto) => (
                <article
  key={produto.id}
  className="group overflow-hidden rounded-3xl bg-white shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-xl"
>
  <div className="relative overflow-hidden">

    <img
      src={produto.imagem}
      alt={produto.nome}
      className="h-56 w-full object-cover transition duration-500 group-hover:scale-105"
    />

    <span className="absolute left-4 top-4 rounded-full bg-marrom/90 px-4 py-2 text-xs font-bold uppercase tracking-wider text-white">
      {produto.categoria}
    </span>

  </div>

  <div className="p-6">

    <div className="flex items-start justify-between gap-4">

      <h3 className="font-serif text-2xl font-bold text-marrom">
        {produto.nome}
      </h3>

      <strong className="whitespace-nowrap text-lg text-marrom">
        R$ {Number(produto.preco).toFixed(2)}
      </strong>

    </div>

    <p className="mt-4 min-h-[56px] leading-7 text-marrom-claro">
      {produto.descricao}
    </p>

    <button
      type="button"
      onClick={() => adicionarAoCarrinho(produto)}
      className="mt-6 w-full rounded-xl bg-marrom px-5 py-3 font-semibold text-white transition hover:bg-marrom-claro"
    >
      Adicionar ao pedido
    </button>

  </div>
</article>
            ))}
          </div>
        )}

      </div>
    </section>

  );}