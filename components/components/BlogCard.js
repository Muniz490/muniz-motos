export default function BlogCard({ post }) {
  return (
    <div className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-xl transition">
      <img src={post.imagem} alt={post.titulo} className="w-full h-40 object-cover" />
      <div className="p-4">
        <h2 className="text-xl font-bold text-gray-800">{post.titulo}</h2>
        <p className="text-gray-600 text-sm mb-2">{post.resumo}</p>
        <button className="text-orange-600 font-semibold hover:underline">Ler mais</button>
      </div>
    </div>
  );
  }
