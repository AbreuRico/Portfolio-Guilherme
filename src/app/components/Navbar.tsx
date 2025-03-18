import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-center space-x-6 bg-gray-900 text-white p-4">
      <Link href="/">Home</Link>
      <Link href="/about">Sobre</Link>
      <Link href="/projects">Projetos</Link>
      <Link href="/skills">Habilidades</Link>
      <Link href="/contact">Contato</Link>
    </nav>
  );
}