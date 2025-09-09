import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Admin() {
  const [token, setToken] = useState("");
  const [logado, setLogado] = useState(false);

  const handleLogin = () => {
    if (token === process.env.ADMIN_TOKEN) {
      setLogado(true);
    } else {
      alert("Token inválido!");
    }
  };

  if (!logado) {
    return (
      <div className="bg-gray-50 min-h-screen flex flex-col justify-center items-center">
        <h1 className="text-2xl font-bold mb-4">Login Admin</h1>
        <input
          type="password"
          placeholder="Digite o token"
          value={token}
          onChange={(e) => setToken(e.target.value)}
          className="border rounded-lg p-3 mb-4"
        />
        <button onClick={handleLogin} className="px-6 py-3 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition">
          Entrar
        </button>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      <Header />
      <main className="max-w-4xl mx-auto p-6">
        <h1 className="text-3xl font-bold text-orange-600 mb-6">Painel Administrativo</h1>
        <p>Futuras funções: adicionar motos, gerenciar blog, visualizar contatos.</p>
      </main>
      <Footer />
    </div>
  );
    }
