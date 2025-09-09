import Header from "../components/Header";
import Footer from "../components/Footer";
import MotoCard from "../components/MotoCard";

export default function Home() {
  const motos = [
    { id: 1, nome: "Honda CG 160 Titan", preco: "R$ 14.990", descricao: "Moto confiável e econômica.", imagem: "https://i.imgur.com/3ZQ3Z1J.jpg" },
    { id: 2, nome: "Yamaha XTZ 250", preco: "R$ 22.500", descricao: "Ideal para estrada e off-road.", imagem: "https://i.imgur.com/D4Q2S6m.jpg" },
    { id: 3, nome: "Kawasaki Ninja 400", preco: "R$ 32.900", descricao: "Esportiva ágil e moderna.", imagem: "https://i.imgur.com/4q0xjS2.jpg" },
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      <Header />
      <main className="max-w-6xl mx-auto p-6">
        <h1 className="text-4xl font-bold text-center mb-10 text-orange-600">Bem-vindo à Muniz Motos</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {motos.map((moto) => (
            <MotoCard key={moto.id} moto={moto} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
    }
