import Image from "next/image";
import Navbar from "../components/Navbar";

export default function About() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col items-center justify-center min-h-screen p-6 bg-gray-100">
        <h1 className="text-4xl font-semibold text-blue-600 mb-6 text-center">
          Sobre Mim
        </h1>
        <Image
          src="/profile.jpeg"
          width={200}
          height={200}
          alt="Foto de Guilherme"
          className="rounded-full shadow-xl mb-6"
        />
        <p className="text-lg text-gray-700 mt-4 max-w-3xl text-center px-4 md:px-6">
          Sou estudante de Sistemas para Internet no Senac Nações Unidas e trabalho
          com vendas de tênis esportivos, gosto muito de estar com meus amigos, sair para jantar, 
          jogar bola, jogar videogame e assistir futebol também.
        </p>
      </main>
    </>
  );
}

