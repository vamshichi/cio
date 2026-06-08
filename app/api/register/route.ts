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

    // ── Notification email to organizers ──────────────────────────────────────
    await transporter.sendMail({
      from: `"CIO Tech Leadership Conference" <${process.env.EMAIL_USER}>`,
      to: ['enquary@confexmeet.com', 'ramesh.confexmeet@gmail.com'],
      subject: `New Registration – ${data.fullName} (${data.company})`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 680px; color: #222;">
          <h2 style="color:#0066cc;">New Event Registration</h2>
          <p>A new registration has been submitted for the <strong>CIO Tech Leadership Conference & Awards Bangalore 2026</strong>.</p>

          <h3 style="margin-top:24px; color:#444;">Basic Information</h3>
          <table style="width:100%; border-collapse:collapse;">
            <tr>
              <td style="padding:8px 12px; background:#f5f5f5; font-weight:bold; width:250px; border:1px solid #ddd;">Full Name</td>
              <td style="padding:8px 12px; border:1px solid #ddd;">${data.fullName}</td>
            </tr>
            <tr>
              <td style="padding:8px 12px; background:#f5f5f5; font-weight:bold; border:1px solid #ddd;">Job Title</td>
              <td style="padding:8px 12px; border:1px solid #ddd;">${data.jobTitle}</td>
            </tr>
            <tr>
              <td style="padding:8px 12px; background:#f5f5f5; font-weight:bold; border:1px solid #ddd;">Company / Organisation</td>
              <td style="padding:8px 12px; border:1px solid #ddd;">${data.company}</td>
            </tr>
            <tr>
              <td style="padding:8px 12px; background:#f5f5f5; font-weight:bold; border:1px solid #ddd;">Work Email</td>
              <td style="padding:8px 12px; border:1px solid #ddd;">${data.email}</td>
            </tr>
            <tr>
              <td style="padding:8px 12px; background:#f5f5f5; font-weight:bold; border:1px solid #ddd;">Mobile Number</td>
              <td style="padding:8px 12px; border:1px solid #ddd;">${data.phone}</td>
            </tr>
          </table>

          <h3 style="margin-top:24px; color:#444;">Interest in the Event</h3>
          <table style="width:100%; border-collapse:collapse;">
            <tr>
              <td style="padding:8px 12px; background:#f5f5f5; font-weight:bold; width:250px; border:1px solid #ddd;">Interested In</td>
              <td style="padding:8px 12px; border:1px solid #ddd;">
                ${
                  data.interestedIn?.length
                    ? data.interestedIn.map((i: string) => `<span style="display:inline-block; background:#e8f4ff; border:1px solid #b3d4f5; border-radius:4px; padding:2px 8px; margin:2px; font-size:13px;">${i}</span>`).join(' ')
                    : '<span style="color:#999;">None selected</span>'
                }
              </td>
            </tr>
          </table>

          ${data.briefNote ? `
          <h3 style="margin-top:24px; color:#444;">Brief Note</h3>
          <p style="background:#f9f9f9; border:1px solid #ddd; padding:12px; border-radius:4px; white-space:pre-wrap; margin:0;">${data.briefNote}</p>
          ` : ''}

          <h3 style="margin-top:24px; color:#444;">Consent</h3>
          <table style="width:100%; border-collapse:collapse;">
            <tr>
              <td style="padding:8px 12px; background:#f5f5f5; font-weight:bold; width:250px; border:1px solid #ddd;">Receive Brochure & Updates</td>
              <td style="padding:8px 12px; border:1px solid #ddd;">${data.brochureConsent ? '✅ Yes' : '❌ No'}</td>
            </tr>
            <tr>
              <td style="padding:8px 12px; background:#f5f5f5; font-weight:bold; border:1px solid #ddd;">Agree to be Contacted</td>
              <td style="padding:8px 12px; border:1px solid #ddd;">${data.contactConsent ? '✅ Yes' : '❌ No'}</td>
            </tr>
          </table>
        </div>
      `,
    })

    // ── Confirmation email to registrant ──────────────────────────────────────
    await transporter.sendMail({
      from: `"CIO Tech Leadership Conference" <${process.env.EMAIL_USER}>`,
      to: data.email,
      subject: 'Registration Received – CIO Tech Leadership Conference & Awards Bangalore 2026',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; color: #222;">
          <h2 style="color:#0066cc;">Thank You for Registering!</h2>

          <p>Dear ${data.fullName},</p>

          <p>
            We have successfully received your registration for the
            <strong>CIO Tech Leadership Conference & Awards Bangalore 2026</strong>.
          </p>

          <p>
            The event brochure and further details will be sent to you shortly at this email address.
          </p>

          <p>
            If you have any questions in the meantime, feel free to reach out to us at
            <a href="mailto:enquary@confexmeet.com" style="color:#0066cc;">enquary@confexmeet.com</a>.
          </p>

          <br/>

          <p>
            Warm regards,<br/>
            <strong>CIO Tech Leadership Conference Team</strong><br/>
            <a href="mailto:enquary@confexmeet.com" style="color:#0066cc;">enquary@confexmeet.com</a>
          </p>
        </div>
      `,
    })

    return NextResponse.json({
      success: true,
      message: 'Registration submitted successfully',
    })
  } catch (error) {
    console.error('Registration Error:', error)

    return NextResponse.json(
      {
        success: false,
        message: 'Failed to submit registration',
      },
      { status: 500 }
    )
  }
}