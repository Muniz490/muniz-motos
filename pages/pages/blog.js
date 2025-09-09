import Header from "../components/Header";
import Footer from "../components/Footer";
import BlogCard from "../components/BlogCard";

export default function Blog() {
  const posts = [
    { id: 1, titulo: "Dicas para cuidar da sua moto", resumo: "Aprenda os principais cuidados para prolongar a vida útil da sua motocicleta.", imagem: "https://i.imgur.com/h1V8K1W.jpg" },
    { id: 2, titulo: "Financiamento facilitado", resumo: "Veja como funciona o financiamento aqui na Muniz Motos.", imagem: "https://i.imgur.com/nU87yWz.jpg" },
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      <Header />
      <main className="max-w-6xl mx-auto p-6">
        <h1 className="text-3xl font-bold text-center mb-10 text-orange-600">Novidades & Blog</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {posts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
