import nodemailer from 'nodemailer'
import { NextResponse } from 'next/server'

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
  const interests = data.interests?.length ? data.interests.join(', ') : 'Not Selected'
  const message = data.message || 'No Message Provided'

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Registration Confirmation – CIO Leadership Summit 2026</title>
</head>
<body style="margin:0;padding:0;background-color:#0a0f1e;font-family:'Segoe UI',Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#0a0f1e;padding:40px 16px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" border="0" style="max-width:600px;width:100%;background-color:#ffffff;border-radius:4px;overflow:hidden;">

          <!-- Header -->
          <tr>
  <td style="background:linear-gradient(135deg,#0a0f1e 0%,#1a2a5e 60%,#c9a84c 100%);padding:48px 40px 40px;">
    
    <p style="margin:0 0 12px;font-size:11px;font-weight:600;letter-spacing:3px;text-transform:uppercase;color:#c9a84c;">
      CIO Leadership Summit 2026
    </p>

    <h1 style="margin:0 0 12px;font-size:28px;font-weight:700;color:#ffffff;line-height:1.2;letter-spacing:-0.3px;">
      Your Registration<br/>Is Confirmed
    </h1>

    <!-- Event Details -->
    <div style="
      display:inline-block;
      margin-top:8px;
      padding:10px 18px;
      border:1px solid rgba(255,255,255,0.2);
      border-radius:30px;
      background:rgba(255,255,255,0.08);
      color:#ffffff;
      font-size:13px;
      font-weight:500;
    ">
      📅 23 July 2026 &nbsp;&nbsp;•&nbsp;&nbsp; 📍 Four Seasons Bengaluru
    </div>

    <div style="width:48px;height:2px;background-color:#c9a84c;margin:24px 0 0;"></div>

  </td>
</tr>

          <!-- Body -->
          <tr>
            <td style="padding:40px 40px 32px;">
              <p style="margin:0 0 20px;font-size:16px;color:#1a1a2e;line-height:1.6;">
                Dear <strong>${data.fullName}</strong>,
              </p>
              <p style="margin:0 0 28px;font-size:15px;color:#444;line-height:1.75;">
                Thank you for registering for the <strong style="color:#1a1a2e;">CIO Leadership Summit 2026</strong>.
                We have received your submission and our team will be in touch shortly with participation
                details, agenda highlights, and your next steps.
              </p>

              <div style="border-top:1px solid #eaeaea;margin:0 0 28px;"></div>

              <p style="margin:0 0 14px;font-size:11px;font-weight:700;letter-spacing:2.5px;text-transform:uppercase;color:#c9a84c;">
                Registration Summary
              </p>
              <table width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;">
                <tr>
                  <td style="padding:10px 0;border-bottom:1px solid #f0f0f0;font-size:13px;color:#888;width:40%;">Name</td>
                  <td style="padding:10px 0;border-bottom:1px solid #f0f0f0;font-size:14px;color:#1a1a2e;font-weight:600;">${data.fullName}</td>
                </tr>
                <tr>
                  <td style="padding:10px 0;border-bottom:1px solid #f0f0f0;font-size:13px;color:#888;">Company</td>
                  <td style="padding:10px 0;border-bottom:1px solid #f0f0f0;font-size:14px;color:#1a1a2e;">${data.company}</td>
                </tr>
                <tr>
                  <td style="padding:10px 0;border-bottom:1px solid #f0f0f0;font-size:13px;color:#888;">Designation</td>
                  <td style="padding:10px 0;border-bottom:1px solid #f0f0f0;font-size:14px;color:#1a1a2e;">${data.jobTitle}</td>
                </tr>
                <tr>
                  <td style="padding:10px 0;border-bottom:1px solid #f0f0f0;font-size:13px;color:#888;">Attending As</td>
                  <td style="padding:10px 0;border-bottom:1px solid #f0f0f0;font-size:14px;color:#1a1a2e;">${interests}</td>
                </tr>
                <tr>
                  <td style="padding:10px 0;font-size:13px;color:#888;">Registered On</td>
                  <td style="padding:10px 0;font-size:14px;color:#1a1a2e;">${registrationDate}</td>
                </tr>
                <tr>
  <td style="padding:10px 0;border-bottom:1px solid #f0f0f0;font-size:13px;color:#888;">
    Message
  </td>
  <td style="padding:10px 0;border-bottom:1px solid #f0f0f0;font-size:14px;color:#1a1a2e;">
    ${message}
  </td>
