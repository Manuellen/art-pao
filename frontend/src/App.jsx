import { useState } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Sobre from "./components/Sobre";
import Cardapio from "./components/Cardapio";
import Informacoes from "./components/Informacoes";
import Contato from "./components/Contato";
import Carrinho from "./components/Carrinho";
import WhatsAppFloat from "./components/WhatsAppFloat";

export default function App() {
  const [carrinhoAberto, setCarrinhoAberto] =
    useState(false);

  return (
    <>
      <Navbar
        abrirCarrinho={() => setCarrinhoAberto(true)}
      />

      <main>
        <Hero />
        <Sobre />
        <Cardapio />
        <Informacoes />
        <Contato />
      </main>

      <Carrinho
        aberto={carrinhoAberto}
        fechar={() => setCarrinhoAberto(false)}
      />

      <WhatsAppFloat />      

      <footer className="bg-[#2d1b14] px-6 py-10 text-center text-white">
        <h2 className="font-serif text-2xl font-bold">
          Art Pão
        </h2>

        <p className="mt-1 text-xs tracking-[0.3em] text-dourado">
          PANIFICADORA
        </p>

        <p className="mt-5 text-sm text-white/50">
          © {new Date().getFullYear()} Art Pão
          Panificadora. Todos os direitos reservados.
        </p>
      </footer>
    </>
  );
}