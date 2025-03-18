import Navbar from "@/app/components/Navbar";

export default function Projects() {
  return (
    <>
      <Navbar />
      <main className="p-6 md:p-10 bg-gray-50">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-blue-600 mb-6">
          Projetos
        </h1>
        <p className="mt-4 text-lg text-gray-700 max-w-3xl mx-auto">
          Meu principal projeto até hoje foi o desenvolvimento de um site completo para
          uma imobiliária chamada Prime Residences.
        </p>
        <p className="mt-4 text-lg text-gray-700">
          Segue link para visualização:{" "}
          <a
            href="https://www.primeresidences.com.br"
            className="text-blue-500 hover:text-blue-700 underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            www.primeresidences.com.br
          </a>
        </p>
      </main>
    </>
  );
}
