export default function Sobre() {
  return (
    <section
      id="sobre"
      className="bg-bege px-6 py-24 md:py-32"
    >
      <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-2 md:items-center">

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-marrom-claro">
            Nossa história
          </p>

          <h2 className="mt-4 font-serif text-4xl font-bold leading-tight text-marrom md:text-5xl">
            Feito com carinho,
            <span className="block text-marrom-claro">
              servido com amor.
            </span>
          </h2>

          <div className="mt-8 h-1 w-20 rounded-full bg-dourado" />
        </div>

        <div className="text-lg leading-8 text-marrom-claro">
          <p>
            A <strong>Art Pão Panificadora</strong> nasceu do desejo
            de levar para a mesa das famílias o verdadeiro sabor
            de uma padaria artesanal.
          </p>

          <p className="mt-6">
            Todos os dias, nossos produtos são preparados com
            ingredientes selecionados, cuidado em cada detalhe
            e aquele sabor especial de comida feita com carinho.
          </p>

          <p className="mt-6">
            Pães, bolos, cafés e salgados fazem parte da nossa
            rotina, mas o que realmente queremos oferecer são
            momentos especiais ao redor da mesa.
          </p>

          <p className="mt-6 font-semibold text-marrom">
            Art Pão Panificadora — tradição, carinho e sabor em
            cada receita.
          </p>
        </div>

      </div>
    </section>
  );
}