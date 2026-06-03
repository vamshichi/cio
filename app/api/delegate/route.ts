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
      to: process.env.EMAIL_TO,
      subject: `New Delegate Registration - ${data.fullName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 700px;">
          <h2>New Delegate Registration</h2>

          <table style="width:100%; border-collapse:collapse;">
            <tr>
              <td style="padding:8px; font-weight:bold;">Full Name</td>
              <td style="padding:8px;">${data.fullName}</td>
            </tr>

            <tr>
              <td style="padding:8px; font-weight:bold;">Job Title</td>
              <td style="padding:8px;">${data.jobTitle}</td>
            </tr>

            <tr>
              <td style="padding:8px; font-weight:bold;">Company</td>
              <td style="padding:8px;">${data.company}</td>
            </tr>

            <tr>
              <td style="padding:8px; font-weight:bold;">Industry</td>
              <td style="padding:8px;">${data.industry}</td>
            </tr>

            <tr>
              <td style="padding:8px; font-weight:bold;">Work Email</td>
              <td style="padding:8px;">${data.email}</td>
            </tr>

            <tr>
              <td style="padding:8px; font-weight:bold;">Mobile Number</td>
              <td style="padding:8px;">${data.phone}</td>
            </tr>

            <tr>
              <td style="padding:8px; font-weight:bold;">LinkedIn</td>
              <td style="padding:8px;">
                ${data.linkedin || 'Not Provided'}
              </td>
            </tr>
          </table>
        </div>
      `,
    })

    // Auto Reply to Delegate

    await transporter.sendMail({
      from: `"CIO Leadership Summit" <${process.env.EMAIL_USER}>`,
      to: data.email,
      subject: 'Registration Confirmation - CIO Leadership Summit 2026',
      html: `
        <div style="font-family: Arial, sans-serif;">
          <h2>Thank You for Registering</h2>

          <p>Dear ${data.fullName},</p>

          <p>
            Thank you for registering for the
            <strong>CIO Leadership Summit 2026</strong>.
          </p>

          <p>
            Your registration has been successfully received.
          </p>

          <p>
            Our team will contact you with event updates and
            participation details.
          </p>

          <br />

          <p>
            Regards,<br />
            CIO Leadership Summit Team
          </p>
        </div>
      `,
    })

    return NextResponse.json({
      success: true,
      message: 'Delegate registration submitted successfully',
    })
  } catch (error) {
    console.error('Delegate Registration Error:', error)

    return NextResponse.json(
      {
        success: false,
        message: 'Failed to submit registration',
      },
      {
        status: 500,
      }
    )
  }
}