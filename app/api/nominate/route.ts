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

    const row = (label: string, value: string) =>
      value
        ? `<tr>
            <td style="padding:8px 12px; background:#f5f5f5; font-weight:bold; width:220px; border:1px solid #ddd;">${label}</td>
            <td style="padding:8px 12px; border:1px solid #ddd;">${value}</td>
           </tr>`
        : ''

    // ── Notification email to organizers ──────────────────────────────────────
    await transporter.sendMail({
      from: `"CIO Tech Leadership Excellence Awards" <${process.env.EMAIL_USER}>`,
      to: ['enquary@confexmeet.com', 'ramesh.confexmeet@gmail.com'],
      subject: `New Award Nomination – ${data.nomineeName} (${data.awardCategory})`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 720px; color: #222;">
          <h2 style="color:#0066cc;">New Award Nomination</h2>
          <p>A new nomination has been submitted for the <strong>CIO Tech Leadership Excellence Awards 2026</strong>.</p>

          <h3 style="margin-top:24px; color:#444;">Section 1 – Nominator Details</h3>
          <table style="width:100%; border-collapse:collapse;">
            ${row('Full Name', data.nominatorName)}
            ${row('Designation', data.nominatorDesignation)}
            ${row('Organisation', data.nominatorOrganisation)}
            ${row('Work Email', data.nominatorEmail)}
            ${row('Contact Number', data.nominatorPhone)}
          </table>

          <h3 style="margin-top:24px; color:#444;">Section 2 – Nominee Details</h3>
          <table style="width:100%; border-collapse:collapse;">
            ${row('Nominee Name', data.nomineeName)}
            ${row('Designation / Role', data.nomineeDesignation)}
            ${row('Organisation', data.nomineeOrganisation)}
            ${row('Industry Sector', data.industrySector === 'Other' ? `Other – ${data.industrySectorOther}` : data.industrySector)}
            ${row('Country / Region', data.countryRegion)}
          </table>

          <h3 style="margin-top:24px; color:#444;">Section 3 – Award Category</h3>
          <table style="width:100%; border-collapse:collapse;">
            ${row('Selected Category', data.awardCategory)}
          </table>

          <h3 style="margin-top:24px; color:#444;">Section 4 – Impact & Achievement</h3>

          <p style="margin:8px 0 4px;"><strong>Summary of Achievement</strong></p>
          <p style="background:#f9f9f9; border:1px solid #ddd; padding:12px; border-radius:4px; white-space:pre-wrap;">${data.summaryOfAchievement}</p>

          <p style="margin:16px 0 4px;"><strong>Innovation & Differentiation</strong></p>
          <p style="background:#f9f9f9; border:1px solid #ddd; padding:12px; border-radius:4px; white-space:pre-wrap;">${data.innovationDifferentiation}</p>

          <p style="margin:16px 0 4px;"><strong>Measurable Business Impact</strong></p>
          <p style="background:#f9f9f9; border:1px solid #ddd; padding:12px; border-radius:4px; white-space:pre-wrap;">${data.measurableImpact}</p>

          <p style="margin-top:24px; color:#888; font-size:13px;">
            Consent to be contacted: <strong>${data.consentComms ? 'Yes' : 'No'}</strong>
          </p>
        </div>
      `,
    })

    // ── Confirmation email to nominator ───────────────────────────────────────
    await transporter.sendMail({
      from: `"CIO Tech Leadership Excellence Awards" <${process.env.EMAIL_USER}>`,
      to: data.nominatorEmail,
      subject: 'Nomination Received – CIO Tech Leadership Excellence Awards 2026',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; color: #222;">
          <h2 style="color:#0066cc;">Thank You for Your Nomination</h2>

          <p>Dear ${data.nominatorName},</p>

          <p>
            We have successfully received your nomination for
            <strong>${data.nomineeName}</strong>
            in the category <strong>${data.awardCategory}</strong>.
          </p>

          <p>
            Our awards committee will review all submissions and shortlisted nominees will be notified ahead of the
            <strong>CIO Tech Leadership Conference & Awards Bangalore 2026</strong>.
          </p>

          <p style="color:#cc0000;"><strong>Nomination Deadline: 19 June 2026</strong></p>

          <br/>

          <p>
            Regards,<br/>
            CIO Tech Leadership Excellence Awards Team<br/>
            <a href="mailto:enquary@confexmeet.com" style="color:#0066cc;">enquary@confexmeet.com</a>
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