"use client";

import { motion } from "motion/react";
import { useState } from "react";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import {
  ExternalLink,
  Github,
  Monitor,
  PawPrint,
  Globe,
  Server,
} from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function ProjectsSection() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  // 🧠 Proyectos React / Front-End / Back-End
  const reactProjects = [
    {
      title: "Pet Adoption",
      description:
        "Aplicación web diseñada para conectar refugios con adoptantes, optimizando la gestión de adopciones y el seguimiento de mascotas. Desarrollada con Next.js, React, Node.js, Express y Prisma. Integración de Stripe y autenticación JWT.",
      image: "pet_adoption.png",
      technologies: [
        "React",
        "Next.js",
        "Node.js",
        "Express",
        "Prisma",
        "Tailwind CSS",
        "Stripe API",
      ],
      type: "Full Stack Web App",
      icon: PawPrint,
      gradient: "var(--gradient-accent)",
      demoLink: "https://pf-front-26t8.onrender.com/",
      githubLink: "https://github.com/GrupoHenry3/petAdoption-back",
      backLink: "https://petadoption-back-dev.onrender.com/",
      
    },
    {
      title: "E-commerce Backend",
      description:
        "Aplicación web diseñada para conectar refugios con adoptantes, optimizando la gestión de adopciones y el seguimiento de mascotas. Desarrollada con Next.js, React, Node.js, Express y Prisma. Integración de Stripe y autenticación JWT.",
      image: "ecommerce-Swagger.jpg",
      technologies: [
        "Cloudinary",
        "Swagger",
        "TypeORM",
        "Postgres",
        "Nestjs",
      ],
      type: "e-commerce",
      icon: Monitor,
      gradient: "var(--gradient-accent)",
      demoLink: "#",
      githubLink: "https://github.com/pi-rym/PM4BE-galarzacm",
      backLink: "#",
      
    },
    {
      title: "Technology-Store",
      description:
        "E-commerce moderno diseñado para ofrecer una experiencia fluida, rápida y visualmente atractiva. Incluye catálogo, filtros, carrito y diseño responsive.",
      image: "/ecommerce.png",
      technologies: ["React", "Vite", "TailwindCSS", "Stripe"],
      type: "Web App",
      icon: Monitor,
      gradient: "var(--gradient-primary)",
      demoLink: "https://technology-store-cf5w.vercel.app/",
      githubLink: "#",
      backLink: "#",
    },
    {
      title: "Taskora",
      description:
        "App SaaS tipo Jira/Trello, con tableros Kanban drag & drop, dashboards, modo oscuro/claro y microanimaciones con Framer Motion.",
      image: "/taskora.png",
      technologies: [
        "React",
        "Next.js",
        "TailwindCSS",
        "Recharts",
        "Framer Motion",
      ],
      type: "SaaS Front-End",
      icon: Monitor,
      gradient: "var(--gradient-purple)",
      demoLink: "https://taskora-opal.vercel.app/",
      githubLink: "#",
    },
    {
      title: "Seguimiento Pacientes Veterinaria",
      description:
        "App para gestión de pacientes veterinarios con React Hook Form, Zustand, Toastify y almacenamiento local. Diseño responsive y modular.",
      image: "Citas.png",
      technologies: [
        "React",
        "Vite",
        "TailwindCSS",
        "Zustand",
        "React Hook Form",
        "React Toastify",
      ],
      type: "Front-End App",
      icon: Monitor,
      gradient: "var(--gradient-primary)",
      demoLink: "https://astounding-froyo-766faa.netlify.app/",
      githubLink: "#",
    },
    {
      title: "GuitarLA",
      description:
        "Tienda online de instrumentos musicales en React + TypeScript. Uso de tipos, interfaces, y diseño responsive con TailwindCSS.",
      image: "GuitarLA.png",
      technologies: ["React", "Vite", "TypeScript", "TailwindCSS"],
      type: "Web App",
      icon: Monitor,
      gradient: "var(--gradient-warning)",
      demoLink: "https://guileless-mousse-1acedf.netlify.app/",
      githubLink: "#",
    },
  ];


  const renderProjects = (projectsArray: any[]) => (
    <div className="grid lg:grid-cols-3 gap-6">
      {projectsArray.map((project, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          whileHover={{ y: -6 }}
          className="group"
        >
          <Card
            className="backdrop-blur-md overflow-hidden h-full transition-all duration-500"
            style={{
              background: "var(--card)",
              border: "1px solid var(--border)",
            }}
          >
            <div className="relative overflow-hidden">
              <ImageWithFallback
                src={project.image}
                alt={project.title}
                className="w-full h-40 object-cover transition-transform duration-500 group-hover:scale-110"
              />

              <motion.div
                className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
              >
                <div className="flex space-x-3">
                  <Button
                    size="sm"
                    variant="ghost"
                    className="text-white hover:text-cyan-400 hover:bg-white/20 text-xs px-3 py-1.5"
                    asChild
                  >
                    <a
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="w-3 h-3 mr-1" />
                      Demo
                    </a>
                  </Button>
                  
                  <Button
                    size="sm"
                    variant="ghost"
                    className="text-white hover:text-purple-400 hover:bg-white/20 text-xs px-3 py-1.5"
                    asChild
                  >
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="w-3 h-3 mr-1" />
                      Código
                    </a>
                  </Button>
                  
                </div>
              </motion.div>

              <div className="absolute top-3 right-3">
                <Badge
                  className="text-white border-none text-xs px-2 py-0.5"
                  style={{ background: project.gradient }}
                >
                  <project.icon className="w-2.5 h-2.5 mr-1" />
                  {project.type}
                </Badge>
              </div>
            </div>

            <div className="p-5">
              <h3
                className="text-lg font-bold mb-2 transition-all duration-300"
                style={{ color: "var(--card-foreground)" }}
              >
                {project.title}
              </h3>

              <p
                className={`mb-2 text-sm transition-all duration-300 ${
                  expandedIndex === index ? "" : "line-clamp-3"
                }`}
                style={{ color: "var(--muted-foreground)" }}
              >
                {project.description}
              </p>

              <button
                onClick={() => toggleExpand(index)}
                className="text-xs text-cyan-400 hover:underline mb-4"
              >
                {expandedIndex === index ? "Ver menos" : "Ver más"}
              </button>

              <div className="flex flex-wrap gap-1.5 mb-4">
                {project.technologies.map((tech, techIndex) => (
                  <Badge
                    key={techIndex}
                    variant="secondary"
                    className="bg-white/10 text-gray-300 border-white/20 text-xs px-2 py-0.5"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </Card>
        </motion.div>
      ))}
    </div>
  );

  return (
    <section id="projects" className="py-5 px-6">
      <div className="max-w-6xl mx-auto space-y-20">
        {/* ===== React / Frontend ===== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-3">
            Proyectos
          </h2>
          <div
            className="w-12 h-0.5 mx-auto rounded-full"
            style={{ background: "var(--gradient-accent)" }}
          />
          <p className="mt-3 max-w-2xl mx-auto text-sm text-muted-foreground">
            Aplicaciones modernas, escalables y optimizadas.
          </p>
        </motion.div>

        {renderProjects(reactProjects)}

      </div>
    </section>
  );
}
