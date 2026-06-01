'use client'

import { Card } from '@/components/ui/card'
import { motion } from 'framer-motion'
import { FiClock, FiUsers, FiMic, FiLayers, FiAward, FiCoffee } from 'react-icons/fi'
import { GiRobotAntennas } from 'react-icons/gi'
import { containerVariants, itemVariants } from '@/lib/animations'

export function Agenda() {
  const agendaItems = [
    { time: '8:00 AM', title: 'Breakfast & Networking', speaker: '', icon: FiCoffee },
    { time: '9:00 AM', title: 'Opening Keynote: The Future of CIO Leadership', speaker: 'Industry Visionary', icon: FiMic },
    { time: '10:00 AM', title: 'Panel: Digital Transformation in 2025', speaker: 'Executive Panel', icon: FiUsers },
    { time: '11:00 AM', title: 'Breakout Sessions', speaker: 'Multiple tracks', icon: FiLayers },
    { time: '12:30 PM', title: 'Lunch & Roundtables', speaker: '', icon: FiCoffee },
    { time: '1:30 PM', title: 'Workshop: Building High-Performance Teams', speaker: 'Tech Leaders', icon: GiRobotAntennas },
    { time: '2:30 PM', title: 'Innovation Showcase', speaker: 'Partner Demonstrations', icon: FiLayers },
    { time: '3:30 PM', title: 'Awards Ceremony', speaker: '', icon: FiAward },
    { time: '4:30 PM', title: 'Closing Reception & Networking', speaker: '', icon: FiCoffee },
  ]

  return (
    <section id="agenda" className="bg-gradient-to-b from-secondary/50 to-background py-20 px-4 md:py-32 relative overflow-hidden">
      {/* Background decorative elements */}
      <motion.div 
        className="absolute inset-0 -z-10 overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="absolute top-1/3 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
      </motion.div>

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
            Schedule
          </motion.span>
          <motion.h2 
            className="mb-4 text-4xl font-bold text-foreground md:text-5xl bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent"
            variants={itemVariants}
          >
            Conference Agenda
          </motion.h2>
          <motion.p 
            className="text-lg text-foreground/60 max-w-2xl mx-auto"
            variants={itemVariants}
          >
            Two full days packed with insights, networking, and opportunities to shape the future
          </motion.p>
        </motion.div>

        <motion.div 
          className="space-y-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {agendaItems.map((item, idx) => {
            const Icon = item.icon
            return (
              <motion.div 
                key={idx} 
                className="group relative"
                variants={itemVariants}
                whileHover={{ x: 5 }}
              >
                <Card className="flex flex-col gap-4 p-6 md:flex-row md:items-center md:justify-between transition border-primary/20 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 bg-card/40 backdrop-blur">
                  <div className="flex items-start gap-6 flex-1">
                    <motion.div 
                      className="flex-shrink-0 pt-1"
                      whileHover={{ scale: 1.1, rotate: 10 }}
                    >
                      <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center text-primary">
                        <Icon className="w-5 h-5" />
                      </div>
                    </motion.div>
                    <div className="flex-1 min-w-0">
                      <div className="text-sm font-bold text-primary uppercase tracking-wide">{item.time}</div>
                      <h3 className="mt-2 text-lg font-semibold text-foreground">{item.title}</h3>
                    </div>
                  </div>
                  {item.speaker && (
                    <div className="text-sm font-medium text-foreground/60 md:text-right">
                      {item.speaker}
                    </div>
                  )}
                </Card>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
