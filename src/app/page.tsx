import Image from "next/image";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col items-center justify-center min-h-screen px-4 text-center md:px-10">
        <h1 className="text-3xl font-bold md:text-5xl">Olá, eu sou o Guilherme Abreu!</h1>
        <p className="text-lg text-gray-600 mt-4 max-w-lg md:text-xl">
          Tenho 19 anos, completo 20 no dia 13/06/2005, atualmente faço faculdade de Sistemas Para Internet no Senac Nações Unidas e estou trabalhando em uma loja de tênis para esportes como vendedor!
        </p>
      </main>
    </>
  );
}