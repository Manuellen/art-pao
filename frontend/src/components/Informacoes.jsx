export default function Informacoes() {
    return (
      <section
        id="informacoes"
        className="bg-marrom px-6 py-24 text-white md:py-32"
      >
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-2 md:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-dourado">
              Visite a Art Pão
            </p>
  
            <h2 className="mt-4 font-serif text-4xl font-bold leading-tight md:text-5xl">
              Pão quentinho e café passado na hora.
            </h2>
  
            <p className="mt-6 max-w-xl leading-7 text-white/75">
              Venha conhecer nossa padaria e aproveitar nossas
              delícias preparadas todos os dias.
            </p>
          </div>
  
          <div className="grid gap-5">
            <div className="rounded-3xl bg-white/10 p-7 backdrop-blur">
              <p className="text-2xl">📍</p>
  
              <h3 className="mt-3 font-serif text-2xl font-bold">
                Endereço
              </h3>
  
              <p className="mt-3 leading-7 text-white/75">
                 R. Duque de Caxias, 835 
                <br />
                Centro — Uberlândia/MG
              </p>
            </div>
  
            <div className="rounded-3xl bg-white/10 p-7 backdrop-blur">
              <p className="text-2xl">🕐</p>
  
              <h3 className="mt-3 font-serif text-2xl font-bold">
                Horário de funcionamento
              </h3>
  
              <div className="mt-3 space-y-1 text-white/75">
                <p>Segunda a sexta: 06h às 19h</p>
                <p>Sábado: 06h às 18h</p>
                <p>Domingo: 07h às 12h</p>
              </div>
            </div>
  
            <div className="rounded-3xl bg-white/10 p-7 backdrop-blur">
              <p className="text-2xl">📱</p>
  
              <h3 className="mt-3 font-serif text-2xl font-bold">
                Atendimento
              </h3>
  
              <p className="mt-3 text-white/75">
                Faça seu pedido pelo WhatsApp ou envie uma
                mensagem pelo nosso formulário.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
