import React from 'react';
import Header from "./components/Header";
import Sobre from "./components/Sobre";
import Projetos from "./components/Projetos";
import Contato from "./components/Contato";
import Footer from "./components/Footer";
import "./App.css";

const Portfolio = () => {
  const projects = [
    {
      title: "Gerador de Leads com CRM",
      description: "Desenvolvimento de uma aplicação web para geração e gerenciamento de leads, com integração completa de CRM para otimizar o processo de captação de clientes.",
      image: "/api/placeholder/800/400"
    },
    {
      title: "Plataforma de Gestão de Projetos", 
      description: "Sistema web para acompanhamento de projetos, com recursos de colaboração, controle de tarefas e relatórios gerenciais.",
      image: "/api/placeholder/800/400"
    }
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 bg-gray-50">
      {/* Header */}
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">Meu Portfólio</h1>
        <p className="text-xl text-gray-600">Desenvolvedor Web | Projetos e Experiências</p>
      </header>

      {/* About Section */}
      <section className="mb-12 bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Sobre Mim</h2>
        <p className="text-gray-600 leading-relaxed">
          Olá! Sou um desenvolvedor apaixonado por tecnologia, com criatividade para resolver problemas complexos e desenvolver soluções inovadoras.
        </p>
      </section>

      {/* Projects Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Projetos</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl"
            >
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-48 object-cover"
              />
              <div className="p-5">
                <h3 className="text-xl font-bold text-gray-800 mb-3">{project.title}</h3>
                <p className="text-gray-600">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Contato</h2>
        <div className="flex items-center space-x-4">
          <a 
            href="mailto:plantapublicadev@gmail.com" 
            className="flex items-center text-blue-600 hover:text-blue-800 transition-colors"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              className="mr-2"
            >
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
              <polyline points="22,6 12,13 2,6"></polyline>
            </svg>
            plantapublicadev@gmail.com
          </a>
          <div className="flex space-x-4">
            <a 
              href="https://github.com/seu-usuario" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-black transition-colors"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="currentColor" 
                className="w-6 h-6"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            <a 
              href="https://linkedin.com/in/seu-usuario" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-700 hover:text-blue-900 transition-colors"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="currentColor" 
                className="w-6 h-6"
              >
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.784 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center mt-8 text-gray-500">
        <p>&copy; 2025 Meu Portfólio. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
};

export default Portfolio;

