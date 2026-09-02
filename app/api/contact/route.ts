import { NextRequest, NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    const {
      name,
      company,
      designation,
      phone,
      email,
      type,
      note,
    } = body

    // Validate required fields
    if (
      !name ||
      !company ||
      !designation ||
      !phone ||
      !email ||
      !type
    ) {
      return NextResponse.json(
        {
          success: false,
          message: "Please fill in all required fields.",
        },
        { status: 400 }
      )
    }

    // Create Zoho SMTP transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtppro.zoho.in",
      port: Number(process.env.SMTP_PORT || 465),
      secure: true, // Port 465 = SSL
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    })

    // Verify SMTP connection
    await transporter.verify()

    console.log("✅ Zoho SMTP connection successful")

    const adminEmail =
      process.env.CONTACT_TO_EMAIL || process.env.EMAIL_USER

    /*
     * ---------------------------------------------------------
     * 1. SEND ENQUIRY TO ADMIN
     * ---------------------------------------------------------
     */

    console.log("📨 Sending enquiry email...")

    await transporter.sendMail({
      from: `"ConfexMeet Website" <${process.env.EMAIL_USER}>`,
      to: "enquiry@confexmeet.com , ramesh.confexmeet@gmail.com",
      replyTo: email,
      subject: `New ${type} enquiry from ${name}`,

      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          </head>

          <body style="margin:0;padding:0;background:#f4f7fb;font-family:Arial,Helvetica,sans-serif;">

            <div style="max-width:700px;margin:30px auto;background:#ffffff;border-radius:12px;overflow:hidden;border:1px solid #e5e7eb;">

              <!-- Header -->
              <div style="background:#07111f;padding:28px 30px;">
                <h1 style="margin:0;color:#00aeff;font-size:24px;">
                  New email Enquiry
                </h1>

                <p style="margin:8px 0 0;color:#b8c1cc;font-size:14px;">
                  ConfexMeet Contact Form
                </p>
              </div>

              <!-- Content -->
              <div style="padding:30px;">

                <h2 style="margin:0 0 20px;color:#111827;font-size:20px;">
                  Enquiry Details
                </h2>

                <table style="width:100%;border-collapse:collapse;">

                  <tr>
                    <td style="padding:12px 0;border-bottom:1px solid #e5e7eb;color:#6b7280;width:180px;">
                      Name
                    </td>
                    <td style="padding:12px 0;border-bottom:1px solid #e5e7eb;color:#111827;font-weight:600;">
                      ${escapeHtml(name)}
                    </td>
                  </tr>

                  <tr>
                    <td style="padding:12px 0;border-bottom:1px solid #e5e7eb;color:#6b7280;">
                      Company
                    </td>
                    <td style="padding:12px 0;border-bottom:1px solid #e5e7eb;color:#111827;font-weight:600;">
                      ${escapeHtml(company)}
                    </td>
                  </tr>

                  <tr>
                    <td style="padding:12px 0;border-bottom:1px solid #e5e7eb;color:#6b7280;">
                      Designation
                    </td>
                    <td style="padding:12px 0;border-bottom:1px solid #e5e7eb;color:#111827;font-weight:600;">
                      ${escapeHtml(designation)}
                    </td>
                  </tr>

                  <tr>
                    <td style="padding:12px 0;border-bottom:1px solid #e5e7eb;color:#6b7280;">
                      Phone
                    </td>
                    <td style="padding:12px 0;border-bottom:1px solid #e5e7eb;color:#111827;font-weight:600;">
                      ${escapeHtml(phone)}
                    </td>
                  </tr>

                  <tr>
                    <td style="padding:12px 0;border-bottom:1px solid #e5e7eb;color:#6b7280;">
                      Email
                    </td>
                    <td style="padding:12px 0;border-bottom:1px solid #e5e7eb;">
                      <a
                        href="mailto:${escapeHtml(email)}"
                        style="color:#008dcc;text-decoration:none;font-weight:600;"
                      >
                        ${escapeHtml(email)}
                      </a>
                    </td>
                  </tr>

                  <tr>
                    <td style="padding:12px 0;border-bottom:1px solid #e5e7eb;color:#6b7280;">
                      Interested As
                    </td>
                    <td style="padding:12px 0;border-bottom:1px solid #e5e7eb;color:#111827;font-weight:600;text-transform:capitalize;">
                      ${escapeHtml(type)}
                    </td>
                  </tr>

                </table>

                <!-- Note -->
                <div style="margin-top:25px;">
                  <h3 style="margin:0 0 10px;color:#111827;font-size:16px;">
                    Message / Note
                  </h3>

                  <div style="background:#f8fafc;border:1px solid #e5e7eb;border-radius:8px;padding:16px;color:#374151;line-height:1.6;white-space:pre-wrap;">
                    ${escapeHtml(note || "No note provided")}
                  </div>
                </div>

              </div>

              <!-- Footer -->
              <div style="background:#f8fafc;padding:18px 30px;border-top:1px solid #e5e7eb;">
                <p style="margin:0;color:#6b7280;font-size:12px;text-align:center;">
                  This enquiry was submitted through the ConfexMeet website.
                </p>
              </div>

            </div>

          </body>
        </html>
      `,
    })

    console.log("✅ Enquiry email sent successfully")

    /*
     * ---------------------------------------------------------
     * 2. SEND CONFIRMATION EMAIL TO USER
     * ---------------------------------------------------------
     *
     * IMPORTANT:
     * The confirmation email is wrapped separately so that
     * a Zoho sending restriction does not make the enquiry
     * itself fail.
     */

    try {
      console.log(`📨 Sending confirmation email to ${email}...`)

      await transporter.sendMail({
        from: `"ConfexMeet" <${process.env.EMAIL_USER}>`,
        to: email,
        subject: "Thank You for Contacting ConfexMeet",

        html: `
          <!DOCTYPE html>
          <html>
            <head>
              <meta charset="UTF-8" />
              <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </head>

            <body style="margin:0;padding:0;background:#f4f7fb;font-family:Arial,Helvetica,sans-serif;">

              <div style="max-width:650px;margin:30px auto;background:#ffffff;border-radius:12px;overflow:hidden;border:1px solid #e5e7eb;">

                <!-- Header -->
                <div style="background:#07111f;padding:30px;text-align:center;">
                  <h1 style="margin:0;color:#00aeff;font-size:26px;">
                    Thank You!
                  </h1>

                  <p style="margin:10px 0 0;color:#b8c1cc;">
                    ConfexMeet
                  </p>
                </div>

                <!-- Content -->
                <div style="padding:35px 30px;">

                  <p style="margin:0 0 18px;color:#111827;font-size:17px;">
                    Dear <strong>${escapeHtml(name)}</strong>,
                  </p>

                  <p style="margin:0 0 18px;color:#4b5563;line-height:1.7;">
                    Thank you for contacting ConfexMeet. We have successfully
                    received your enquiry.
                  </p>

                  <p style="margin:0 0 25px;color:#4b5563;line-height:1.7;">
                    Our team will review your request and get in touch with you
                    shortly.
                  </p>

                  <!-- Summary -->
                  <div style="background:#f8fafc;border:1px solid #e5e7eb;border-radius:10px;padding:20px;margin-bottom:25px;">

                    <h3 style="margin:0 0 15px;color:#111827;font-size:16px;">
                      Your Enquiry
                    </h3>

                    <p style="margin:7px 0;color:#4b5563;">
                      <strong>Company:</strong>
                      ${escapeHtml(company)}
                    </p>

                    <p style="margin:7px 0;color:#4b5563;">
                      <strong>Designation:</strong>
                      ${escapeHtml(designation)}
                    </p>

                    <p style="margin:7px 0;color:#4b5563;">
                      <strong>Interested As:</strong>
                      ${escapeHtml(type)}
                    </p>

                  </div>

                  <p style="margin:0;color:#4b5563;line-height:1.7;">
                    If you have any additional information to share, simply
                    reply to this email.
                  </p>

                  <p style="margin:25px 0 0;color:#111827;">
                    Best regards,<br />
                    <strong>ConfexMeet Team</strong>
                  </p>

                </div>

                <!-- Footer -->
                <div style="background:#f8fafc;padding:18px 30px;border-top:1px solid #e5e7eb;text-align:center;">
                  <p style="margin:0;color:#6b7280;font-size:12px;">
                    © ${new Date().getFullYear()} ConfexMeet. All rights reserved.
                  </p>
                </div>

              </div>

            </body>
          </html>
        `,
      })

      console.log("✅ Confirmation email sent successfully")
    } catch (confirmationError) {
      /*
       * Do NOT fail the form if confirmation email fails.
       * The admin enquiry has already been delivered.
       */
      console.error(
        "⚠️ Confirmation email failed:",
        confirmationError
      )
    }

    /*
     * ---------------------------------------------------------
     * SUCCESS
     * ---------------------------------------------------------
     */

    return NextResponse.json(
      {
        success: true,
        message: "Your enquiry has been submitted successfully.",
      },
      { status: 200 }
    )
  } catch (error) {
    console.error("❌ Contact form error:", error)

    return NextResponse.json(
      {
        success: false,
        message: "Unable to submit your enquiry. Please try again.",
      },
      { status: 500 }
    )
  }
}

/*
 * ---------------------------------------------------------
 * HTML ESCAPE FUNCTION
 * ---------------------------------------------------------
 */

function escapeHtml(value: unknown): string {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;")
}