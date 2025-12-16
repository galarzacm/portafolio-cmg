import { motion } from 'motion/react';
import { Button } from './ui/button';
import profilePhoto from '@/assets/profilePhoto.jpg';

export function HeroSection() {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const techIcons = [
    { name: 'Next.js', emoji: '▲', position: { left: '15%', top: '75%' } },
    { name: 'React', emoji: '⚛️', position: { left: '10%', top: '85%' } },
    { name: 'TypeScript', emoji: '📘', position: { left: '25%', top: '80%' } },
    { name: 'Figma', emoji: '🎨', position: { left: '30%', top: '90%' } },
    { name: 'VS Code', emoji: '💻', position: { left: '40%', top: '85%' } },
    { name: 'Node.js', emoji: '🟢', position: { left: '60%', top: '85%' } },
    { name: 'Database', emoji: '🗄️', position: { left: '70%', top: '90%' } },
    { name: 'Git', emoji: '📁', position: { left: '75%', top: '80%' } },
    { name: 'Deploy', emoji: '🚀', position: { left: '85%', top: '85%' } },
    { name: 'Mobile', emoji: '📱', position: { left: '90%', top: '75%' } },
  ];

  return (
    <section 
      id="home"
      className="h-screen relative overflow-hidden flex flex-col justify-center px-6"
      style={{
        background: 'var(--background)'
      }}
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Subtle gradient overlay */}
        <div 
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(circle at 30% 40%, rgba(59, 130, 246, 0.1) 0%, transparent 50%), radial-gradient(circle at 70% 80%, rgba(139, 92, 246, 0.08) 0%, transparent 50%)'
          }}
        />
        
        {/* Animated particles */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full opacity-20"
            style={{ backgroundColor: '#667eea' }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.2, 0.6, 0.2],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: Math.random() * 4 + 3,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* Main Content - Centered */}
      <div className="relative z-10 text-center max-w-4xl mx-auto pt-12">
        {/* Profile Photo */}
        <motion.div
          className="mb-6"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          <div className="w-24 h-30 md:w-28 md:h-30 mx-auto">
            <img 
              src={profilePhoto} 
              alt="Cristian Galarza - Full Stack Developer"
              className="w-full h-full rounded-full object-cover border-3 border-white/30 shadow-xl"
            />
          </div>
        </motion.div>

        {/* Greeting */}
        <motion.div
          className="mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <h1 className="text-base md:text-lg font-medium" style={{ color: '#1038e9' }}>
            ¡Hola! Soy Cristian Galarza
          </h1>
        </motion.div>

        {/* Main Title */}
        <motion.div
          className="mb-5"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight max-w-3xl mx-auto" style={{ color: 'var(--foreground)' }}>
            Desarrollador{' '}
            <motion.span
              style={{ color: '#667eea' }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              Web
            </motion.span>
          </h1>
        </motion.div>

        {/* Description */}
        <motion.div
          className="mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          <p className="text-sm md:text-base max-w-2xl mx-auto leading-relaxed" style={{ color: 'var(--muted-foreground)' }}
          >Licenciado en Tecnología de la Información y Desarrollador Backend con énfasis en Node.js, NestJS, Express, TypeORM, Prisma, PostgreSQL y MongoDB.

Me apasiona diseñar y construir APIs escalables, seguras y fáciles de mantenar, aplicando buenas prácticas de arquitectura, patrones de diseño y clean code. Disfruto trabajar en equipos ágiles, aprender tecnologías nuevas y colaborar para crear soluciones que realmente aporten valor.

Vengo del área administrativa/financiera, lo cual me da una visión sólida del negocio y de la importancia de la calidad, la eficiencia y el impacto real en los procesos.

Actualmente busco oportunidades remotas part-time donde pueda contribuir en proyectos de back-end con propósito, mientras continúo creciendo como profesional. </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-3 justify-center items-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          <motion.div 
            whileHover={{ scale: 1.03 }} 
            whileTap={{ scale: 0.97 }}
          >
            <Button
              onClick={scrollToProjects}
              className="px-5 py-2.5 rounded-lg font-medium border-0 shadow-lg text-sm text-white"
              style={{ 
                background: 'var(--gradient-primary)'
              }}
            >
              Ver mis proyectos
            </Button>
          </motion.div>
          
          <motion.div 
            whileHover={{ scale: 1.03 }} 
            whileTap={{ scale: 0.97 }}
          >
            <Button
              onClick={() => {
                // Crear enlace temporal para descarga
                const link = document.createElement('a');
                link.href = "/CristianMiguelGalarza-FullStackBackend.pdf"
                link.download = 'Cristian_Galarza_CV.pdf';
                link.click();
              }}
              variant="outline"
              className="px-5 py-2.5 rounded-lg font-medium border-2 backdrop-blur-sm transition-all duration-300 text-sm flex items-center gap-2"
              style={{ 
                borderColor: '#667eea',
                color: '#667eea',
                background: 'transparent'
              }}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Descargar CV
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Section - Avatar and Tech Icons */}
      <div className="absolute bottom-0 left-0 right-0 h-32">
        {/* Avatar Character */}
        <motion.div
          className="absolute left-1/2 transform -translate-x-1/2 bottom-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          <motion.div
            className="relative"
            animate={{ 
              y: [0, -6, 0],
            }}
            transition={{ 
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            {/* Character Avatar */}
            <div className="text-4xl md:text-5xl">
            </div>
          </motion.div>
        </motion.div>

        {/* Tech Icons scattered around */}
        {techIcons.map((tech, index) => (
          <motion.div
            key={index}
            className="absolute text-lg md:text-xl cursor-pointer hover:scale-110 transition-transform"
            style={tech.position}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 0.7, scale: 1 }}
            transition={{ 
              duration: 0.5, 
              delay: 1.4 + index * 0.1,
              type: "spring",
              stiffness: 200
            }}
            whileHover={{ 
              scale: 1.15,
              opacity: 1,
              transition: { duration: 0.2 }
            }}
            animate={{
              y: [0, -4, 0],
              rotate: [0, 4, -4, 0]
            }}
            transition={{
              duration: 3 + index * 0.2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: index * 0.3
            }}
          >
            <div 
              className="backdrop-blur-sm rounded-full p-1.5 border"
              style={{ 
                background: 'var(--glassmorphism)',
                borderColor: 'var(--glassmorphism-border)'
              }}
            >
              {tech.emoji}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}