import nodemailer from 'nodemailer'
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  try {
    const data = await req.json()

    const transporter = nodemailer.createTransport({
  host: 'smtp.zoho.in', // India
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
})

    const html = `
      <h2>New CIO Summit Registration</h2>

      <h3>Personal Information</h3>
      <p><b>Name:</b> ${data.fullName}</p>
      <p><b>Job Title:</b> ${data.jobTitle}</p>
      <p><b>Company:</b> ${data.company}</p>
      <p><b>Industry:</b> ${data.industry}</p>
      <p><b>Email:</b> ${data.email}</p>
      <p><b>Phone:</b> ${data.phone}</p>
      <p><b>LinkedIn:</b> ${data.linkedin}</p>

      <h3>Interested In</h3>
      <p>${data.interestedIn?.join(', ')}</p>

      <h3>Key Areas Of Interest</h3>
      <p>${data.interests?.join(', ')}</p>

      <h3>Objectives</h3>
      <p>${data.objectives?.join(', ')}</p>

      <h3>Networking & Awards</h3>
      <p>${data.attendAwards}</p>

      <h3>Consent</h3>
      <p>Partner Sharing: ${data.partnerConsent ? 'Yes' : 'No'}</p>
      <p>Future Updates: ${data.eventConsent ? 'Yes' : 'No'}</p>
    `

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: 'enquary@confexmeet.com, ramesh.confexmeet@gmail.com',
      subject: `New Registration - ${data.fullName}`,
      html,
    })

    return NextResponse.json({
      success: true,
      message: 'Registration submitted successfully',
    })
  } catch (error) {
    console.error(error)

    return NextResponse.json(
      {
        success: false,
        message: 'Failed to submit registration',
      },
      { status: 500 }
    )
  }
}