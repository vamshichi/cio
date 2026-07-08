import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const {
      fullName,
      companyName,
      designation,
      email,
      phone,
      website,
      industry,
      companySize,
      message,
    } = body;

    if (
      !fullName ||
      !companyName ||
      !designation ||
      !email ||
      !phone
    ) {
      return NextResponse.json(
        {
          success: false,
          message: "Please fill all required fields.",
        },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Verify SMTP Connection
    await transporter.verify();

    console.log("✅ SMTP Connected Successfully");

    // Send notification to ConfexMeet Team
    await transporter.sendMail({
      from: `"Velocity 360°" <${process.env.EMAIL_USER}>`,
      to: "enquiry@confexmeet.com,ramesh.confexmeet@gmail.com",
      subject: "New Velocity 360° Presenting Partner Registration",

      html: `
      <div style="font-family:Arial,sans-serif;padding:30px;background:#f8fafc;">

      <h2 style="color:#0ea5e9;margin-bottom:25px;">
      New Presenting Partner Registration
      </h2>

      <table
      cellpadding="12"
      cellspacing="0"
      border="1"
      style="
      border-collapse:collapse;
      width:100%;
      border-color:#e2e8f0;
      background:#ffffff;
      ">

      <tr>
      <td width="220"><strong>Full Name</strong></td>
      <td>${fullName}</td>
      </tr>

      <tr>
      <td><strong>Company Name</strong></td>
      <td>${companyName}</td>
      </tr>

      <tr>
      <td><strong>Designation</strong></td>
      <td>${designation}</td>
      </tr>

      <tr>
      <td><strong>Email</strong></td>
      <td>${email}</td>
      </tr>

      <tr>
      <td><strong>Phone</strong></td>
      <td>${phone}</td>
      </tr>

      <tr>
      <td><strong>Website</strong></td>
      <td>${website || "-"}</td>
      </tr>

      <tr>
      <td><strong>Industry</strong></td>
      <td>${industry || "-"}</td>
      </tr>

      <tr>
      <td><strong>Company Size</strong></td>
      <td>${companySize || "-"}</td>
      </tr>

      <tr>
      <td><strong>Message</strong></td>
      <td>${message || "-"}</td>
      </tr>

      <tr>
      <td><strong>Partner Type</strong></td>
      <td>Presenting Partner</td>
      </tr>

      </table>
      </div>
      `,
    });

        // Send confirmation email to the registrant
    await transporter.sendMail({
      from: `"Velocity 360°" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "Thank You for Registering | Velocity 360° Executive Roundtable",

      html: `
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Velocity 360° Registration</title>
</head>

<body style="margin:0;padding:0;background:#f5f7fb;font-family:Arial,Helvetica,sans-serif;">

<table width="100%" cellpadding="0" cellspacing="0" style="padding:40px 0;background:#f5f7fb;">
<tr>
<td align="center">

<table
width="650"
cellpadding="0"
cellspacing="0"
style="background:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 10px 30px rgba(0,0,0,.08);"
>

<tr>
<td
style="
background:linear-gradient(135deg,#04162d,#0b2347);
padding:40px;
text-align:center;
">

<img
src="https://www.ciotech.in/sponsors/np3.png"
width="220"
alt="Centric Software"
/>

<h1
style="
margin:30px 0 10px;
color:#ffffff;
font-size:38px;
font-weight:bold;
"
>
VELOCITY
<span style="color:#22d3ee;">360°</span>
</h1>

<p
style="
margin:0;
color:#cbd5e1;
font-size:18px;
"
>
Executive Roundtable
</p>

</td>
</tr>

<tr>
<td style="padding:45px;">

<h2 style="margin-top:0;color:#0f172a;">
Hello ${fullName},
</h2>

<p
style="
font-size:16px;
line-height:1.8;
color:#475569;
">
Thank you for registering your interest in becoming the
<strong>Presenting Partner</strong>
for the
<strong>Velocity 360° Executive Roundtable.</strong>
</p>

<p
style="
font-size:16px;
line-height:1.8;
color:#475569;
">
We have successfully received your registration.
Our team will review your request and reach out shortly.
</p>

<h3
style="
margin-top:35px;
color:#0ea5e9;
">
Your Registration Details
</h3>

<table
width="100%"
cellpadding="10"
style="
border-collapse:collapse;
border:1px solid #e2e8f0;
">

<tr>
<td width="180"><strong>Company</strong></td>
<td>${companyName}</td>
</tr>

<tr>
<td><strong>Designation</strong></td>
<td>${designation}</td>
</tr>

<tr>
<td><strong>Email</strong></td>
<td>${email}</td>
</tr>

<tr>
<td><strong>Phone</strong></td>
<td>${phone}</td>
</tr>

<tr>
<td><strong>Industry</strong></td>
<td>${industry || "-"}</td>
</tr>

<tr>
<td><strong>Company Size</strong></td>
<td>${companySize || "-"}</td>
</tr>

</table>

<div style="text-align:center;margin:45px 0;">

<a
href="https://www.ciotech.in"
style="
display:inline-block;
padding:16px 34px;
background:#0ea5e9;
color:#ffffff;
text-decoration:none;
border-radius:8px;
font-weight:bold;
"
>
Visit Event Website
</a>

</div>

<p
style="
font-size:15px;
line-height:1.8;
color:#64748b;
">
If you have any questions, feel free to reply to this email or contact our team.
</p>

<p
style="
margin-top:40px;
font-size:16px;
line-height:1.8;
color:#0f172a;
">

Regards,<br>

<strong>Velocity 360° Executive Roundtable Team</strong><br>

ConfexMeet

</p>

</td>
</tr>

<tr>
<td
style="
background:#04162d;
padding:25px;
text-align:center;
color:#cbd5e1;
font-size:13px;
">

© ${new Date().getFullYear()} Velocity 360° Executive Roundtable

<br><br>

Organized by <strong>ConfexMeet</strong>

</td>
</tr>

</table>

</td>
</tr>
</table>

</body>
</html>
`,
    });

    return NextResponse.json({
      success: true,
      message: "Registration submitted successfully.",
    });

  } catch (error) {
    console.error("Partner Registration Error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Unable to submit registration. Please try again later.",
      },
      {
        status: 500,
      }
    );
  }
}