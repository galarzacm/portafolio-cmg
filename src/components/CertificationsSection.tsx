"use client";
import { motion } from "motion/react";

const certifications = [

  { title: "Desarrollo Web Full Stack", image: "/SoyHenry.jpg" },
  { title: "Introducción a la programación con Python", image: "/Introducción a la programación con Python.jpg" },
  { title: "Excel Skills for Business: Essentials", image: "/Excel1.jpg" },
  { title: "Excel Skills for Business: Intermediate I", image: "/Excel2.jpg" },
  { title: "Auxiliar_en_Programacion", image: "/Auxiliar_en_Programacion.jpg" },
  { title: "Administracion Financiera", image: "/Admin_Financiera.jpg" },
 
];

export function CertificationsSection() {
  // Duplicamos para crear efecto infinito
  const duplicatedCertifications = [...certifications, ...certifications,];

  return (
    <section id="certifications" className="py-20 px-6 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Encabezado */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2
            className="text-2xl md:text-3xl font-bold mb-3"
            style={{ color: "var(--foreground)" }}
          >
            Certificaciones
          </h2>
          <div
            className="w-12 h-0.5 mx-auto rounded-full"
            style={{ background: "var(--gradient-accent)" }}
          />
        </motion.div>

        {/* Carrusel */}
        <div
          className="relative mx-auto mb-12"
          style={{ width: "1200px", height: "280px", maxWidth: "100%" }}
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
              className="absolute left-0 top-0 bottom-0 z-10 w-24"
              style={{
                background: "linear-gradient(to right, var(--card), transparent)",
              }}
            />
            <div
              className="absolute right-0 top-0 bottom-0 z-10 w-24"
              style={{
                background: "linear-gradient(to left, var(--card), transparent)",
              }}
            />

            {/* Movimiento infinito sin huecos */}
            <motion.div
              className="flex items-center h-full"
              animate={{ x: [0, -1450] }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              {duplicatedCertifications.map((cert, index) => (
                <motion.div
                  key={`${cert.title}-${index}`}
                  className="flex-shrink-0 mx-2 rounded-xl overflow-hidden border border-[var(--border)] shadow-sm hover:shadow-md transition-transform duration-300 hover:scale-105"
                  style={{
                    width: "340px",
                    height: "240px",
                    background: "var(--accent)",
                  }}
                >
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
