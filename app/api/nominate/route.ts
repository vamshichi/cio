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
      from: `"CIO Excellence Awards" <${process.env.EMAIL_USER}>`,
      to: [
        'enquary@confexmeet.com',
        'ramesh.confexmeet@gmail.com',
      ],
      subject: `New Award Nomination - ${data.nomineeName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 700px;">
          <h2>New Award Nomination</h2>

          <table style="width:100%; border-collapse:collapse;">
            <tr>
              <td><strong>Nominee Name</strong></td>
              <td>${data.nomineeName}</td>
            </tr>

            <tr>
              <td><strong>Job Title</strong></td>
              <td>${data.nomineeTitle}</td>
            </tr>

            <tr>
              <td><strong>Company</strong></td>
              <td>${data.nomineeCompany}</td>
            </tr>

            <tr>
              <td><strong>Award Category</strong></td>
              <td>${data.nomineeCategory}</td>
            </tr>

            <tr>
              <td><strong>Nominator Name</strong></td>
              <td>${data.nominatorName}</td>
            </tr>

            <tr>
              <td><strong>Nominator Email</strong></td>
              <td>${data.nominatorEmail}</td>
            </tr>
          </table>

          <br/>

          <h3>Nomination Reason</h3>

          <p>
            ${data.nomineeReason}
          </p>
        </div>
      `,
    })

    // Confirmation email to nominator

    await transporter.sendMail({
      from: `"CIO Excellence Awards" <${process.env.EMAIL_USER}>`,
      to: data.nominatorEmail,
      subject: 'Nomination Received - CIO Excellence Awards',
      html: `
        <div style="font-family: Arial, sans-serif;">
          <h2>Thank You For Your Nomination</h2>

          <p>Dear ${data.nominatorName},</p>

          <p>
            We have successfully received your nomination for
            <strong>${data.nomineeName}</strong>.
          </p>

          <p>
            Our awards committee will review all submissions and
            shortlisted nominees will be notified.
          </p>

          <br/>

          <p>
            Regards,<br/>
            CIO Excellence Awards Team
          </p>
        </div>
      `,
    })

    return NextResponse.json({
      success: true,
      message: 'Nomination submitted successfully',
    })
  } catch (error) {
    console.error('Nomination Error:', error)

    return NextResponse.json(
      {
        success: false,
        message: 'Failed to submit nomination',
      },
      { status: 500 }
    )
  }
}