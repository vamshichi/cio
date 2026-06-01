'use client'

import { motion } from 'framer-motion'
import { FiTarget, FiUsers, FiZap, FiCheck } from 'react-icons/fi'
import { containerVariants, itemVariants } from '@/lib/animations'

export function About() {
  const features = [
    {
      title: 'Strategic Leadership',
      description: 'Discover strategies for navigating digital transformation and building high-performing technology teams in today\'s competitive landscape.',
      icon: FiTarget,
    },
    {
      title: 'Executive Networking',
      description: 'Connect with peers, industry experts, and thought leaders in an intimate, collaborative setting designed for meaningful relationships.',
      icon: FiUsers,
    },
    {
      title: 'Future Innovation',
      description: 'Explore cutting-edge technologies and emerging trends that are reshaping executive decision-making and business strategy.',
      icon: FiZap,
    },
  ]

  const benefits = [
    'Learn directly from C-suite executives and industry pioneers',
    'Access cutting-edge information on emerging technologies',
    'Build meaningful relationships with fellow technology leaders',
    'Participate in workshops, panels, and roundtable discussions',
  ]

  return (
    <section id="about" className="py-20 px-4 md:py-32 bg-gradient-to-b from-background via-background to-secondary/30 relative overflow-hidden">
      {/* Decorative elements */}
      <motion.div 
        className="absolute top-20 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div 
        className="absolute bottom-0 left-0 w-72 h-72 bg-accent/10 rounded-full blur-3xl"
        animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      <div className="mx-auto max-w-6xl relative z-10">
        <motion.div 
          className="mb-16 text-center md:mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.span 
            className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-xs font-semibold text-primary uppercase tracking-widest mb-4"
            variants={itemVariants}
          >
            About Our Conference
          </motion.span>
          <motion.h2 
            className="mb-4 text-4xl font-bold text-foreground md:text-5xl bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent"
            variants={itemVariants}
          >
            Why Industry Leaders Choose CIO Tech Leadership
          </motion.h2>
          <motion.p 
            className="text-lg text-foreground/60 max-w-3xl mx-auto"
            variants={itemVariants}
          >
            The premier gathering for CIOs and technology executives focused on innovation, transformation, and strategic decision-making.
          </motion.p>
        </motion.div>

        <motion.div 
          className="grid gap-8 md:grid-cols-3 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.map((feature, idx) => {
            const Icon = feature.icon
            return (
              <motion.div 
                key={idx}
                className="group rounded-2xl border border-primary/20 bg-card/40 backdrop-blur p-8 transition"
                variants={itemVariants}
                whileHover={{ 
                  y: -8,
                  border: '1px solid rgba(0, 168, 232, 0.5)',
                  boxShadow: '0 20px 40px rgba(0, 82, 204, 0.1)'
                }}
              >
                <motion.div 
                  className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 group-hover:from-primary/30 group-hover:to-accent/30"
                  whileHover={{ scale: 1.1, rotate: 10 }}
                >
                  <Icon className="w-6 h-6 text-primary" />
                </motion.div>
                <h3 className="mb-3 text-xl font-bold text-foreground">{feature.title}</h3>
                <p className="text-foreground/70 leading-relaxed">{feature.description}</p>
              </motion.div>
            )
          })}
        </motion.div>

        <motion.div 
          className="rounded-2xl border border-primary/30 bg-gradient-to-br from-card/80 to-card/40 backdrop-blur overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="bg-gradient-to-r from-primary/15 via-accent/10 to-primary/5 px-8 py-12 md:px-12 md:py-16">
            <motion.h3 
              className="mb-8 text-3xl font-bold text-foreground"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              Why Attend?
            </motion.h3>
            <div className="grid gap-6 md:grid-cols-2">
              {benefits.map((benefit, idx) => (
                <motion.div 
                  key={idx}
                  className="flex gap-4"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <motion.div 
                    className="flex-shrink-0"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                  >
                    <div className="flex items-center justify-center h-8 w-8 rounded-lg bg-gradient-to-br from-primary to-accent text-white">
                      <FiCheck className="w-5 h-5" />
                    </div>
                  </motion.div>
                  <div>
                    <p className="text-foreground/80 font-medium">{benefit}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
