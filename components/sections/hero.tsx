'use client'

import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { FiUsers, FiMic, FiCalendar } from 'react-icons/fi'
import { fadeInUp, staggerContainer, containerVariants, itemVariants } from '@/lib/animations'

export function Hero() {
  const stats = [
    { value: '500+', label: 'Executive Leaders', icon: FiUsers },
    { value: '50+', label: 'Industry Speakers', icon: FiMic },
    { value: '2', label: 'Days Packed Sessions', icon: FiCalendar },
  ]

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 py-20">
      {/* Background with generated image overlay */}
      <div className="absolute inset-0 -z-10">
        <img 
          src="/hero-cityscape.png" 
          alt="Conference background" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background" />
      </div>

      {/* Animated floating elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute -top-40 right-0 h-96 w-96 rounded-full bg-primary/20 blur-3xl"
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 5, repeat: Infinity }}
        />
        <motion.div 
          className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-accent/20 blur-3xl"
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 6, repeat: Infinity, delay: 1 }}
        />
        <motion.div 
          className="absolute top-1/3 left-1/4 h-72 w-72 rounded-full bg-primary/10 blur-2xl"
          animate={{ x: [0, 20, 0], y: [0, -20, 0] }}
          transition={{ duration: 7, repeat: Infinity }}
        />
      </div>

      <motion.div 
        className="mx-auto w-full max-w-6xl text-center relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div 
          className="mb-8 inline-flex items-center rounded-full border border-primary/30 bg-primary/10 backdrop-blur px-5 py-2"
          variants={itemVariants}
        >
          <span className="text-xs font-bold tracking-widest text-primary uppercase">New Event 2025</span>
          <span className="mx-3 h-1 w-1 rounded-full bg-gradient-to-r from-primary to-accent" />
          <span className="text-xs font-medium text-foreground/80">June 25-26, 2025</span>
        </motion.div>

        <motion.h1 
          className="mb-6 text-balance text-5xl font-bold tracking-tight text-foreground md:text-6xl lg:text-7xl leading-tight"
          variants={itemVariants}
        >
          Lead the Digital{' '}
          <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-pulse">
            Future
          </span>
        </motion.h1>

        <motion.p 
          className="mb-10 text-balance text-lg leading-relaxed text-foreground/70 md:text-xl"
          variants={itemVariants}
        >
          Join 500+ industry-leading CIOs and technology executives for insights on innovation,{' '}
          <br className="hidden md:inline" />transformation, and strategic leadership shaping the future.
        </motion.p>

        <motion.div 
          className="flex flex-col gap-4 sm:flex-row sm:justify-center mb-16"
          variants={itemVariants}
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button 
              size="lg" 
              className="text-base font-semibold bg-gradient-to-r from-primary to-accent text-white hover:shadow-xl hover:shadow-primary/50" 
              asChild
            >
              <Link href="#contact">Register Now</Link>
            </Button>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button 
              variant="outline" 
              size="lg" 
              className="text-base font-semibold border-primary/50 hover:bg-primary/5" 
              asChild
            >
              <Link href="#agenda">View Agenda</Link>
            </Button>
          </motion.div>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-12"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {stats.map((stat, idx) => {
            const Icon = stat.icon
            return (
              <motion.div 
                key={idx}
                className="flex flex-col items-center gap-4 p-6 rounded-xl bg-card/40 backdrop-blur border border-primary/20 hover:border-primary/50 transition"
                variants={itemVariants}
                whileHover={{ y: -5, boxShadow: '0 20px 40px rgba(0, 82, 204, 0.1)' }}
              >
                <motion.div 
                  className="rounded-full bg-gradient-to-br from-primary/20 to-accent/20 p-4"
                  whileHover={{ scale: 1.1, rotate: 10 }}
                >
                  <Icon className="w-6 h-6 text-primary" />
                </motion.div>
                <div className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent md:text-5xl">
                  {stat.value}
                </div>
                <p className="text-sm font-medium text-foreground/70">{stat.label}</p>
              </motion.div>
            )
          })}
        </motion.div>
      </motion.div>
    </section>
  )
}
