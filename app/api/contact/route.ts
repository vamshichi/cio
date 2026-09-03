import { NextRequest, NextResponse } from "next/server"
import nodemailer from "nodemailer"

// IMPORTANT FOR NETLIFY / NEXT.JS
export const runtime = "nodejs"

export async function POST(request: NextRequest) {
  try {
    // ==========================================
    // READ REQUEST BODY
    // ==========================================

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

    // ==========================================
    // VALIDATE REQUIRED FIELDS
    // ==========================================

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

    // ==========================================
    // GET ENVIRONMENT VARIABLES
    // ==========================================

    const smtpHost = process.env.SMTP_HOST
    const smtpPort = Number(process.env.SMTP_PORT || 465)
    const emailUser = process.env.EMAIL_USER
    const emailPass = process.env.EMAIL_PASS

    // ==========================================
    // CHECK SMTP CONFIGURATION
    // ==========================================

    if (!smtpHost || !emailUser || !emailPass) {
      console.error("❌ Missing SMTP environment variables")

      console.error({
        SMTP_HOST: !!smtpHost,
        SMTP_PORT: smtpPort,
        EMAIL_USER: !!emailUser,
        EMAIL_PASS: !!emailPass,
      })

      return NextResponse.json(
        {
          success: false,
          message: "Email service is not configured.",
        },
        { status: 500 }
      )
    }

    // ==========================================
    // CREATE ZOHO SMTP TRANSPORTER
    // ==========================================

    const transporter = nodemailer.createTransport({
      host: smtpHost,

      port: smtpPort,

      secure: smtpPort === 465,

      auth: {
        user: emailUser,
        pass: emailPass,
      },

      connectionTimeout: 10000,
      greetingTimeout: 10000,
      socketTimeout: 15000,
    })

    // ==========================================
    // ADMIN EMAIL
    // ==========================================

    console.log("📨 Sending enquiry email...")

    await transporter.sendMail({
      from: `"ConfexMeet Website" <${emailUser}>`,

      to: [
        "enquiry@confexmeet.com",
      ],

      replyTo: email,

      subject: `New ${type} enquiry from ${name}`,

      // ========================================
      // PLAIN TEXT VERSION
      // EASY FOR ADMIN TO COPY
      // ========================================

      text: `
NEW CONFEXMEET ENQUIRY
======================

Name: ${name}
Company: ${company}
Designation: ${designation}
Phone: ${phone}
Email: ${email}
Interested As: ${type}

Message / Note:
${note || "No note provided"}

======================
Submitted through ConfexMeet website
`,

      // ========================================
      // HTML EMAIL
      // ========================================

      html: `
<!DOCTYPE html>

<html>

<head>

  <meta charset="UTF-8">

  <meta
    name="viewport"
    content="width=device-width, initial-scale=1.0"
  >

  <title>New ConfexMeet Enquiry</title>

</head>

<body
  style="
    margin:0;
    padding:0;
    background:#f4f7fb;
    font-family:Arial,Helvetica,sans-serif;
  "
>

  <div
    style="
      max-width:700px;
      margin:30px auto;
      background:#ffffff;
      border-radius:12px;
      overflow:hidden;
      border:1px solid #e5e7eb;
    "
  >

    <!-- ================================= -->
    <!-- HEADER -->
    <!-- ================================= -->

    <div
      style="
        background:#07111f;
        padding:30px;
      "
    >

      <h1
        style="
          margin:0;
          color:#ffffff;
          font-size:25px;
          line-height:1.3;
        "
      >
        New ConfexMeet Enquiry from contact page
      </h1>

      <p
        style="
          margin:8px 0 0;
          color:#b8c1cc;
          font-size:14px;
        "
      >
        Contact Form Submission
      </p>

    </div>


    <!-- ================================= -->
    <!-- CONTENT -->
    <!-- ================================= -->

    <div
      style="
        padding:30px;
      "
    >

      <h2
        style="
          margin:0 0 20px;
          color:#111827;
          font-size:20px;
        "
      >
        Enquiry Details
      </h2>


      <!-- ================================= -->
      <!-- DETAILS TABLE -->
      <!-- ================================= -->

      <table
        width="100%"
        cellpadding="0"
        cellspacing="0"
        style="
          width:100%;
          border-collapse:collapse;
        "
      >

        <!-- NAME -->

        <tr>

          <td
            style="
              padding:13px 0;
              border-bottom:1px solid #e5e7eb;
              color:#6b7280;
              width:180px;
              font-size:14px;
            "
          >
            Name
          </td>

          <td
            style="
              padding:13px 0;
              border-bottom:1px solid #e5e7eb;
              color:#111827;
              font-weight:600;
              font-size:14px;
            "
          >
            ${escapeHtml(name)}
          </td>

        </tr>


        <!-- COMPANY -->

        <tr>

          <td
            style="
              padding:13px 0;
              border-bottom:1px solid #e5e7eb;
              color:#6b7280;
              font-size:14px;
            "
          >
            Company
          </td>

          <td
            style="
              padding:13px 0;
              border-bottom:1px solid #e5e7eb;
              color:#111827;
              font-weight:600;
              font-size:14px;
            "
          >
            ${escapeHtml(company)}
          </td>

        </tr>


        <!-- DESIGNATION -->

        <tr>

          <td
            style="
              padding:13px 0;
              border-bottom:1px solid #e5e7eb;
              color:#6b7280;
              font-size:14px;
            "
          >
            Designation
          </td>

          <td
            style="
              padding:13px 0;
              border-bottom:1px solid #e5e7eb;
              color:#111827;
              font-weight:600;
              font-size:14px;
            "
          >
            ${escapeHtml(designation)}
          </td>

        </tr>


        <!-- PHONE -->

        <tr>

          <td
            style="
              padding:13px 0;
              border-bottom:1px solid #e5e7eb;
              color:#6b7280;
              font-size:14px;
            "
          >
            Phone
          </td>

          <td
            style="
              padding:13px 0;
              border-bottom:1px solid #e5e7eb;
              color:#111827;
              font-weight:600;
              font-size:14px;
            "
          >
            ${escapeHtml(phone)}
          </td>

        </tr>


        <!-- EMAIL -->

        <tr>

          <td
            style="
              padding:13px 0;
              border-bottom:1px solid #e5e7eb;
              color:#6b7280;
              font-size:14px;
            "
          >
            Email
          </td>

          <td
            style="
              padding:13px 0;
              border-bottom:1px solid #e5e7eb;
              font-size:14px;
            "
          >

            <a
              href="mailto:${escapeHtml(email)}"
              style="
                color:#008dcc;
                text-decoration:none;
                font-weight:600;
              "
            >
              ${escapeHtml(email)}
            </a>

          </td>

        </tr>


        <!-- INTERESTED AS -->

        <tr>

          <td
            style="
              padding:13px 0;
              border-bottom:1px solid #e5e7eb;
              color:#6b7280;
              font-size:14px;
            "
          >
            Interested As
          </td>

          <td
            style="
              padding:13px 0;
              border-bottom:1px solid #e5e7eb;
              color:#111827;
              font-weight:600;
              font-size:14px;
            "
          >
            ${escapeHtml(type)}
          </td>

        </tr>

      </table>


      <!-- ================================= -->
      <!-- MESSAGE -->
      <!-- ================================= -->

      <div
        style="
          margin-top:25px;
        "
      >

        <h3
          style="
            margin:0 0 10px;
            color:#111827;
            font-size:16px;
          "
        >
          Message / Note
        </h3>

        <div
          style="
            background:#f8fafc;
            border:1px solid #e5e7eb;
            border-radius:8px;
            padding:16px;
            color:#374151;
            line-height:1.6;
            font-size:14px;
            white-space:pre-wrap;
          "
        >
          ${escapeHtml(note || "No note provided")}
        </div>

      </div>


      <!-- ================================= -->
      <!-- QUICK COPY SECTION -->
      <!-- ================================= -->

      <div
        style="
          margin-top:25px;
          background:#07111f;
          border-radius:10px;
          padding:22px;
        "
      >

        <h3
          style="
            margin:0 0 15px;
            color:#ffffff;
            font-size:17px;
          "
        >
          Quick Copy Details
        </h3>

        <div
          style="
            color:#ffffff;
            font-size:14px;
            line-height:2;
          "
        >

          <strong>Name:</strong>
          ${escapeHtml(name)}
          <br>

          <strong>Company:</strong>
          ${escapeHtml(company)}
          <br>

          <strong>Designation:</strong>
          ${escapeHtml(designation)}
          <br>

          <strong>Phone:</strong>
          ${escapeHtml(phone)}
          <br>

          <strong>Email:</strong>
          ${escapeHtml(email)}
          <br>

          <strong>Interested As:</strong>
          ${escapeHtml(type)}

          <br>

          <strong>Message / Note:</strong>
          ${escapeHtml(note || "No note provided")}

        </div>

      </div>


      <!-- ================================= -->
      <!-- FOOTER NOTE -->
      <!-- ================================= -->

      <div
        style="
          margin-top:25px;
          padding:15px;
          background:#eff6ff;
          border:1px solid #dbeafe;
          border-radius:8px;
        "
      >

        <p
          style="
            margin:0;
            color:#1e40af;
            font-size:13px;
            line-height:1.5;
          "
        >
          <strong>Tip:</strong>
          You can copy the details from the
          "Quick Copy Details" section above.
          The email also includes a plain-text version
          for easy copying.
        </p>

      </div>

    </div>


    <!-- ================================= -->
    <!-- FOOTER -->
    <!-- ================================= -->

    <div
      style="
        background:#f8fafc;
        padding:18px 30px;
        border-top:1px solid #e5e7eb;
      "
    >

      <p
        style="
          margin:0;
          color:#6b7280;
          font-size:12px;
          text-align:center;
        "
      >
        This enquiry was submitted through the
        ConfexMeet website.
      </p>

    </div>

  </div>

</body>

</html>
`,
    })

    console.log("✅ Enquiry email sent successfully")


    // ==========================================
    // CONFIRMATION EMAIL TO USER
    // ==========================================

    try {
      console.log(
        `📨 Sending confirmation email to ${email}...`
      )

      await transporter.sendMail({
        from: `"ConfexMeet" <${emailUser}>`,

        to: email,

        subject: "Thank You for Contacting ConfexMeet",

        text: `
Dear ${name},

Thank you for contacting ConfexMeet.

We have successfully received your enquiry.

Our team will review your request and get in touch with you shortly.

Your Enquiry:

Company: ${company}
Designation: ${designation}
Interested As: ${type}

If you have any additional information to share, simply reply to this email.

Best regards,
ConfexMeet Team
`,

        html: `
<!DOCTYPE html>

<html>

<head>

  <meta charset="UTF-8">

  <meta
    name="viewport"
    content="width=device-width, initial-scale=1.0"
  >

  <title>Thank You</title>

</head>

<body
  style="
    margin:0;
    padding:0;
    background:#f4f7fb;
    font-family:Arial,Helvetica,sans-serif;
  "
>

  <div
    style="
      max-width:650px;
      margin:30px auto;
      background:#ffffff;
      border-radius:12px;
      overflow:hidden;
      border:1px solid #e5e7eb;
    "
  >

    <!-- HEADER -->

    <div
      style="
        background:#07111f;
        padding:30px;
        text-align:center;
      "
    >

      <h1
        style="
          margin:0;
          color:#ffffff;
          font-size:26px;
        "
      >
        Thank You!
      </h1>

      <p
        style="
          margin:10px 0 0;
          color:#b8c1cc;
        "
      >
        ConfexMeet
      </p>

    </div>


    <!-- CONTENT -->

    <div
      style="
        padding:35px 30px;
      "
    >

      <p
        style="
          margin:0 0 18px;
          color:#111827;
          font-size:17px;
        "
      >
        Dear
        <strong>
          ${escapeHtml(name)}
        </strong>,
      </p>


      <p
        style="
          margin:0 0 18px;
          color:#4b5563;
          line-height:1.7;
        "
      >
        Thank you for contacting ConfexMeet.
        We have successfully received your enquiry.
      </p>


      <p
        style="
          margin:0 0 25px;
          color:#4b5563;
          line-height:1.7;
        "
      >
        Our team will review your request and
        get in touch with you shortly.
      </p>


      <!-- SUMMARY -->

      <div
        style="
          background:#f8fafc;
          border:1px solid #e5e7eb;
          border-radius:10px;
          padding:20px;
          margin-bottom:25px;
        "
      >

        <h3
          style="
            margin:0 0 15px;
            color:#111827;
            font-size:16px;
          "
        >
          Your Enquiry
        </h3>


        <p
          style="
            margin:7px 0;
            color:#4b5563;
          "
        >
          <strong>
            Company:
          </strong>

          ${escapeHtml(company)}
        </p>


        <p
          style="
            margin:7px 0;
            color:#4b5563;
          "
        >
          <strong>
            Designation:
          </strong>

          ${escapeHtml(designation)}
        </p>


        <p
          style="
            margin:7px 0;
            color:#4b5563;
          "
        >
          <strong>
            Interested As:
          </strong>

          ${escapeHtml(type)}
        </p>

      </div>


      <p
        style="
          margin:0;
          color:#4b5563;
          line-height:1.7;
        "
      >
        If you have any additional information to share,
        simply reply to this email.
      </p>


      <p
        style="
          margin:25px 0 0;
          color:#111827;
        "
      >
        Best regards,<br>

        <strong>
          ConfexMeet Team
        </strong>
      </p>

    </div>


    <!-- FOOTER -->

    <div
      style="
        background:#f8fafc;
        padding:18px 30px;
        border-top:1px solid #e5e7eb;
        text-align:center;
      "
    >

      <p
        style="
          margin:0;
          color:#6b7280;
          font-size:12px;
        "
      >
        © ${new Date().getFullYear()}
        ConfexMeet. All rights reserved.
      </p>

    </div>

  </div>

</body>

</html>
`,
      })

      console.log(
        "✅ Confirmation email sent successfully"
      )

    } catch (confirmationError) {

      console.error(
        "⚠️ Confirmation email failed:",
        confirmationError
      )

      // IMPORTANT:
      // Do not fail the enquiry if confirmation fails.
    }


    // ==========================================
    // SUCCESS RESPONSE
    // ==========================================

    return NextResponse.json(
      {
        success: true,
        message:
          "Your enquiry has been submitted successfully.",
      },
      { status: 200 }
    )

  } catch (error) {

    // ==========================================
    // GLOBAL ERROR
    // ==========================================

    console.error(
      "❌ Contact form error:",
      error
    )

    return NextResponse.json(
      {
        success: false,
        message:
          "Unable to submit your enquiry. Please try again.",
      },
      { status: 500 }
    )
  }
}


// ==========================================
// HTML ESCAPE FUNCTION
// ==========================================

function escapeHtml(value: unknown): string {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;")
}