import nodemailer from 'nodemailer'
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  try {
    const data = await req.json()

    const transporter = nodemailer.createTransport({
      host: 'smtp.zoho.in',
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    })

    await transporter.sendMail({
      from: `"CIO Leadership Summit" <${process.env.EMAIL_USER}>`,
      to: 'enquary@confexmeet.com, ramesh.confexmeet@gmail.com',
      subject: `New Sponsorship Enquiry - ${data.companyName}`,
      html: `
        <div style="font-family: Arial, sans-serif;">
          <h2>New Sponsorship Enquiry</h2>

          <h3>Company Information</h3>

          <p><strong>Company Name:</strong> ${data.companyName}</p>
          <p><strong>Website:</strong> ${data.website}</p>
          <p><strong>Contact Person:</strong> ${data.contactPerson}</p>
          <p><strong>Designation:</strong> ${data.designation}</p>
          <p><strong>Email:</strong> ${data.email}</p>
          <p><strong>Phone:</strong> ${data.phone}</p>

          <h3>Company Profile</h3>

          <p>${data.companyDescription}</p>
        </div>
      `,
    })

    return NextResponse.json({
      success: true,
      message: 'Sponsorship enquiry submitted successfully',
    })
  } catch (error) {
    console.error(error)

    return NextResponse.json(
      {
        success: false,
        message: 'Failed to submit sponsorship enquiry',
      },
      {
        status: 500,
      }
    )
  }
}