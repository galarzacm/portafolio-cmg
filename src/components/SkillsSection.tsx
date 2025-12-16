import { motion } from "motion/react";

export function SkillsSection() {
  return (
    <section id="skills" className="py-16 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Encabezado */}
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
            Stack Tecnológico
          </h2>
          <div
            className="w-12 h-0.5 mx-auto rounded-full"
            style={{ background: "var(--gradient-accent)" }}
          />
          <p
            className="mt-3 max-w-2xl mx-auto text-sm"
            style={{ color: "var(--muted-foreground)" }}
          >
            Tecnologías y herramientas que utilizo para desarrollar soluciones
            web.
          </p>
        </motion.div>

        {/* Carrusel animado */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative mx-auto mb-12"
          style={{ width: "1200px", height: "200px", maxWidth: "100%" }}
        >
          <div
            className="absolute inset-0 overflow-hidden rounded-2xl"
            style={{
              background: "var(--card)",
              border: "1px solid var(--border)",
              backdropFilter: "blur(10px)",
            }}
          >
            {/* Gradientes laterales */}
            <div
              className="absolute left-0 top-0 bottom-0 z-10 w-20"
              style={{
                background:
                  "linear-gradient(to right, var(--card), transparent)",
              }}
            />
            <div
              className="absolute right-0 top-0 bottom-0 z-10 w-20"
              style={{
                background:
                  "linear-gradient(to left, var(--card), transparent)",
              }}
            />

            {/* Scroll infinito de tecnologías */}
            <motion.div
              className="flex items-center h-full"
              animate={{ x: [-1400, 0] }}
              transition={{
                duration: 28,
                repeat: Infinity,
                ease: "linear",
                repeatType: "loop",
              }}
              style={{ width: "calc(200% + 1400px)" }}
            >
              {[
                // Backend / APIs
                { name: "JWT Auth", icon: "🔐", color: "#000000" },
                { name: "REST APIs", icon: "🔌", color: "#1E90FF" },
                { name: "Postman", icon: "📬", color: "#EF5B25" },

                // Bases de datos
                { name: "PostgreSQL", icon: "🐘", color: "#336791" },
                { name: "MySQL", icon: "🐬", color: "#00758F" },
                { name: "MongoDB", icon: "🍃", color: "#47A248" },
                { name: "Prisma ORM", icon: "🔷", color: "#0C344B" },
                { name: "TypeORM", icon: "🏛️", color: "#D7263D" },

                // DevOps / Deploy
                { name: "Docker", icon: "🐳", color: "#2496ED" },
                { name: "Git", icon: "🔧", color: "#F05032" },
                { name: "GitHub", icon: "🐙", color: "#000000" },
                { name: "Vercel", icon: "▲", color: "#000000" },
                { name: "Render", icon: "🟣", color: "#5F2EEA" },

                // Testing
                { name: "Jest", icon: "🃏", color: "#99425B" },

                // Automatización / Low-code
                { name: "Power Automate", icon: "🔄", color: "#185ABD" },
                { name: "Power Apps", icon: "📱", color: "#742774" },
                { name: "Power BI", icon: "📊", color: "#F2C811" },
                { name: "Excel", icon: "📗", color: "#217346" },

                // Herramientas adicionales útiles
                { name: "Postman", icon: "📮", color: "#EF5B25" },
                { name: "Figma", icon: "🎨", color: "#F24E1E" },

                // Lenguajes
                { name: "JavaScript", icon: "🟨", color: "#F7DF1E" },
                { name: "TypeScript", icon: "📘", color: "#3178C6" },
                { name: "SQL", icon: "🧮", color: "#00758F" },
              ]
                // Duplicado para animación infinita
                .concat([
                  { name: "React", icon: "⚛️", color: "#61DAFB" },
                  { name: "Next.js", icon: "N", color: "#000000" },
                  { name: "Node.js", icon: "🟢", color: "#3C873A" },
                ])
                .map((tech, index) => (
                  <motion.div
                    key={`${tech.name}-${index}`}
                    className="flex-shrink-0 mx-4 p-4 rounded-xl transition-all duration-300 hover:scale-110 cursor-pointer group"
                    style={{
                      background: "var(--accent)",
                      border: "1px solid var(--border)",
                      minWidth: "140px",
                      height: "120px",
                    }}
                    whileHover={{
                      y: -5,
                      transition: { duration: 0.2 },
                    }}
                  >
                    <div className="flex flex-col items-center justify-center h-full text-center space-y-3">
                      <div
                        className="w-12 h-12 flex items-center justify-center rounded-lg group-hover:scale-125 transition-transform duration-300"
                        style={{
                          background: `${tech.color}15`,
                          border: `1px solid ${tech.color}30`,
                        }}
                      >
                        <span
                          className="font-bold text-sm"
                          style={{
                            color: tech.color,
                            fontFamily:
                              tech.name === "React" ? "system-ui" : "monospace",
                          }}
                        >
                          {tech.icon}
                        </span>
                      </div>
                      <p
                        className="font-semibold text-sm group-hover:text-opacity-100 transition-all duration-300"
                        style={{ color: "var(--card-foreground)" }}
                      >
                        {tech.name}
                      </p>
                    </div>
                  </motion.div>
                ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
