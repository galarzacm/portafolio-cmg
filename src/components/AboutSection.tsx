import { motion } from 'motion/react';
// import { Card } from './ui/card';
// import { Badge } from './ui/badge';


export function AboutSection() {

  const skills = [
    "React & Next.js",
    "TypeScript",
    "Node.js", 
    "Python & Django",
    "PostgreSQL",
    "Power Platform",
    "Docker",
    "Git"
  ];

  return (
    <section id="about" className="py-16 px-6" style={{ background: 'var(--background)' }}>
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-3" style={{ color: 'var(--foreground)' }}>
            Sobre mí
          </h2>
          <div className="w-12 h-0.5 mx-auto rounded-full" style={{ background: '#667eea' }} />
        </motion.div>

        {/* Main Content Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >

        </motion.div>


      </div>
    </section>
  );
}