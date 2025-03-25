import Navbar from "@/app/components/Navbar";

export default function Skills() {
  return (
    <>
      <Navbar />
      <main className="p-6 md:p-10 bg-gradient-to-r from-teal-400 to-indigo-600">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-yellow-400 mb-6">
          Habilidades
        </h1>
        <ul className="list-disc pl-6 space-y-2 text-lg text-white max-w-3xl mx-auto">
          <li className="flex items-center">
            <span className="mr-2 text-yellow-300">✓</span> Ensino Médio Completo
          </li>
          <li className="flex items-center">
            <span className="mr-2 text-yellow-300">✓</span> Facilidade de Aprendizado
          </li>
          <li className="flex items-center">
            <span className="mr-2 text-yellow-300">✓</span> Vendas em geral
          </li>
          <li className="flex items-center">
            <span className="mr-2 text-yellow-300">✓</span> Organização
          </li>
          <li className="flex items-center">
            <span className="mr-2 text-yellow-300">✓</span> Pacote Office Intermediário
          </li>
          <li className="flex items-center">
            <span className="mr-2 text-yellow-300">✓</span> HTML, CSS e JS
          </li>
        </ul>
      </main>
    </>
  );
}
