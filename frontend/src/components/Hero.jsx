export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-screen items-center overflow-hidden bg-marrom px-6"
    >
      <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-dourado/20 blur-3xl" />

      <div className="absolute -bottom-40 -left-32 h-96 w-96 rounded-full bg-dourado/10 blur-3xl" />

      <div className="relative mx-auto w-full max-w-7xl pt-24">
        <div className="max-w-3xl">

          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.3em] text-dourado">
            Feito artesanalmente
          </p>

          <h2 className="font-serif text-5xl font-bold leading-tight text-white md:text-7xl">
            O sabor que transforma
            <span className="block text-dourado">
              momentos em memórias.
            </span>
          </h2>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-white/75">
            Pães artesanais, bolos, cafés e salgados preparados
            todos os dias com carinho e ingredientes selecionados.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="#cardapio"
              className="rounded-full bg-dourado px-8 py-4 font-bold text-marrom hover:-translate-y-1"
            >
              Ver cardápio
            </a>

            <a
              href="#sobre"
              className="rounded-full border border-white/30 px-8 py-4 font-semibold text-white hover:border-dourado hover:text-dourado"
            >
              Conheça nossa história
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}