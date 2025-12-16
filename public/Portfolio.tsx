"use client";

import { useState } from "react";

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("Todos");
  const [showAll, setShowAll] = useState(false);

  const categories = ["Todos", "E-commerce", "Corporativo", "Educación"];

  const projects = [
    {
      title: "Megaderma",
      category: "E-commerce",
      description:
        "Tienda online especializada en tecnología médica. Diseño limpio con foco en catálogo de productos y experiencia de compra optimizada.",
      image: "/Mockups/Megaderma.png",
      tech: ["Next.js", "Stripe", "MongoDB", "Tailwind"],
      link: "https://megaderma.uy",
    },
    {
      title: "Megalabs",
      category: "Corporativo",
      description:
        "Sitio corporativo para una de las mayores farmacéuticas de Latinoamérica. Navegación clara, diseño institucional y enfoque internacional.",
      image: "/Mockups/Megalabs.png",
      tech: ["React", "WordPress", "PHP", "MySQL"],
      link: "https://www.megalabs.com.uy/",
    },
    {
      title: "Epsu",
      category: "Educación",
      description:
        "Plataforma educativa centrada en Psicología Social. Enfatiza la información formativa y el acceso rápido a inscripciones y aula virtual.",
      image: "/Mockups/Epsu.png",
      tech: ["HTML5", "CSS3", "JavaScript", "PHP"],
      link: "https://epsu.com.uy/",
    },
    {
      title: "Proincen",
      category: "Corporativo",
      description:
        "Empresa de ingeniería industrial con enfoque en automatización. Estética técnica y profesional que comunica innovación y confianza.",
      image: "/Mockups/Proincen.png",
      tech: ["Vue.js", "Node.js", "Express", "MongoDB"],
      link: "https://proincen.com.uy/",
    },
    {
      title: "Neosport",
      category: "E-commerce",
      description:
        "Distribuidor de marcas deportivas y nutrición. Diseño dinámico, moderno y adaptado para e-commerce y promoción de productos.",
      image: "/Mockups/Neosport.png",
      tech: ["Angular", "Firebase", "Stripe", "Material UI"],
      link: "https://www.neosport.com.uy/",
    },
    {
      title: "Rioestiba",
      category: "Corporativo",
      description:
        "Empresa de logística y estiba portuaria. Imagen sobria, estructurada y orientada al sector industrial y de comercio exterior.",
      image: "/Mockups/Rioestiba.png",
      tech: ["React", "Laravel", "MySQL", "Google Maps"],
      link: "https://rioestiba.com.uy/",
    },
    {
      title: "Inma",
      category: "Corporativo",
      description:
        "Empresa que gestiona proyectos inmobiliarios con enfoque en innovación y eficiencia. Ofrece soluciones integrales desde la viabilidad hasta la ejecución y cierre de obra.",
      image: "/Mockups/Inma.png",
      tech: ["React", "Laravel", "MySQL", "Google Maps"],
      link: "https://inma.uy/en/homepage/",
    },
    {
      title: "Master Key",
      category: "E-commerce",
      description:
        "Proveedor de sistemas de control de accesos y cerraduras electrónicas. Interfaz moderna, centrada en soluciones tecnológicas para seguridad.",
      image: "/Mockups/MasterKey.png",
      tech: ["React", "Laravel", "MySQL", "Google Maps"],
      link: "https://mkey.com.uy/",
    },
    {
      title: "Idejo",
      category: "Educación",
      description:
        "Institución educativa enfocada en formación integral. Navegación intuitiva y diseño enfocado en el acceso a cursos y comunidad.",
      image: "/Mockups/Idejo.png",
      tech: ["React", "Laravel", "MySQL", "Google Maps"],
      link: "https://idejo.edu.uy/",
    },
    {
      title: "Bootia",
      category: "Corporativo",
      description:
        "Agencia de desarrollo web y tecnología. Portafolio con enfoque minimalista que destaca servicios, proyectos y stack tecnológico.",
      image: "/Mockups/Bootia.png",
      tech: ["React", "Laravel", "MySQL", "Google Maps"],
      link: "https://www.bootia.dev/",
    },
    {
      title: "Phoorma",
      category: "E-commerce",
      description:
        "Portal inmobiliario con búsqueda avanzada, tours virtuales y gestión de propiedades.",
      image: "/Mockups/Phoorma.png",
      tech: ["React", "Laravel", "MySQL", "Google Maps"],
      link: "https://phoorma.com/",
    },
  ];

  const filteredProjects =
    activeCategory === "Todos"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  const visibleProjects = showAll
    ? filteredProjects
    : filteredProjects.slice(0, 6);

  return (
    <section className="py-20 bg-slate-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-cyan-500/20 text-cyan-400 rounded-full text-sm font-semibold mb-4">
            PORTAFOLIO
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Proyectos destacados
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explora algunos de los proyectos exitosos que hemos desarrollado
            para nuestros clientes
          </p>
        </div>

        {/* Filtros */}
        <div className="flex justify-center mb-12">
          <div className="flex flex-wrap gap-2 p-1 bg-slate-700 rounded-lg">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => {
                  setActiveCategory(category);
                  setShowAll(false);
                }}
                className={`px-6 py-2 rounded-md font-medium transition-all duration-300 whitespace-nowrap cursor-pointer ${
                  activeCategory === category
                    ? "bg-cyan-500 text-white shadow-sm"
                    : "text-gray-300 hover:text-cyan-400"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Grid de Proyectos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {visibleProjects.map((project, index) => (
            <div
              key={index}
              className="group bg-slate-700/50 rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-600 hover:bg-slate-700"
            >
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block relative overflow-hidden"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-cyan-500 opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-white text-center space-y-2">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto">
                      <i className="ri-external-link-line text-xl"></i>
                    </div>
                    <p className="font-semibold">Ver Proyecto</p>
                  </div>
                </div>
              </a>

              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="inline-block px-3 py-1 bg-cyan-500/20 text-cyan-400 text-xs font-semibold rounded-full">
                    {project.category}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                  {project.title}
                </h3>

                <p className="text-gray-300 mb-4 leading-relaxed text-sm">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Botón Ver Todos */}
        {filteredProjects.length > 6 && (
          <div className="text-center mt-12">
            <button
              onClick={() => setShowAll(!showAll)}
              className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl whitespace-nowrap cursor-pointer"
            >
              {showAll ? "Ver Menos" : "Ver Todos los Proyectos"}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
