import Navbar from "../components/Navbar";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Contact() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col items-center justify-center min-h-screen p-4">
        <h1 className="text-3xl font-bold">Contato</h1>
        <p className="text-lg text-gray-600 mt-4">Me encontre nas redes sociais!</p>
        <div className="flex gap-6 mt-6">
          <a href="https://github.com/seu-usuario" target="_blank">
            <FaGithub className="text-4xl hover:text-gray-500 transition" />
          </a>
          <a href="https://linkedin.com/in/seu-usuario" target="_blank">
            <FaLinkedin className="text-4xl hover:text-blue-500 transition" />
          </a>
          <a href="https://instagram.com/seu-usuario" target="_blank">
            <FaInstagram className="text-4xl hover:text-pink-500 transition" />
          </a>
        </div>
      </main>
    </>
  );
}