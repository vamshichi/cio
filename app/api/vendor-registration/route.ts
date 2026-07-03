import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();

    const fullName = formData.get("fullName")?.toString() || "";
    const jobTitle = formData.get("jobTitle")?.toString() || "";
    const company = formData.get("company")?.toString() || "";
    const email = formData.get("email")?.toString() || "";
    const phone = formData.get("phone")?.toString() || "";
    const linkedin = formData.get("linkedin")?.toString() || "";
    const objectives = formData.get("objectives")?.toString() || "";
    const meeting = formData.get("meeting")?.toString() || "";
    const requirements = formData.get("requirements")?.toString() || "";

    const transactionId =
      formData.get("transactionId")?.toString() || "";

    const screenshot = formData.get("proof") as File | null;
    const paymentStatus = formData.get("paymentStatus")?.toString() || "pending";   

    if (
      !fullName ||
      !jobTitle ||
      !company ||
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

    if (paymentStatus === "paid" && !transactionId && !screenshot) {
  return NextResponse.json(
    {
      success: false,
      message:
        "Please provide Transaction ID or Payment Screenshot.",
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

    const attachments = [];

    if (screenshot) {
      const bytes = await screenshot.arrayBuffer();

      attachments.push({
        filename: screenshot.name,
        content: Buffer.from(bytes),
      });
    }
    await transporter.verify();
console.log("SMTP connection successful");

    await transporter.sendMail({
      from: `"Confex Meet" <${process.env.EMAIL_USER}>`,

      to: [
        "ramesh@confexmeet.com",
        "ashwini@confexmeet.com",
      ],

      subject: `New Vendor Delegate Registration - ${fullName}`,

      html: `
      <div style="font-family:Arial;padding:20px">

      <h2>New Vendor Delegate Registration</h2>

      <table border="1" cellpadding="8" cellspacing="0" style="border-collapse:collapse">

      <tr>
      <td><strong>Full Name</strong></td>
      <td>${fullName}</td>
      </tr>

      <tr>
      <td><strong>Job Title</strong></td>
      <td>${jobTitle}</td>
      </tr>

      <tr>
      <td><strong>Company</strong></td>
      <td>${company}</td>
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
      <td><strong>LinkedIn</strong></td>
      <td>${linkedin}</td>
      </tr>

      <tr>
      <td><strong>Business Objectives</strong></td>
      <td>${objectives}</td>
      </tr>

      <tr>
      <td><strong>One-to-One Meeting</strong></td>
      <td>${meeting}</td>
      </tr>

      <tr>
      <td><strong>Additional Requirements</strong></td>
      <td>${requirements}</td>
      </tr>

      <tr>
      <td><strong>Transaction ID</strong></td>
      <td>${transactionId || "Not Provided"}</td>
      </tr>

      <tr>
<td><strong>Payment Status</strong></td>
<td>${paymentStatus === "paid" ? "Paid" : "Pay Later (Pending)"}</td>
</tr>

      <tr>
      <td><strong>Payment Screenshot</strong></td>
      <td>${screenshot ? "Attached" : "Not Uploaded"}</td>
      </tr>

      </table>

      </div>
      `,

      attachments,
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
        message: "Internal Server Error",
      },
      {
        status: 500,
      }
    );
  }
}