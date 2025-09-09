import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full backdrop-blur-md bg-white/70 border-b border-gray-200 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between p-4">
        <Link href="/" className="text-2xl font-bold text-orange-600 hover:opacity-80 transition">
          Muniz Motos
        </Link>
        <nav className="hidden md:flex space-x-6">
          <Link href="/" className="hover:text-orange-600">🏍️ Início</Link>
          <Link href="/sorteio" className="hover:text-orange-600">🎉 Sorteio Anual</Link>
          <Link href="/blog" className="hover:text-orange-600">📰 Novidades & Blog</Link>
          <Link href="/contato" className="hover:text-orange-600">📞 Contato</Link>
          <a
            href={process.env.NEXT_PUBLIC_WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-orange-600"
          >
            💬 WhatsApp
          </a>
        </nav>
      </div>
    </header>
  );
    }
