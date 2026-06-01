'use client'

import { Card } from '@/components/ui/card'
import { motion } from 'framer-motion'
import { FiLinkedin, FiTwitter } from 'react-icons/fi'
import { containerVariants, itemVariants } from '@/lib/animations'

export function Speakers() {
  const speakers = [
    {
      name: 'Sarah Chen',
      title: 'Chief Technology Officer',
      company: 'Global Tech Corp',
      bio: 'Leading digital transformation initiatives',
      initials: 'SC',
    },
    {
      name: 'Michael Rodriguez',
      title: 'VP of Innovation',
      company: 'Future Systems Inc',
      bio: 'Expert in emerging technologies',
      initials: 'MR',
    },
    {
      name: 'Lisa Park',
      title: 'Chief Information Officer',
      company: 'Enterprise Solutions',
      bio: 'Infrastructure and cloud strategy specialist',
      initials: 'LP',
    },
    {
      name: 'James Morrison',
      title: 'Director of Digital Strategy',
      company: 'Innovation Labs',
      bio: 'Driving organizational transformation',
      initials: 'JM',
    },
    {
      name: 'Angela Williams',
      title: 'Head of Technology',
      company: 'Next Gen Industries',
      bio: 'Building tomorrow&apos;s tech teams',
      initials: 'AW',
    },
    {
      name: 'David Kim',
      title: 'Chief Digital Officer',
      company: 'Connected World',
      bio: 'IoT and AI integration leader',
      initials: 'DK',
    },
  ]

  return (
    <section id="speakers" className="py-20 px-4 md:py-32 bg-gradient-to-b from-background via-background to-secondary/30 relative overflow-hidden">
      {/* Background decorative elements */}
      <motion.div 
        className="absolute inset-0 -z-10 overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="absolute -top-96 right-0 w-96 h-96 bg-primary/15 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 left-0 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />
      </motion.div>

      <div className="mx-auto max-w-7xl relative z-10">
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
            Expert Speakers
          </motion.span>
          <motion.h2 
            className="mb-4 text-4xl font-bold text-foreground md:text-5xl bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent"
            variants={itemVariants}
          >
            Industry Leaders & Visionaries
          </motion.h2>
          <motion.p 
            className="text-lg text-foreground/60 max-w-2xl mx-auto"
            variants={itemVariants}
          >
            Learn from C-suite executives and thought leaders driving innovation in technology
          </motion.p>
        </motion.div>

        <motion.div 
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {speakers.map((speaker, idx) => (
            <motion.div key={idx} variants={itemVariants}>
              <Card className="group flex flex-col overflow-hidden border-primary/20 hover:border-primary/50 transition hover:shadow-xl hover:shadow-primary/10 h-full bg-card/40 backdrop-blur">
                <motion.div 
                  className="h-40 bg-gradient-to-br from-primary/20 via-accent/15 to-primary/10 flex items-center justify-center relative overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                >
                  {/* Animated background gradient */}
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-br from-primary/30 to-accent/20"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                  />
                  <motion.div 
                    className="h-20 w-20 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-2xl font-bold text-white relative z-10"
                    whileHover={{ scale: 1.15, rotate: 10 }}
                  >
                    {speaker.initials}
                  </motion.div>
                </motion.div>
                <div className="flex flex-1 flex-col gap-3 p-6">
                  <h3 className="text-lg font-bold text-foreground">{speaker.name}</h3>
                  <div>
                    <p className="text-sm font-semibold text-primary">{speaker.title}</p>
                    <p className="text-sm text-foreground/60">{speaker.company}</p>
                  </div>
                  <p className="mt-1 flex-1 text-sm leading-relaxed text-foreground/70">{speaker.bio}</p>
                  <motion.div 
                    className="flex gap-2 pt-2"
                    initial={{ opacity: 0, y: 10 }}
                    whileHover={{ opacity: 1, y: 0 }}
                  >
                    <motion.button 
                      className="p-2 rounded-lg bg-primary/10 hover:bg-primary/20 text-primary transition"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FiLinkedin className="w-4 h-4" />
                    </motion.button>
                    <motion.button 
                      className="p-2 rounded-lg bg-primary/10 hover:bg-primary/20 text-primary transition"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FiTwitter className="w-4 h-4" />
                    </motion.button>
                  </motion.div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
