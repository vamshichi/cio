'use client'

import { useState } from 'react'
import { Card } from '@/components/ui/card'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

export function Awards() {
  const [showNominationForm, setShowNominationForm] = useState(false)
  const [nominationData, setNominationData] = useState({
    nominatorName: '',
    nominatorEmail: '',
    candidateName: '',
    candidateTitle: '',
    candidateCompany: '',
    reason: '',
    category: 'CIO Leadership Excellence',
  })
  const [nomSubmitted, setNomSubmitted] = useState(false)

  const handleNominationChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setNominationData(prev => ({ ...prev, [name]: value }))
  }

  const handleNominationSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    try {
      const response = await fetch('/api/nominate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(nominationData),
      })

      if (!response.ok) {
        console.error('Nomination error')
        return
      }

      setNomSubmitted(true)
      setTimeout(() => {
        setNominationData({
          nominatorName: '',
          nominatorEmail: '',
          candidateName: '',
          candidateTitle: '',
          candidateCompany: '',
          reason: '',
          category: 'CIO Leadership Excellence',
        })
        setNomSubmitted(false)
        setShowNominationForm(false)
      }, 3000)
    } catch (error) {
      console.error('Submission error:', error)
    }
  }
  const awards = [
    {
      title: 'CIO Leadership Excellence',
      description: 'Recognizing transformational leadership in technology',
      icon: '🏆',
    },
    {
      title: 'Innovation Champion',
      description: 'Outstanding contributions to digital innovation',
      icon: '⚡',
    },
    {
      title: 'Rising Tech Leader',
      description: 'Promising emerging executives in technology',
      icon: '🌟',
    },
    {
      title: 'Team Builder Award',
      description: 'Building and nurturing high-performance tech teams',
      icon: '👥',
    },
  ]

  return (
    <section id="awards" className="py-20 px-4 md:py-32 bg-gradient-to-b from-background via-background to-secondary/30">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center md:mb-20">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-xs font-semibold text-primary uppercase tracking-wide mb-4">
            Recognition
          </span>
          <h2 className="mb-4 text-4xl font-bold text-foreground md:text-5xl">
            Awards & Excellence
          </h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            Celebrating outstanding contributions to technology leadership
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 mb-12">
          {awards.map((award, idx) => (
            <Card key={idx} className="group overflow-hidden border-border hover:border-primary/50 transition hover:shadow-lg hover:shadow-primary/10">
              <div className="flex gap-6 p-8">
                <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center text-4xl rounded-lg bg-primary/10 group-hover:bg-primary/20 transition">
                  {award.icon}
                </div>
                <div className="flex-1">
                  <h3 className="mb-2 text-lg font-bold text-foreground">{award.title}</h3>
                  <p className="text-foreground/70 leading-relaxed">{award.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="rounded-2xl border border-primary/20 bg-gradient-to-r from-primary/5 to-accent/5 p-8 text-center md:p-12">
          <h3 className="mb-3 text-3xl font-bold text-foreground">
            Nominate a Visionary Leader
          </h3>
          <p className="mb-8 text-foreground/70 text-lg max-w-xl mx-auto">
            Know someone making a significant difference in technology leadership? We&apos;d love to hear about them.
          </p>
          <button 
            onClick={() => setShowNominationForm(true)}
            className="inline-block rounded-lg bg-primary px-8 py-3 font-semibold text-primary-foreground transition hover:bg-primary/90 shadow-lg hover:shadow-xl"
          >
            Submit Nomination
          </button>
        </div>

        <Dialog open={showNominationForm} onOpenChange={setShowNominationForm}>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>Nominate a Technology Leader</DialogTitle>
              <DialogDescription>
                Share your nomination for an exceptional CIO or technology executive
              </DialogDescription>
            </DialogHeader>
            
            <form onSubmit={handleNominationSubmit} className="space-y-4">
              <div>
                <label className="mb-2 block text-sm font-medium text-foreground">
                  Your Name
                </label>
                <Input
                  name="nominatorName"
                  placeholder="Your full name"
                  value={nominationData.nominatorName}
                  onChange={handleNominationChange}
                  required
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-foreground">
                  Your Email
                </label>
                <Input
                  name="nominatorEmail"
                  type="email"
                  placeholder="your@email.com"
                  value={nominationData.nominatorEmail}
                  onChange={handleNominationChange}
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="mb-2 block text-sm font-medium text-foreground">
                    Candidate Name
                  </label>
                  <Input
                    name="candidateName"
                    placeholder="Nominee name"
                    value={nominationData.candidateName}
                    onChange={handleNominationChange}
                    required
                  />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-foreground">
                    Title
                  </label>
                  <Input
                    name="candidateTitle"
                    placeholder="e.g., CIO"
                    value={nominationData.candidateTitle}
                    onChange={handleNominationChange}
                  />
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-foreground">
                  Company
                </label>
                <Input
                  name="candidateCompany"
                  placeholder="Organization"
                  value={nominationData.candidateCompany}
                  onChange={handleNominationChange}
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-foreground">
                  Category
                </label>
                <select
                  name="category"
                  value={nominationData.category}
                  onChange={handleNominationChange}
                  className="w-full rounded-md border border-border bg-background px-3 py-2 text-foreground"
                >
                  <option>CIO Leadership Excellence</option>
                  <option>Innovation Champion</option>
                  <option>Rising Tech Leader</option>
                  <option>Team Builder Award</option>
                </select>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-foreground">
                  Why Should They Win?
                </label>
                <Textarea
                  name="reason"
                  placeholder="Tell us what makes this person exceptional..."
                  value={nominationData.reason}
                  onChange={handleNominationChange}
                  rows={5}
                  required
                />
              </div>

              {nomSubmitted && (
                <div className="rounded-lg bg-primary/10 p-4 text-sm text-primary">
                  Thank you for the nomination! We&apos;ll review it shortly.
                </div>
              )}

              <div className="flex gap-4">
                <Button 
                  type="button" 
                  variant="outline" 
                  onClick={() => setShowNominationForm(false)}
                  className="flex-1"
                >
                  Cancel
                </Button>
                <Button 
                  type="submit" 
                  className="flex-1"
                  disabled={nomSubmitted}
                >
                  {nomSubmitted ? 'Submitted!' : 'Submit Nomination'}
                </Button>
              </div>
            </form>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  )
}
