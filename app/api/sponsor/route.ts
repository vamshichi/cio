
import nodemailer from 'nodemailer'
import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function POST(req: Request) {
  try {
    const data = await req.json()

    await prisma.sponsorRegistration.create({
  data: {
    fullName: data.fullName,
    jobTitle: data.jobTitle,
    company: data.company,

    email: data.email,
    phone: data.phone,

    linkedin: data.linkedin || null,

    objectives: data.objectives || [],

    sponsoredBefore:
      data.sponsoredBefore || '',

    shareDetails:
      data.shareDetails || false,

    receiveUpdates:
      data.receiveUpdates || false,

         utmSource:
      data.utmSource || 'direct',

    utmMedium:
      data.utmMedium || null,

    utmCampaign:
      data.utmCampaign || null,
  },
})

    const transporter = nodemailer.createTransport({
      host: 'smtp.zoho.in',
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    })

    // Admin Email


await transporter.sendMail({
  from: `"CIO Leadership Summit" <${process.env.EMAIL_USER}>`,
  to: 'enquiry@confexmeet.com, ramesh.confexmeet@gmail.com',
  subject: `New Sponsorship Enquiry - ${data.company}`,
  html: `
<!DOCTYPE html>
<html>
<body style="margin:0;padding:0;background:#f0f2f5;font-family:'Segoe UI',Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="padding:32px 16px;background:#f0f2f5;">
    <tr>
      <td align="center">

        <table width="620" cellpadding="0" cellspacing="0"
          style="max-width:620px;width:100%;background:#fff;border-radius:6px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08);">

          <!-- Header -->
          <tr>
            <td style="background:linear-gradient(135deg,#0a0f1e 0%,#1a2a5e 100%);padding:28px 36px;">
              <table width="100%">
                <tr>
                  <td>
                    <p style="margin:0 0 6px;font-size:10px;font-weight:700;letter-spacing:3px;text-transform:uppercase;color:#c9a84c;">
                      CIO Leadership Summit 2026
                    </p>
                    <h1 style="margin:0;font-size:22px;color:#fff;">
                      🤝 New Sponsorship Enquiry
                    </h1>
                  </td>

                  <td align="right">
                    <div style="background:#c9a84c;color:#0a0f1e;font-size:11px;font-weight:700;padding:6px 14px;border-radius:20px;">
                      SPONSOR LEAD
                    </div>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Timestamp -->
          <tr>
            <td style="background:#f7f8fa;padding:10px 36px;border-bottom:1px solid #eaeaea;">
              <p style="margin:0;font-size:12px;color:#888;">
                📅 Submitted On:
                <strong style="color:#1a1a2e;">
                  ${new Date().toLocaleString('en-IN')}
                </strong>
              </p>
            </td>
          </tr>

          <!-- Contact Details -->
          <tr>
            <td style="padding:32px 36px 24px;">

              <p style="margin:0 0 12px;font-size:10px;font-weight:700;letter-spacing:2.5px;text-transform:uppercase;color:#c9a84c;">
                👤 Contact Details
              </p>

              <table width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;margin-bottom:28px;">
                <tr>
                  <td style="padding:10px;background:#f7f8fa;border-bottom:1px solid #eaeaea;font-size:12px;color:#888;width:38%;">
                    Full Name
                  </td>
                  <td style="padding:10px;background:#f7f8fa;border-bottom:1px solid #eaeaea;font-weight:700;color:#1a1a2e;">
                    ${data.fullName}
                  </td>
                </tr>

                <tr>
                  <td style="padding:10px;background:#fff;border-bottom:1px solid #eaeaea;font-size:12px;color:#888;">
                    Job Title
                  </td>
                  <td style="padding:10px;background:#fff;border-bottom:1px solid #eaeaea;">
                    ${data.jobTitle}
                  </td>
                </tr>

                <tr>
                  <td style="padding:10px;background:#f7f8fa;border-bottom:1px solid #eaeaea;font-size:12px;color:#888;">
                    Company
                  </td>
                  <td style="padding:10px;background:#f7f8fa;border-bottom:1px solid #eaeaea;font-weight:700;">
                    ${data.company}
                  </td>
                </tr>

                <tr>
                  <td style="padding:10px;background:#fff;border-bottom:1px solid #eaeaea;font-size:12px;color:#888;">
                    Work Email
                  </td>
                  <td style="padding:10px;background:#fff;border-bottom:1px solid #eaeaea;">
                    <a href="mailto:${data.email}" style="color:#1a2a5e;text-decoration:none;font-weight:600;">
                      ${data.email}
                    </a>
                  </td>
                </tr>

                <tr>
                  <td style="padding:10px;background:#f7f8fa;border-bottom:1px solid #eaeaea;font-size:12px;color:#888;">
                    Mobile Number
                  </td>
                  <td style="padding:10px;background:#f7f8fa;border-bottom:1px solid #eaeaea;">
                    ${data.phone}
                  </td>
                </tr>

                <tr>
                  <td style="padding:10px;background:#fff;border-bottom:1px solid #eaeaea;font-size:12px;color:#888;">
                    LinkedIn Profile
                  </td>
                  <td style="padding:10px;background:#fff;border-bottom:1px solid #eaeaea;">
                    ${data.linkedin || 'Not Provided'}
                  </td>
                </tr>
              </table>

              <!-- Sponsorship Information -->
              <p style="margin:0 0 12px;font-size:10px;font-weight:700;letter-spacing:2.5px;text-transform:uppercase;color:#c9a84c;">
                🎯 Sponsorship Information
              </p>

              <table width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;margin-bottom:28px;">
                <tr>
                  <td style="padding:10px;background:#f7f8fa;border-bottom:1px solid #eaeaea;font-size:12px;color:#888;width:38%;">
                    Sponsorship Objectives
                  </td>
                  <td style="padding:10px;background:#f7f8fa;border-bottom:1px solid #eaeaea;">
                    ${
                      data.objectives?.length
                        ? data.objectives.join(', ')
                        : 'Not Selected'
                    }
                  </td>
                </tr>

                <tr>
                  <td style="padding:10px;background:#fff;border-bottom:1px solid #eaeaea;font-size:12px;color:#888;">
                    Sponsored B2B Events Before
                  </td>
                  <td style="padding:10px;background:#fff;border-bottom:1px solid #eaeaea;">
                    ${data.sponsoredBefore || 'Not Selected'}
                  </td>
                </tr>

                <tr>
                  <td style="padding:10px;background:#f7f8fa;border-bottom:1px solid #eaeaea;font-size:12px;color:#888;">
                    Share Details With Partners
                  </td>
                  <td style="padding:10px;background:#f7f8fa;border-bottom:1px solid #eaeaea;">
                    ${data.shareDetails ? '✅ Yes' : '❌ No'}
                  </td>
                </tr>

                <tr>
                  <td style="padding:10px;background:#fff;border-bottom:1px solid #eaeaea;font-size:12px;color:#888;">
                    Receive Event Updates
                  </td>
                  <td style="padding:10px;background:#fff;border-bottom:1px solid #eaeaea;">
                    ${data.receiveUpdates ? '✅ Yes' : '❌ No'}
                  </td>
                </tr>
              </table>

              <!-- WhatsApp Share -->
              <p style="margin:0 0 12px;font-size:10px;font-weight:700;letter-spacing:2.5px;text-transform:uppercase;color:#25D366;">
                💬 WhatsApp Quick Share
              </p>

              <div style="background:#f0fdf4;border:1.5px solid #25D366;border-radius:6px;padding:18px 20px;">
                <pre style="margin:0;font-family:monospace;font-size:13px;color:#1a1a2e;white-space:pre-wrap;line-height:1.7;">
🤝 *New Sponsorship Enquiry*
━━━━━━━━━━━━━━━━━━━
👤 *Name:* ${data.fullName}
💼 *Designation:* ${data.jobTitle}
🏢 *Company:* ${data.company}
📧 *Email:* ${data.email}
📱 *Phone:* ${data.phone}
🔗 *LinkedIn:* ${data.linkedin || 'Not Provided'}

🎯 *Objectives:*
${
  data.objectives?.length
    ? data.objectives.join(', ')
    : 'Not Selected'
}

🏆 *Sponsored Before:*
${data.sponsoredBefore || 'Not Selected'}

🤝 *Share With Partners:*
${data.shareDetails ? 'Yes' : 'No'}

📨 *Receive Updates:*
${data.receiveUpdates ? 'Yes' : 'No'}
━━━━━━━━━━━━━━━━━━━
📅 ${new Date().toLocaleString('en-IN')}
                </pre>
              </div>

            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background:#0a0f1e;padding:20px 36px;">
              <p style="margin:0;font-size:11px;color:#888;">
                Automated admin notification · CIO Leadership Summit 2026 · Sponsorship Enquiry System
              </p>
            </td>
          </tr>

        </table>

      </td>
    </tr>
  </table>
</body>
</html>
`,
})


    // Auto Reply Email

    await transporter.sendMail({
      from: `"CIO Leadership Summit" <${process.env.EMAIL_USER}>`,
      to: data.email,
      subject:
        'Sponsorship Enquiry Received - CIO Leadership Summit 2026',
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.7;">
          <h2>
            Thank You For Your Interest In Sponsoring
          </h2>

          <p>
            Dear ${data.fullName},
          </p>

          <p>
            Thank you for expressing interest in sponsoring the
            <strong>
              CIO Leadership Summit 2026
            </strong>.
          </p>

          <p>
            Your enquiry has been successfully received.
          </p>

          <p>
            Our sponsorship team will review your
            submission and get in touch with you
            shortly to discuss sponsorship
            opportunities and partnership options.
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
      message:
        'Sponsorship enquiry submitted successfully',
    })
  } catch (error) {
    console.error(
      'Sponsor Registration Error:',
      error
    )

    return NextResponse.json(
      {
        success: false,
        message:
          'Failed to submit sponsorship enquiry',
      },
      {
        status: 500,
      }
    )
  }
}

export async function GET() {
  try {
    const sponsors =
      await prisma.sponsorRegistration.findMany({
        orderBy: {
          createdAt: 'desc',
        },
      })

    return NextResponse.json({
      success: true,
      data: sponsors,
    })
  } catch (error) {
    console.error(error)

    return NextResponse.json(
      {
        success: false,
        message: 'Failed to fetch sponsors',
      },
      { status: 500 }
    )
  }
}