export default function MotoCard({ moto }) {
  return (
    <div className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-xl transition">
      <img src={moto.imagem} alt={moto.nome} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="text-xl font-bold text-gray-800">{moto.nome}</h2>
        <p className="text-gray-600 text-sm mb-2">{moto.descricao}</p>
        <p className="text-orange-600 font-bold text-lg">{moto.preco}</p>
      </div>
    </div>
  );
}
