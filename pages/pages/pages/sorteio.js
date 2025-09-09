import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Sorteio() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Header />
      <main className="max-w-4xl mx-auto p-6 text-center">
        <h1 className="text-3xl font-bold mb-6 text-orange-600">🎉 Sorteio Anual Muniz Motos</h1>
        <p className="text-lg mb-6">Participe do nosso sorteio anual e concorra a prêmios incríveis!</p>
        <button className="px-6 py-3 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition">
          Inscreva-se Agora
        </button>
      </main>
      <Footer />
    </div>
  );
}