</tr>
              </table>

              <div style="border-top:1px solid #eaeaea;margin:28px 0;"></div>

              <p style="margin:0 0 14px;font-size:11px;font-weight:700;letter-spacing:2.5px;text-transform:uppercase;color:#c9a84c;">
                What Happens Next
              </p>
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="padding:0 0 16px;">
                    <table cellpadding="0" cellspacing="0">
                      <tr>
                        <td style="width:32px;vertical-align:top;padding-top:1px;">
                          <div style="width:22px;height:22px;background-color:#1a2a5e;border-radius:50%;text-align:center;line-height:22px;font-size:11px;font-weight:700;color:#c9a84c;">1</div>
                        </td>
                        <td style="font-size:14px;color:#444;line-height:1.6;">
                          Our team will review your registration and reach out within <strong style="color:#1a1a2e;">2 business days</strong>.
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
                <tr>
                  <td style="padding:0 0 16px;">
                    <table cellpadding="0" cellspacing="0">
                      <tr>
                        <td style="width:32px;vertical-align:top;padding-top:1px;">
                          <div style="width:22px;height:22px;background-color:#1a2a5e;border-radius:50%;text-align:center;line-height:22px;font-size:11px;font-weight:700;color:#c9a84c;">2</div>
                        </td>
                        <td style="font-size:14px;color:#444;line-height:1.6;">
                          You'll receive the full <strong style="color:#1a1a2e;">event agenda, venue details</strong>, and logistics closer to the date.
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
                <tr>
                  <td>
                    <table cellpadding="0" cellspacing="0">
                      <tr>
                        <td style="width:32px;vertical-align:top;padding-top:1px;">
                          <div style="width:22px;height:22px;background-color:#1a2a5e;border-radius:50%;text-align:center;line-height:22px;font-size:11px;font-weight:700;color:#c9a84c;">3</div>
                        </td>
                        <td style="font-size:14px;color:#444;line-height:1.6;">
                          Questions in the meantime? Write to us at
                          <a href="mailto:enquiry@confexmeet.com" style="color:#1a2a5e;font-weight:600;text-decoration:none;">enquiry@confexmeet.com</a>.
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Sign-off -->
          <tr>
            <td style="background-color:#f7f5ef;padding:28px 40px;border-top:1px solid #eaeaea;">
              <p style="margin:0 0 4px;font-size:13px;font-weight:700;color:#1a1a2e;">
                We look forward to seeing you at the Summit.
              </p>
              <p style="margin:0;font-size:13px;color:#777;line-height:1.5;">
                Warm regards,<br/>
                <strong style="color:#1a1a2e;">CIO Leadership Summit Team</strong> · ConfexMeet
              </p>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color:#0a0f1e;padding:24px 40px;">
              <p style="margin:0;font-size:11px;color:#555;line-height:1.6;text-align:center;">
                This is an automated confirmation email. Please do not reply directly to this message.<br/>
                © 2026 ConfexMeet. All rights reserved.
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

    const registrationDate = new Date().toLocaleString('en-IN', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false,
    })

    // Admin Notification
    await transporter.sendMail({
      from: `"CIO Summit – Delegate Alerts" <${process.env.EMAIL_USER}>`,
      to: 'enquiry@confexmeet.com, ramesh.confexmeet@gmail.com',
      subject: `🆕 New Delegate: ${data.fullName} – ${data.company}`,
      html: getAdminHtml(data, registrationDate),
    })

    // Delegate Confirmation
    await transporter.sendMail({
      from: `"CIO Leadership Summit" <${process.env.EMAIL_USER}>`,
      to: data.email,
      subject: 'Registration Confirmed – CIO Leadership Summit 2026',
      html: getConfirmHtml(data, registrationDate),
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
      { status: 500 }
    )
  }
}