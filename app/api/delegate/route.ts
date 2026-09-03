

import nodemailer from 'nodemailer'
import { NextResponse } from 'next/server'
import path from 'path'
import { prisma } from '@/lib/prisma'

function badge(value: boolean) {
  return value
    ? `<span style="background:#dcfce7;color:#166534;font-size:12px;font-weight:700;padding:3px 10px;border-radius:20px;">✅ Yes</span>`
    : `<span style="background:#fee2e2;color:#991b1b;font-size:12px;font-weight:700;padding:3px 10px;border-radius:20px;">❌ No</span>`
}

function getAdminHtml(data: any, registrationDate: string) {
  const interests = data.interests?.length ? data.interests.join(', ') : 'Not Selected'
  const awardNomination = data.awardNomination || 'Not Nominated'
  const linkedin = data.linkedin || 'Not Provided'
  const message = data.message || 'No Message Provided'

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>New Delegate Registration – Admin</title>
</head>
<body style="margin:0;padding:0;background-color:#f0f2f5;font-family:'Segoe UI',Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#f0f2f5;padding:32px 16px;">
    <tr>
      <td align="center">
        <table width="620" cellpadding="0" cellspacing="0" border="0" style="max-width:620px;width:100%;background-color:#ffffff;border-radius:6px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08);">

          <!-- Header -->
          <tr>
            <td style="background:linear-gradient(135deg,#0a0f1e 0%,#1a2a5e 100%);padding:28px 36px;">
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td>
                    <p style="margin:0 0 6px;font-size:10px;font-weight:700;letter-spacing:3px;text-transform:uppercase;color:#c9a84c;">
                      CIO Leadership Summit 2026
                    </p>
                    <h1 style="margin:0;font-size:22px;font-weight:700;color:#ffffff;line-height:1.3;">
                      🆕 New Delegate Registration
                    </h1>
                  </td>
                  <td align="right" style="vertical-align:top;">
                    <div style="background-color:#c9a84c;color:#0a0f1e;font-size:11px;font-weight:700;padding:6px 14px;border-radius:20px;white-space:nowrap;letter-spacing:0.5px;">
                      LEAD IN
                    </div>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Timestamp bar -->
          <tr>
            <td style="background-color:#f7f8fa;padding:10px 36px;border-bottom:1px solid #eaeaea;">
              <p style="margin:0;font-size:12px;color:#888;">
                📅 Registered on: <strong style="color:#1a1a2e;">${registrationDate}</strong>
                &nbsp;&nbsp;|&nbsp;&nbsp;
                🌐 Source: <strong style="color:#1a1a2e;">CIO Leadership Summit 2026 – Direct</strong>
              </p>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="padding:32px 36px 24px;">

              <!-- Contact Details -->
              <p style="margin:0 0 12px;font-size:10px;font-weight:700;letter-spacing:2.5px;text-transform:uppercase;color:#c9a84c;">
                👤 Contact Details
              </p>
              <table width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;margin-bottom:28px;">
                <tr>
                  <td style="padding:9px 12px;background:#f7f8fa;border-bottom:1px solid #eaeaea;font-size:12px;color:#888;width:38%;">Full Name</td>
                  <td style="padding:9px 12px;background:#f7f8fa;border-bottom:1px solid #eaeaea;font-size:14px;color:#1a1a2e;font-weight:700;">${data.fullName}</td>
                </tr>
                <tr>
                  <td style="padding:9px 12px;background:#fff;border-bottom:1px solid #eaeaea;font-size:12px;color:#888;">Email</td>
                  <td style="padding:9px 12px;background:#fff;border-bottom:1px solid #eaeaea;font-size:14px;">
                    <a href="mailto:${data.email}" style="color:#1a2a5e;font-weight:600;text-decoration:none;">${data.email}</a>
                  </td>
                </tr>
                <tr>
                  <td style="padding:9px 12px;background:#f7f8fa;border-bottom:1px solid #eaeaea;font-size:12px;color:#888;">Phone</td>
                  <td style="padding:9px 12px;background:#f7f8fa;border-bottom:1px solid #eaeaea;font-size:14px;">
                    <a href="tel:${data.phone}" style="color:#1a1a2e;font-weight:600;text-decoration:none;">${data.phone}</a>
                  </td>
                </tr>
                <tr>
                  <td style="padding:9px 12px;background:#fff;border-bottom:1px solid #eaeaea;font-size:12px;color:#888;">LinkedIn</td>
                  <td style="padding:9px 12px;background:#fff;border-bottom:1px solid #eaeaea;font-size:14px;color:#1a1a2e;">${linkedin}</td>
                </tr>
              </table>

              <!-- Professional Details -->
              <p style="margin:0 0 12px;font-size:10px;font-weight:700;letter-spacing:2.5px;text-transform:uppercase;color:#c9a84c;">
                🏢 Professional Details
              </p>
              <table width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;margin-bottom:28px;">
                <tr>
                  <td style="padding:9px 12px;background:#f7f8fa;border-bottom:1px solid #eaeaea;font-size:12px;color:#888;width:38%;">Company</td>
                  <td style="padding:9px 12px;background:#f7f8fa;border-bottom:1px solid #eaeaea;font-size:14px;color:#1a1a2e;font-weight:700;">${data.company}</td>
                </tr>
                <tr>
                  <td style="padding:9px 12px;background:#fff;border-bottom:1px solid #eaeaea;font-size:12px;color:#888;">Designation</td>
                  <td style="padding:9px 12px;background:#fff;border-bottom:1px solid #eaeaea;font-size:14px;color:#1a1a2e;">${data.jobTitle}</td>
                </tr>
                <tr>
                  <td style="padding:9px 12px;background:#f7f8fa;border-bottom:1px solid #eaeaea;font-size:12px;color:#888;">Industry</td>
                  <td style="padding:9px 12px;background:#f7f8fa;border-bottom:1px solid #eaeaea;font-size:14px;color:#1a1a2e;">${data.industry}</td>
                </tr>
              </table>

              <!-- Event Preferences -->
              <p style="margin:0 0 12px;font-size:10px;font-weight:700;letter-spacing:2.5px;text-transform:uppercase;color:#c9a84c;">
                🎯 Event Preferences
              </p>
              <table width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;margin-bottom:28px;">
                <tr>
                  <td style="padding:9px 12px;background:#f7f8fa;border-bottom:1px solid #eaeaea;font-size:12px;color:#888;width:38%;">Attend As</td>
                  <td style="padding:9px 12px;background:#f7f8fa;border-bottom:1px solid #eaeaea;font-size:14px;color:#1a1a2e;font-weight:600;">${interests}</td>
                </tr>
                <tr>
                  <td style="padding:9px 12px;background:#fff;border-bottom:1px solid #eaeaea;font-size:12px;color:#888;">Award Nomination</td>
                  <td style="padding:9px 12px;background:#fff;border-bottom:1px solid #eaeaea;font-size:14px;color:#1a1a2e;">${awardNomination}</td>
                </tr>
                <tr>
                  <td style="padding:9px 12px;background:#f7f8fa;border-bottom:1px solid #eaeaea;font-size:12px;color:#888;">Share with Partners</td>
                  <td style="padding:9px 12px;background:#f7f8fa;border-bottom:1px solid #eaeaea;font-size:14px;">${badge(data.shareDetails)}</td>
                </tr>
                <tr>
                  <td style="padding:9px 12px;background:#fff;border-bottom:1px solid #eaeaea;font-size:12px;color:#888;">Receive Updates</td>
                  <td style="padding:9px 12px;background:#fff;border-bottom:1px solid #eaeaea;font-size:14px;">${badge(data.receiveUpdates)}</td>
                </tr>
              </table>

              <p style="margin:0 0 12px;font-size:10px;font-weight:700;letter-spacing:2.5px;text-transform:uppercase;color:#c9a84c;">
  📝 Message
</p>

<table width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;margin-bottom:28px;">
  <tr>
    <td style="padding:14px;background:#f7f8fa;border:1px solid #eaeaea;font-size:14px;color:#1a1a2e;line-height:1.7;">
      ${message}
    </td>
  </tr>
</table>

              <!-- WhatsApp Copy Block -->
              <p style="margin:0 0 12px;font-size:10px;font-weight:700;letter-spacing:2.5px;text-transform:uppercase;color:#25D366;">
                💬 WhatsApp Quick Share
              </p>
              <div style="background-color:#f0fdf4;border:1.5px solid #25D366;border-radius:6px;padding:18px 20px;">
                <p style="margin:0 0 10px;font-size:12px;color:#166534;font-weight:600;">Copy the text below and paste directly into WhatsApp:</p>
                <div style="background-color:#ffffff;border-radius:4px;padding:14px 16px;border:1px solid #d1fae5;">
                  <pre style="margin:0;font-family:monospace;font-size:13px;color:#1a1a2e;white-space:pre-wrap;line-height:1.7;">🏆 *CIO Leadership Summit 2026*
📋 *New Delegate Registration*
━━━━━━━━━━━━━━━━━━━
👤 *Name:* ${data.fullName}
📧 *Email:* ${data.email}
📱 *Phone:* ${data.phone}
🏢 *Company:* ${data.company}
💼 *Designation:* ${data.jobTitle}
🏭 *Industry:* ${data.industry}
━━━━━━━━━━━━━━━━━━━
🎯 *Attending As:* ${interests}
🏅 *Award:* ${awardNomination}
🔗 *LinkedIn:* ${linkedin}

📝 *Message:* ${message}
━━━━━━━━━━━━━━━━━━━
📅 *Registered:* ${registrationDate}
━━━━━━━━━━━━━━━━━━━
📅 *Registered:* ${registrationDate}</pre>
                </div>
              </div>

            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color:#0a0f1e;padding:20px 36px;">
              <p style="margin:0;font-size:11px;color:#555;line-height:1.6;">
                Automated admin notification · CIO Leadership Summit 2026 Registration System · ConfexMeet
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`
}

function getConfirmHtml(data: any, registrationDate: string) {
  const interests =
    data.interests?.length > 0
      ? data.interests.join(", ")
      : "Not Selected";

  return `
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Your registration has been received successfully</title>
</head>

<body style="margin:0;padding:0;background:#f5f7fa;font-family:Arial,sans-serif;">

<table width="100%" cellpadding="0" cellspacing="0">
<tr>
<td align="center" style="padding:40px 20px;">

<table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:8px;border:1px solid #e5e7eb;overflow:hidden;">

<tr>
<td style="background:#0f2d62;padding:35px;text-align:center;color:#fff;">
<h1 style="margin:0;">3rd Edition of
CIO Tech Leadership Conference & Awards
Delhi 2026</h1>
</td>
</tr>

<tr>
<td style="padding:35px;">

<p>Dear <strong>${data.fullName}</strong>,</p>

<p>
Thank you for registering for the
<strong>3rd Edition of
CIO Tech Leadership Conference & Awards
Delhi 2026</strong>.
</p>

<p>Your registration has been received successfully.</p>

<hr style="border:none;border-top:1px solid #eee;margin:30px 0;">

<h3 style="margin-bottom:15px;">Registration Details</h3>

<table width="100%" cellpadding="8">

<tr>
<td><strong>Name</strong></td>
<td>${data.fullName}</td>
</tr>

<tr>
<td><strong>Company</strong></td>
<td>${data.company}</td>
</tr>

<tr>
<td><strong>Designation</strong></td>
<td>${data.jobTitle}</td>
</tr>

<tr>
<td><strong>Attending As</strong></td>
<td>${interests}</td>
</tr>

<tr>
<td><strong>Registered On</strong></td>
<td>${registrationDate}</td>
</tr>

</table>

<hr style="border:none;border-top:1px solid #eee;margin:30px 0;">

<h3>Next Steps</h3>

<ul>
<li>Our team will review your registration.</li>
<li>You'll receive event updates shortly.</li>
<li>Venue: Delhi</li>
<li>Date: 12th November 2026</li>
</ul>

<p>
For any questions, contact us at
<a href="mailto:enquiry@confexmeet.com">
enquiry@confexmeet.com
</a>
<p> +91 7975 429 127 </p>
</p>

</td>
</tr>

<tr>
<td style="background:#0f2d62;color:#fff;text-align:center;padding:20px;font-size:13px;">

Regards,<br>

<strong>CIO Leadership Summit Team</strong>

<br><br>

<a href="https://www.ciotech.in"
style="color:#ffffff;">
www.ciotech.in
</a>

</td>
</tr>

</table>

</td>
</tr>
</table>

</body>
</html>
`;
}

export async function POST(req: Request) {
  try {
    const data = await req.json()

    // SAVE TO DATABASE
    await prisma.delegateRegistration.create({
      data: {
        fullName: data.fullName,
        jobTitle: data.jobTitle,
        company: data.company,
        industry: data.industry,

        email: data.email,
        phone: data.phone,

        linkedin: data.linkedin || null,
        message: data.message || null,

        interests: data.interests || [],

        awardNomination:
          data.awardNomination,

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

        registeredAt: data.registeredAt
          ? new Date(data.registeredAt)
          : new Date(),
      },
    })


   const transporter = nodemailer.createTransport({
  host: "smtp.zoho.in",
  port: 465,
  secure: true,

  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },

  connectionTimeout: 10000,
  greetingTimeout: 10000,
  socketTimeout: 10000,

  tls: {
    rejectUnauthorized: false,
  },
})

console.log("Verifying SMTP...")

await transporter.verify()

console.log("SMTP Connected")

    const registrationDate = new Date(data.registeredAt).toLocaleString(
  'en-IN',
  {
    timeZone: 'Asia/Kolkata',
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false,
  }
)
  
// console.time("Admin Email")
    // Admin Notification
    const adminMail = ({
      from: `"CIO Summit – Delegate Alerts" <${process.env.EMAIL_USER}>`,
      to: 'enquiry@confexmeet.com',
      subject: `🆕 New Delegate: ${data.fullName} – ${data.company}`,
      html: getAdminHtml(data, registrationDate),
    })

    // console.timeEnd("Admin Email")

    // console.time("Delegate Email")
    // Delegate Confirmation
   const delegateMail = {
  from: `"CIO Leadership Summit" <${process.env.EMAIL_USER}>`,
  to: data.email,
  subject: "Registration Received – CIO Leadership Summit 2026",
  html: getConfirmHtml(data, registrationDate),
}

console.log("Sending Emails...");

console.time("Emails");

await Promise.all([
  transporter.sendMail(adminMail),
  transporter.sendMail(delegateMail),
]);

console.timeEnd("Emails");

// console.timeEnd("Delegate Email")

console.log("Sending Admin Email...")

    return NextResponse.json({
      success: true,
      message: 'Delegate registration submitted successfully',
    })
  } catch (error) {
    console.error('Delegate Registration Error:', error)

    console.log("Sending Delegate Email...")
    return NextResponse.json(
      {
        success: false,
        message: 'Failed to submit registration',
      },
      { status: 500 }
    )
  }
}


export async function GET() {
  try {
    const delegates =
      await prisma.delegateRegistration.findMany({
        orderBy: {
          createdAt: 'desc',
        },
      })

    return NextResponse.json({
      success: true,
      data: delegates,
    })
  } catch (error) {
    console.error(error)

    return NextResponse.json(
      {
        success: false,
        message: 'Failed to fetch delegates',
      },
      { status: 500 }
    )
  }
}

export async function PATCH(req: Request) {
  try {
    const body = await req.json()

    const { id, status, notes } = body

    const delegate =
      await prisma.delegateRegistration.update({
        where: {
          id,
        },
        data: {
          ...(status && { status }),
          ...(notes !== undefined && {
            notes,
          }),
        },
      })

    return NextResponse.json({
      success: true,
      data: delegate,
    })
  } catch (error) {
    console.error(error)

    return NextResponse.json(
      {
        success: false,
        message:
          'Failed to update delegate',
      },
      {
        status: 500,
      }
    )
  }
}

export async function DELETE(req: Request) {
  try {
    const { id } = await req.json()

    await prisma.delegateRegistration.delete({
      where: {
        id,
      },
    })

    return NextResponse.json({
      success: true,
      message:
        'Delegate deleted successfully',
    })
  } catch (error) {
    console.error(error)

    return NextResponse.json(
      {
        success: false,
        message:
          'Failed to delete delegate',
      },
      {
        status: 500,
      }
    )
  }
}