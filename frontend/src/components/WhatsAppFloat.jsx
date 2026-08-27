export default function WhatsAppFloat() {
    const numero = "5534991045329";
  
    const mensagem =
      "Olá, Art Pão! Gostaria de tirar uma dúvida.";
  
    const url = `https://wa.me/${numero}?text=${encodeURIComponent(
      mensagem
    )}`;
  
    return (
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar com a Art Pão pelo WhatsApp"
        className="fixed bottom-6 right-6 z-40 flex h-16 w-16 items-center justify-center rounded-full bg-green-600 text-3xl text-white shadow-xl transition hover:-translate-y-1 hover:scale-105 hover:bg-green-700"
      >
        ☎
      </a>
    );
  }