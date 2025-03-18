import Navbar from "@/app/components/Navbar";

export default function Skills() {
  return (
    <>
      <Navbar />
      <main className="p-6 md:p-10 bg-gray-50">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-blue-600 mb-6">
          Habilidades
        </h1>
        <ul className="list-disc pl-6 space-y-2 text-lg text-gray-700 max-w-3xl mx-auto">
          <li className="flex items-center">
            <span className="mr-2 text-blue-500">✓</span> Ensino Médio Completo
          </li>
          <li className="flex items-center">
            <span className="mr-2 text-blue-500">✓</span> Facilidade de Aprendizado
          </li>
          <li className="flex items-center">
            <span className="mr-2 text-blue-500">✓</span> Vendas em geral
          </li>
          <li className="flex items-center">
            <span className="mr-2 text-blue-500">✓</span> Organização
          </li>
          <li className="flex items-center">
            <span className="mr-2 text-blue-500">✓</span> Pacote Office Intermediário
          </li>
          <li className="flex items-center">
            <span className="mr-2 text-blue-500">✓</span> HTML, CSS e JS
          </li>
        </ul>
      </main>
    </>
  );
}
