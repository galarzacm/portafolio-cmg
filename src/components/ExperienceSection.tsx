import { motion } from "motion/react";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Building2, Calendar, MapPin, Award } from "lucide-react";

export function ExperienceSection() {
  const experiences = [
    {
      title: "Teaching Assistant – Full Stack Web",
      company: "Henry Bootcamp",
      location: "Remoto",
      period: "2024 – 2025",
      type: "Part-time",
      description:
        "Acompañamiento técnico y académico a estudiantes en su formación Full Stack, con foco en backend y buenas prácticas.",
      achievements: [
        "Resolución de dudas técnicas en Node.js, Express y bases de datos.",
        "Revisión de código y asistencia en debugging.",
        "Conducción de sesiones grupales fomentando buenas prácticas y arquitectura limpia.",
      ],
      technologies: ["Node.js", "Express", "PostgreSQL", "Git", "API Design"],
      color: "from-blue-600 to-cyan-500",
    },
    {
      title: "Full Stack Developer – Proyecto Integrador",
      company: "Henry Bootcamp",
      location: "Remoto",
      period: "2024",
      type: "Proyecto",
      description:
        "Desarrollo de una aplicación full stack con foco en backend, integraciones y diseño de base de datos.",
      achievements: [
        "Diseño y normalización de base de datos PostgreSQL.",
        "Desarrollo de API REST con controladores y servicios modulares.",
        "Integración frontend–backend y despliegue en la nube.",
      ],
      technologies: [
        "Node.js",
        "Express",
        "PostgreSQL",
        "React",
        "Cloud Deployment",
      ],
      color: "from-indigo-600 to-purple-500",
    },
  ];

  const education = [
   {
      degree: "Desarrollador Full Stack Web",
      institution: "Henry Bootcamp",
      period: "2024 - 2025",
      type: "Bootcamp Intensivo",
      description:
        "Programa de 800 horas teórico-prácticas enfocado en el desarrollo web moderno y tecnologías Full Stack.",
      achievements: [
        "Desarrollo de APIs REST con Node.js, Express y NestJS.",
        "Manejo de bases de datos PostgreSQL con TypeORM.",
        "Autenticación con JWT y buenas prácticas en arquitectura backend.",
        "Participación como Teaching Assistant.",
      ],
      color: "from-yellow-500 to-orange-500",
    },

    {
      degree: "Licenciado en Tecnología de la Información (CCC)",
      institution: "Universidad de Palermo",
      period: "2021 - 2022",
      type: "Grado Universitario",
      description:
        "formación en administración de datos, usabilidad, modelado de sistemas, comunicaciones y planeamiento estratégico. Enfoque en análisis, toma de decisiones y desarrollo de soluciones tecnológicas escalables.",
      achievements: [
        "Formación integral en análisis, modelado y administración de datos aplicada a soluciones reales.",
        "Base sólida en arquitectura de sistemas, programación y diseño orientado a la escalabilidad.",
        "Desarrollo de proyectos académicos con enfoque en optimización de procesos y toma de decisiones tecnológicas.",
      ],
      color: "from-orange-500 to-red-500",
    },

    {
      degree: "Técnico Superior en Programación y Análisis de Sistemas",
      institution: "Instituto Tecnológico N.º 3 - Misiones",
      period: "2009 - 2012",
      type: "Carrera Terciaria",
      description:
        "Formación orientada al análisis, diseño y desarrollo de sistemas informáticos. Enfoque en programación, bases de datos, documentación técnica y metodologías aplicadas al ciclo de vida del software.",
      achievements: [
        "Dominio de lógica de programación, estructuras de datos y resolución de problemas.",
        "Experiencia práctica en desarrollo de sistemas con bases de datos relacionales.",
        "Aplicación de metodologías para análisis, diseño y documentación de soluciones informáticas.",
      ],
      color: "from-blue-500 to-indigo-500",
    },

    {
      degree: "Ciclo Básico – Mecánico de Mantenimiento de Aeronaves",
      institution: "EPIPA 'Benjamín Matienzo' – Posadas",
      period: "2016 - 2017",
      type: "Formación Técnica",
      description:
        "Programa introductorio a los principios del mantenimiento aeronáutico, con enfoque en fundamentos mecánicos, eléctricos y operativos aplicados a aeronaves.",
      achievements: [
        "Conocimientos en aerodinámica, física aplicada y sistemas aeronáuticos.",
        "Formación técnica en electricidad, electrónica y comunicaciones aeronáuticas.",
        "Capacitación en normativas, seguridad, prevención de accidentes y documentación técnica.",
      ],
      color: "from-zinc-700 to-blue-500",
    },

 
  ];

  return (
    <section id="experience" className="py-16 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2
            className="text-2xl md:text-3xl font-bold mb-3"
            style={{ color: "var(--foreground)" }}
          >
            Experiencia & Educación
          </h2>
          <div className="w-12 h-0.5 bg-gradient-to-r from-purple-400 to-cyan-400 mx-auto rounded-full" />
        </motion.div>

        {/* Experience Section */}
        <div className="mb-12">
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-lg font-bold mb-6 flex items-center"
            style={{ color: "var(--foreground)" }}
          >
            <Building2 className="w-5 h-5 mr-2 text-purple-400" />
            Experiencia Profesional
          </motion.h3>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-400 via-cyan-400 to-blue-400 rounded-full" />

            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="relative pl-16"
                >
                  <motion.div
                    className={`absolute left-4 top-4 w-3 h-3 rounded-full bg-gradient-to-r ${exp.color} border-3 shadow-lg`}
                    style={{ borderColor: "var(--background)" }}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                  />

                  <Card
                    className="backdrop-blur-md p-5 hover:shadow-lg transition-all duration-300"
                    style={{
                      background: "var(--card)",
                      border: "1px solid var(--border)",
                    }}
                  >
                    <div className="flex flex-wrap items-start justify-between mb-3">
                      <div>
                        <h4
                          className="text-lg font-bold mb-1"
                          style={{ color: "var(--card-foreground)" }}
                        >
                          {exp.title}
                        </h4>
                        <p
                          className="text-base mb-2"
                          style={{ color: "var(--muted-foreground)" }}
                        >
                          {exp.company}
                        </p>
                        <div className="flex flex-wrap items-center gap-3 text-xs">
                          <span
                            className="flex items-center"
                            style={{ color: "var(--muted-foreground)" }}
                          >
                            <Calendar className="w-3 h-3 mr-1" />
                            {exp.period}
                          </span>
                          <span
                            className="flex items-center"
                            style={{ color: "var(--muted-foreground)" }}
                          >
                            <MapPin className="w-3 h-3 mr-1" />
                            {exp.location}
                          </span>
                          <Badge
                            className={`bg-gradient-to-r ${exp.color} text-white border-none text-xs px-2 py-0.5`}
                          >
                            {exp.type}
                          </Badge>
                        </div>
                      </div>
                    </div>

                    <p
                      className="text-sm mb-3"
                      style={{ color: "var(--muted-foreground)" }}
                    >
                      {exp.description}
                    </p>

                    <div className="mb-3">
                      <h5
                        className="text-xs font-semibold mb-2 flex items-center"
                        style={{ color: "var(--card-foreground)" }}
                      >
                        <Award className="w-3 h-3 mr-1 text-yellow-400" />
                        Logros principales:
                      </h5>
                      <ul className="space-y-1">
                        {exp.achievements.map((achievement, i) => (
                          <li
                            key={i}
                            className="text-xs pl-3 border-l-2"
                            style={{
                              color: "var(--muted-foreground)",
                              borderColor: "var(--border)",
                            }}
                          >
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-wrap gap-1.5">
                      {exp.technologies.map((tech, i) => (
                        <Badge
                          key={i}
                          variant="secondary"
                          className="text-xs px-2 py-0.5"
                          style={{
                            background: "var(--accent)",
                            color: "var(--accent-foreground)",
                          }}
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Education Section */}
        <div>
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-lg font-bold mb-6 flex items-center"
            style={{ color: "var(--foreground)" }}
          >
            <Award className="w-5 h-5 mr-2 text-cyan-400" />
            Educación & Certificaciones
          </motion.h3>

          <div className="grid md:grid-cols-2 gap-6">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ scale: 1.01 }}
              >
                <Card
                  className="backdrop-blur-md p-5 h-full transition-all duration-300"
                  style={{
                    background: "var(--card)",
                    border: "1px solid var(--border)",
                  }}
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <h4
                        className="text-base font-bold mb-1"
                        style={{ color: "var(--card-foreground)" }}
                      >
                        {edu.degree}
                      </h4>
                      <p
                        className="text-sm mb-2"
                        style={{ color: "var(--muted-foreground)" }}
                      >
                        {edu.institution}
                      </p>
                      <div className="flex items-center gap-3 text-xs mb-3">
                        <span
                          className="flex items-center"
                          style={{ color: "var(--muted-foreground)" }}
                        >
                          <Calendar className="w-3 h-3 mr-1" />
                          {edu.period}
                        </span>
                        <Badge
                          className={`bg-gradient-to-r ${edu.color} text-white border-none text-xs px-2 py-0.5`}
                        >
                          {edu.type}
                        </Badge>
                      </div>
                    </div>
                  </div>

                  <p
                    className="text-xs mb-3"
                    style={{ color: "var(--muted-foreground)" }}
                  >
                    {edu.description}
                  </p>

                  <div>
                    <h5
                      className="text-xs font-semibold mb-2"
                      style={{ color: "var(--card-foreground)" }}
                    >
                      Destacados:
                    </h5>
                    <ul className="space-y-1">
                      {edu.achievements.map((achievement, i) => (
                        <li
                          key={i}
                          className="text-xs pl-3 border-l-2"
                          style={{
                            color: "var(--muted-foreground)",
                            borderColor: "var(--border)",
                          }}
                        >
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
