'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Card } from '@/components/ui/card'
import { motion } from 'framer-motion'
import { FiMapPin, FiDollarSign, FiMail } from 'react-icons/fi'
import { containerVariants, itemVariants } from '@/lib/animations'

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    jobTitle: '',
    message: '',
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    try {
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        const error = await response.json()
        console.error('Registration error:', error)
        return
      }

      const result = await response.json()
      console.log('Registration successful:', result)
      setSubmitted(true)
      
      setTimeout(() => {
        setFormData({ name: '', email: '', company: '', jobTitle: '', message: '' })
        setSubmitted(false)
      }, 4000)
    } catch (error) {
      console.error('Submission error:', error)
    }
  }

  return (
    <section id="contact" className="bg-gradient-to-b from-secondary/50 to-background py-20 px-4 md:py-32 relative overflow-hidden">
      {/* Decorative background */}
      <motion.div 
        className="absolute inset-0 -z-10 overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
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
            Registration
          </motion.span>
          <motion.h2 
            className="mb-4 text-4xl font-bold text-foreground md:text-5xl bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent"
            variants={itemVariants}
          >
            Join Us in NYC & Online
          </motion.h2>
          <motion.p 
            className="text-lg text-foreground/60 max-w-2xl mx-auto"
            variants={itemVariants}
          >
            Register now for the 2025 CIO Tech Leadership Conference and reserve your spot
          </motion.p>
        </motion.div>

        <motion.div 
          className="grid gap-8 md:grid-cols-2"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Event Details */}
          <motion.div className="space-y-6" variants={itemVariants}>
            <motion.div whileHover={{ y: -5 }} transition={{ duration: 0.2 }}>
              <Card className="border-primary/20 p-8 hover:border-primary/50 transition hover:shadow-lg hover:shadow-primary/10 bg-card/40 backdrop-blur">
                <motion.div 
                  className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 text-lg"
                  whileHover={{ scale: 1.1, rotate: 10 }}
                >
                  <FiMapPin className="w-5 h-5 text-primary" />
                </motion.div>
                <h3 className="mb-6 text-xl font-bold text-foreground">Event Details</h3>
              <div className="space-y-5">
                <div>
                  <p className="text-xs uppercase font-semibold text-foreground/50 tracking-wide">Date</p>
                  <p className="mt-2 text-lg font-semibold text-foreground">June 25-26, 2025</p>
                </div>
                <div>
                  <p className="text-xs uppercase font-semibold text-foreground/50 tracking-wide">Location</p>
                  <p className="mt-2 text-lg font-semibold text-foreground">New York City Convention Center</p>
                </div>
                <div>
                  <p className="text-xs uppercase font-semibold text-foreground/50 tracking-wide">Virtual Option</p>
                  <p className="mt-2 text-lg font-semibold text-foreground">Livestream Available</p>
                </div>
              </div>
              </Card>
            </motion.div>

            <motion.div whileHover={{ y: -5 }} transition={{ duration: 0.2 }}>
              <Card className="border-primary/20 p-8 hover:border-primary/50 transition hover:shadow-lg hover:shadow-primary/10 bg-card/40 backdrop-blur">
                <motion.div 
                  className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 text-lg"
                  whileHover={{ scale: 1.1, rotate: 10 }}
                >
                  <FiDollarSign className="w-5 h-5 text-primary" />
                </motion.div>
                <h3 className="mb-6 text-xl font-bold text-foreground">Pricing</h3>
              <div className="space-y-3">
                {[
                  { label: 'In-Person Early Bird', price: '$599' },
                  { label: 'In-Person Regular', price: '$799' },
                  { label: 'Virtual Pass', price: 'Free' },
                ].map((item, idx) => (
                  <motion.div 
                    key={idx}
                    className="flex items-center justify-between p-4 rounded-lg bg-secondary/50 hover:bg-secondary transition"
                    whileHover={{ x: 5 }}
                  >
                    <span className="font-medium text-foreground">{item.label}</span>
                    <span className={`font-bold text-lg ${item.price === 'Free' ? 'text-accent' : 'text-primary'}`}>
                      {item.price}
                    </span>
                  </motion.div>
                ))}
              </div>
              </Card>
            </motion.div>
          </motion.div>

          {/* Registration Form */}
          <motion.div variants={itemVariants}>
            <motion.div whileHover={{ y: -5 }} transition={{ duration: 0.2 }}>
              <Card className="border-primary/20 p-8 hover:border-primary/50 transition hover:shadow-lg hover:shadow-primary/10 bg-card/40 backdrop-blur">
                <div className="flex items-center gap-3 mb-6">
                  <motion.div 
                    className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-accent/20"
                    whileHover={{ scale: 1.1, rotate: 10 }}
                  >
                    <FiMail className="w-5 h-5 text-primary" />
                  </motion.div>
                  <h3 className="text-xl font-bold text-foreground">Register Now</h3>
                </div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="mb-2 block text-sm font-medium text-foreground">
                  Full Name
                </label>
                <Input
                  id="name"
                  name="name"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-medium text-foreground">
                  Email Address
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="john@company.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div>
                <label htmlFor="company" className="mb-2 block text-sm font-medium text-foreground">
                  Company
                </label>
                <Input
                  id="company"
                  name="company"
                  placeholder="Your Company"
                  value={formData.company}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label htmlFor="jobTitle" className="mb-2 block text-sm font-medium text-foreground">
                  Job Title
                </label>
                <Input
                  id="jobTitle"
                  name="jobTitle"
                  placeholder="CIO, VP Technology, etc."
                  value={formData.jobTitle}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label htmlFor="message" className="mb-2 block text-sm font-medium text-foreground">
                  Additional Questions
                </label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Tell us what you&apos;d like to know..."
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                />
              </div>

              {submitted && (
                <div className="rounded-lg bg-primary/10 p-4 text-sm text-primary">
                  Thank you! We&apos;ll be in touch soon.
                </div>
              )}

              <Button type="submit" className="w-full">
                {submitted ? 'Registered!' : 'Register'}
              </Button>

              <p className="text-xs text-foreground/60">
                By registering, you agree to our Privacy Policy and Terms of Service.
              </p>
                </form>
              </Card>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
