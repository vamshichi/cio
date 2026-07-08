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
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const html = `
      <div style="font-family:Arial;padding:30px">
        <h2 style="color:#0ea5e9">
          New  Velocity 360° Registration
        </h2>

        <table cellpadding="10" cellspacing="0" border="1" style="border-collapse:collapse;width:100%">
          <tr>
            <td><b>Full Name</b></td>
            <td>${fullName}</td>
          </tr>

          <tr>
            <td><b>Company</b></td>
            <td>${companyName}</td>
          </tr>

          <tr>
            <td><b>Designation</b></td>
            <td>${designation}</td>
          </tr>

          <tr>
            <td><b>Email</b></td>
            <td>${email}</td>
          </tr>

          <tr>
            <td><b>Phone</b></td>
            <td>${phone}</td>
          </tr>

          <tr>
            <td><b>Website</b></td>
            <td>${website || "-"}</td>
          </tr>

          <tr>
            <td><b>Industry</b></td>
            <td>${industry || "-"}</td>
          </tr>

          <tr>
            <td><b>Company Size</b></td>
            <td>${companySize || "-"}</td>
          </tr>

          <tr>
            <td><b>Message</b></td>
            <td>${message || "-"}</td>
          </tr>

          <tr>
            <td><b>Partner Type</b></td>
            <td>Presenting Partner</td>
          </tr>
        </table>
      </div>
    `;

    await transporter.sendMail({
      from: `"Velocity 360" <${process.env.SMTP_USER}>`,
      to: 'enquiry@confexmeet.com, ramesh.confexmeet@gmail.com',
      subject: "New  Velocity 360° Registration",
      html,
    });

    return NextResponse.json({
      success: true,
      message: "Registration submitted successfully.",
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong.",
      },
      { status: 500 }
    );
  }
}