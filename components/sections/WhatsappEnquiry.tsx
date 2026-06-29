'use client'

import { useState } from 'react'
import { MessageCircle, X } from 'lucide-react'

export default function WhatsappEnquiry() {
  const [open, setOpen] = useState(false)

  const [form, setForm] = useState({
    name: '',
    designation: '',
    company: '',
    phone: '',
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = () => {
    if (
      !form.name ||
      !form.designation ||
      !form.company ||
      !form.phone
    ) {
      alert('Please fill all fields.')
      return
    }

    const message = `Hello,

I would like to know more about your event.

Name: ${form.name}
Designation: ${form.designation}
Company: ${form.company}
Mobile: ${form.phone}

Please contact me.`

    // Replace with your WhatsApp number
    const whatsappNumber = '917975429127'

    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
        message
      )}`,
      '_blank'
    )

    setOpen(false)

    setForm({
      name: '',
      designation: '',
      company: '',
      phone: '',
    })
  }

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-6 right-6 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-green-500 text-white shadow-2xl transition hover:scale-110 hover:bg-green-600"
      >
        <MessageCircle size={32} />
      </button>

      {/* Modal */}
      {open && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/50 p-4">
          <div className="relative w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl">

            <button
              onClick={() => setOpen(false)}
              className="absolute right-4 top-4 text-gray-500 hover:text-black"
            >
              <X />
            </button>

            <h2 className="text-2xl font-bold">
              WhatsApp Enquiry
            </h2>

            <p className="mt-2 text-sm text-gray-500">
              Fill your details and continue on WhatsApp.
            </p>

            <div className="mt-6 space-y-4">

              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={form.name}
                onChange={handleChange}
                className="w-full rounded-lg border p-3 outline-none focus:border-green-500"
              />

              <input
                type="text"
                name="designation"
                placeholder="Designation"
                value={form.designation}
                onChange={handleChange}
                className="w-full rounded-lg border p-3 outline-none focus:border-green-500"
              />

              <input
                type="text"
                name="company"
                placeholder="Company Name"
                value={form.company}
                onChange={handleChange}
                className="w-full rounded-lg border p-3 outline-none focus:border-green-500"
              />

              <input
                type="tel"
                name="phone"
                placeholder="Mobile Number"
                value={form.phone}
                onChange={handleChange}
                className="w-full rounded-lg border p-3 outline-none focus:border-green-500"
              />

              <button
                onClick={handleSubmit}
                className="w-full rounded-lg bg-green-500 py-3 font-semibold text-white transition hover:bg-green-600"
              >
                Continue to WhatsApp
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}