import { useState } from "react";
import { useCart } from "../context/CartContext";

export default function Navbar({ abrirCarrinho }) {
  const [menuAberto, setMenuAberto] = useState(false);

  const { quantidadeTotal } = useCart();

  function fecharMenu() {
    setMenuAberto(false);
  }

  return (
    <nav className="fixed left-0 top-0 z-50 w-full bg-marrom/95 text-white shadow-lg backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        <a
          href="#inicio"
          onClick={fecharMenu}
          className="flex items-center gap-3"
        >
          <img
            src="/art.pao.jpeg"
            alt="Logo Art Pão Panificadora"
            className="h-14 w-14 rounded-full object-cover shadow-md"
          />

          <div>
            <h1 className="font-serif text-xl font-bold">
              Art Pão
            </h1>

            <p className="text-xs tracking-[0.25em] text-dourado">
              PANIFICADORA
            </p>
          </div>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          <a href="#inicio" className="hover:text-dourado">
            Início
          </a>

          <a href="#sobre" className="hover:text-dourado">
            Sobre nós
          </a>

          <a href="#cardapio" className="hover:text-dourado">
            Cardápio
          </a>

          <a href="#informacoes" className="hover:text-dourado">
            Informações
          </a>

          <a href="#contato" className="hover:text-dourado">
            Contato
          </a>
        </div>

        <button
           type="button"
           onClick={abrirCarrinho}
           className="relative rounded-full bg-dourado px-5 py-2 font-bold text-marrom"
         
        >
           🛒 Pedido

          {quantidadeTotal > 0 && (
            <span className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-white text-xs font-bold text-marrom">
              {quantidadeTotal}
            </span>
          )}
        </button>

        <button
          type="button"
          className="text-3xl md:hidden"
          onClick={() => setMenuAberto(!menuAberto)}
          aria-label="Abrir menu"
        >
          {menuAberto ? "×" : "☰"}
        </button>
      </div>

      {menuAberto && (
        <div className="bg-marrom px-6 pb-5 md:hidden">

          <a
            href="#inicio"
            onClick={fecharMenu}
            className="block border-t border-white/10 py-3"
          >
            Início
          </a>

          <a
            href="#sobre"
            onClick={fecharMenu}
            className="block border-t border-white/10 py-3"
          >
            Sobre nós
          </a>

          <a
            href="#cardapio"
            onClick={fecharMenu}
            className="block border-t border-white/10 py-3"
          >
            Cardápio
          </a>

          <a
            href="#informacoes"
            onClick={fecharMenu}
            className="block border-t border-white/10 py-3"
          >
            Informações
          </a>

          <a
            href="#contato"
            onClick={fecharMenu}
            className="block border-t border-white/10 py-3"
          >
            Contato
          </a>

        </div>
      )}
    </nav>
  );
}