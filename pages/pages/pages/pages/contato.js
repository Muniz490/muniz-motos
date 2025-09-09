import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Contato() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Header />
      <main className="max-w-4xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6 text-orange-600 text-center">Entre em Contato</h1>
        <form className="space-y-4">
          <input type="text" placeholder="Seu nome" className="w-full border rounded-lg p-3" />
          <input type="email" placeholder="Seu email" className="w-full border rounded-lg p-3" />
          <textarea placeholder="Sua mensagem" className="w-full border rounded-lg p-3 h-32"></textarea>
          <button className="px-6 py-3 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition">
            Enviar
          </button>
        </form>
        <div className="text-center mt-8">
          <a
            href={process.env.NEXT_PUBLIC_WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
          >
            📱 Fale no WhatsApp
          </a>
        </div>
      </main>
      <Footer />
    </div>
  );
    }
