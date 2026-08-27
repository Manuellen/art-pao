import { useState } from "react";

export default function Contato() {
  const [formulario, setFormulario] = useState({
    nome: "",
    telefone: "",
    email: "",
    mensagem: "",
  });

  const [enviando, setEnviando] = useState(false);
  const [status, setStatus] = useState("");
  const [erro, setErro] = useState("");

  function alterarCampo(event) {
    const { name, value } = event.target;

    setFormulario((dadosAtuais) => ({
      ...dadosAtuais,
      [name]: value,
    }));
  }

  async function enviarFormulario(event) {
    event.preventDefault();

    setEnviando(true);
    setStatus("");
    setErro("");

    try {
      const resposta = await fetch(
        "http://localhost:3001/api/contato",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify(formulario),
        }
      );

      if (!resposta.ok) {
        throw new Error("Erro ao enviar a mensagem.");
      }

      const dados = await resposta.json();

      setStatus(
        dados.mensagem || "Mensagem enviada com sucesso!"
      );

      setFormulario({
        nome: "",
        telefone: "",
        email: "",
        mensagem: "",
      });
    } catch (erro) {
      console.error(erro);

      setErro(
        "Não foi possível enviar sua mensagem. Tente novamente."
      );
    } finally {
      setEnviando(false);
    }
  }

  return (
    <section
      id="contato"
      className="bg-bege px-6 py-24 md:py-32"
    >
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-marrom-claro">
            Fale conosco
          </p>

          <h2 className="mt-4 font-serif text-4xl font-bold text-marrom md:text-5xl">
            Estamos esperando sua mensagem.
          </h2>

          <p className="mt-6 max-w-lg leading-7 text-marrom-claro">
            Ficou com alguma dúvida, quer fazer uma encomenda
            especial ou falar com nossa equipe? Envie uma
            mensagem.
          </p>

          <div className="mt-8 rounded-3xl bg-dourado/20 p-6">
            <p className="font-semibold text-marrom">
              💡 Para pedidos rápidos
            </p>

            <p className="mt-2 text-sm leading-6 text-marrom-claro">
              Utilize o cardápio e finalize diretamente pelo
              WhatsApp. Este formulário é ideal para dúvidas,
              encomendas especiais e outras mensagens.
            </p>
          </div>
        </div>

        <form
          onSubmit={enviarFormulario}
          className="rounded-3xl bg-white p-7 shadow-lg md:p-9"
        >
          <div>
            <label
              htmlFor="contato-nome"
              className="mb-2 block text-sm font-semibold text-marrom"
            >
              Nome *
            </label>

            <input
              id="contato-nome"
              type="text"
              name="nome"
              value={formulario.nome}
              onChange={alterarCampo}
              required
              placeholder="Seu nome"
              className="w-full rounded-xl border border-marrom/20 px-4 py-3 outline-none focus:border-dourado"
            />
          </div>

          <div className="mt-5">
            <label
              htmlFor="contato-telefone"
              className="mb-2 block text-sm font-semibold text-marrom"
            >
              Telefone / WhatsApp *
            </label>

            <input
              id="contato-telefone"
              type="tel"
              name="telefone"
              value={formulario.telefone}
              onChange={alterarCampo}
              required
              placeholder="(34) 99999-9999"
              className="w-full rounded-xl border border-marrom/20 px-4 py-3 outline-none focus:border-dourado"
            />
          </div>

          <div className="mt-5">
            <label
              htmlFor="contato-email"
              className="mb-2 block text-sm font-semibold text-marrom"
            >
              E-mail
            </label>

            <input
              id="contato-email"
              type="email"
              name="email"
              value={formulario.email}
              onChange={alterarCampo}
              placeholder="voce@email.com"
              className="w-full rounded-xl border border-marrom/20 px-4 py-3 outline-none focus:border-dourado"
            />
          </div>

          <div className="mt-5">
            <label
              htmlFor="contato-mensagem"
              className="mb-2 block text-sm font-semibold text-marrom"
            >
              Mensagem *
            </label>

            <textarea
              id="contato-mensagem"
              name="mensagem"
              value={formulario.mensagem}
              onChange={alterarCampo}
              required
              rows="5"
              placeholder="Digite sua mensagem..."
              className="w-full resize-none rounded-xl border border-marrom/20 px-4 py-3 outline-none focus:border-dourado"
            />
          </div>

          <button
            type="submit"
            disabled={enviando}
            className="mt-6 w-full rounded-xl bg-marrom px-5 py-4 font-bold text-white hover:bg-marrom-claro disabled:cursor-not-allowed disabled:opacity-50"
          >
            {enviando
              ? "Enviando..."
              : "Enviar mensagem"}
          </button>

          {status && (
            <p className="mt-4 rounded-xl bg-green-100 p-4 text-center font-semibold text-green-800">
              {status}
            </p>
          )}

          {erro && (
            <p className="mt-4 rounded-xl bg-red-100 p-4 text-center font-semibold text-red-700">
              {erro}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}