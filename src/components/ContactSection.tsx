"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { Card } from "./ui/card";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { toast } from "sonner";
import emailjs from "emailjs-com";
import {
  Mail,
  MessageSquare,
  Send,
  Github,
  Linkedin,
  Twitter,
  Calendar,
  MapPin,
  Phone,
  QrCode,
} from "lucide-react";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const result = await emailjs.send(
        "service_xksrxnw", // 👉 reemplaza con tu Service ID
        "template_nm9t94h", // 👉 reemplaza con tu Template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          company: formData.company,
          message: formData.message,
        },
        "cE-5TZP2G9noC1dGH" // 👉 reemplaza con tu Public Key
      );

      if (result.status === 200) {
        toast.success("¡Mensaje enviado! Te responderé pronto 🚀");
        setFormData({ name: "", email: "", company: "", message: "" });
      }
    } catch (error) {
      console.error(error);
      toast.error("Hubo un error al enviar el mensaje 😥");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const socialLinks = [
    {
      icon: Github,
      name: "GitHub",
      href: "https://github.com/galarzacm",
      color: "hover:text-purple-400",
      username: "@galarzacm",
    },
    {
      icon: Linkedin,
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/cristian-miguel-galarza",
      color: "hover:text-cyan-400",
      username: "/cristian-miguel-galarza",
    },
    {
      icon: Mail,
      name: "Email",
      href: "mailto:liccristian147@gmail.com",
      color: "hover:text-blue-400",
      username: "liccristian147@gmail.com",
    },
  ];

  return (
    <section id="contact" className="py-16 px-6">
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
            ¡Conectemos!
          </h2>
          <div className="w-12 h-0.5 bg-gradient-to-r from-purple-400 to-cyan-400 mx-auto rounded-full" />
          <p className="text-lg mt-3 max-w-2xl mx-auto">
            Si estás buscando un desarrollador backend comprometido, orientado a
            resultados y con foco en calidad, me encantaría conversar. Puedo
            aportar valor en APIs escalables, integraciones, arquitectura limpia
            y buenas prácticas.
          </p>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <Card
            className="backdrop-blur-md p-6"
            style={{
              background: "var(--card)",
              border: "1px solid var(--border)",
            }}
          >
            <div className="flex items mb-6">
              <MessageSquare className="w-6 h-6 text-purple-400 mr-3" />
              <div>
                <h3
                  className="text-xl font-bold"
                  style={{ color: "var(--card-foreground)" }}
                >
                  ¿Querés evaluar si hago match con tu equipo o proyecto?
                </h3>
                <p
                  className="text-sm"
                  style={{ color: "var(--muted-foreground)" }}
                >
                  Completá el formulario y contame brevemente:
                  <br />
                  • Qué desafío están resolviendo <br />
                  • Qué stack utilizan <br />
                  • En qué etapa está el producto <br />
                  <br />
                  Estoy abierto a propuestas part-time remotas, proyectos a
                  mediano plazo o colaboración continua.
                </p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label
                    className="block text-sm font-medium mb-2"
                    style={{ color: "var(--card-foreground)" }}
                  >
                    Nombre completo *
                  </label>
                  <Input
                    name="name"
                    placeholder="Ej: María García"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="text-sm h-11"
                  />
                </div>
                <div>
                  <label
                    className="block text-sm font-medium mb-2"
                    style={{ color: "var(--card-foreground)" }}
                  >
                    Email de contacto *
                  </label>
                  <Input
                    name="email"
                    type="email"
                    placeholder="maria@empresa.com"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="text-sm h-11"
                  />
                </div>
              </div>

              <div>
                <label
                  className="block text-sm font-medium mb-2"
                  style={{ color: "var(--card-foreground)" }}
                >
                  Empresa y rol / proyecto
                </label>
                <Input
                  name="company"
                  placeholder="Nombre de la empresa y posición de interés"
                  value={formData.company}
                  onChange={handleInputChange}
                  className="text-sm h-11"
                />
              </div>

              <div>
                <label
                  className="block text-sm font-medium mb-2"
                  style={{ color: "var(--card-foreground)" }}
                >
                  Mensaje *
                </label>
                <Textarea
                  name="message"
                  placeholder="Contame sobre el contexto, alcance, expectativas y tech stack."
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="resize-none text-sm"
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white py-3 text-sm transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                  />
                ) : (
                  <>
                    <Send className="w-5 h-5 mr-2" />
                    Enviar mensaje
                  </>
                )}
              </Button>
            </form>
          </Card>
        </motion.div>

        {/* Social Links & QR */}
        <div className="grid md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Card
              className="backdrop-blur-md p-6 h-full"
              style={{
                background: "var(--card)",
                border: "1px solid var(--border)",
              }}
            >
              <h3
                className="text-lg font-bold mb-4"
                style={{ color: "var(--card-foreground)" }}
              >
                Redes sociales
              </h3>
              <div className="space-y-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center justify-between p-3 rounded-lg transition-all duration-300 group w-full`}
                    style={{ background: "var(--accent)" }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="flex items-center">
                      <social.icon className="w-5 h-5 mr-3" />
                      <div>
                        <p
                          className="font-medium text-sm"
                          style={{ color: "var(--card-foreground)" }}
                        >
                          {social.name}
                        </p>
                        <p
                          className="text-xs"
                          style={{ color: "var(--muted-foreground)" }}
                        >
                          {social.username}
                        </p>
                      </div>
                    </div>
                    <Badge
                      variant="secondary"
                      className="text-xs px-3 py-1"
                      style={{
                        background: "var(--muted)",
                        color: "var(--muted-foreground)",
                      }}
                    >
                      Conectar
                    </Badge>
                  </motion.a>
                ))}
              </div>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Card
              className="backdrop-blur-md p-6 h-full"
              style={{
                background: "var(--card)",
                border: "1px solid var(--border)",
              }}
            >
              <div className="text-center h-full flex flex-col justify-center">
                <div className="flex items-center justify-center mb-4">
                  <QrCode className="w-5 h-5 text-purple-400 mr-2" />
                  <h3
                    className="text-lg font-bold"
                    style={{ color: "var(--card-foreground)" }}
                  >
                    Acceso rápido
                  </h3>
                </div>

                <motion.div
                  className="w-28 h-28 mx-auto bg-gradient-to-br from-purple-400 to-cyan-400 rounded-xl flex items-center justify-center shadow-lg mb-4"
                  whileHover={{ scale: 1.05, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <QrCode className="w-14 h-14 text-white" />
                </motion.div>

                <p
                  className="text-sm font-medium mb-2"
                  style={{ color: "var(--card-foreground)" }}
                >
                  Mi perfil completo
                </p>
                <p
                  className="text-xs mb-4"
                  style={{ color: "var(--muted-foreground)" }}
                >
                  LinkedIn • Portfolio • CV
                </p>
                <Badge className="bg-gradient-to-r from-purple-400 to-cyan-400 text-white border-none text-xs px-4 py-2 mx-auto">
                  📱 Escanea con tu móvil
                </Badge>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
