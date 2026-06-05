
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
      from: `"CIO Leadership Summit-Delegate" <${process.env.EMAIL_USER}>`,
      to: 'enquary@confexmeet.com, ramesh.confexmeet@gmail.com',
      subject: `New Delegate Registration - ${data.fullName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 800px;">
          <h2>New Delegate Registration</h2>

          <table
            style="
              width:100%;
              border-collapse:collapse;
              border:1px solid #ddd;
            "
          >
            <tr>
              <td style="padding:10px;font-weight:bold;">
                Full Name
              </td>
              <td style="padding:10px;">
                ${data.fullName}
              </td>
            </tr>

            <tr>
              <td style="padding:10px;font-weight:bold;">
                Job Title
              </td>
              <td style="padding:10px;">
                ${data.jobTitle}
              </td>
            </tr>

            <tr>
              <td style="padding:10px;font-weight:bold;">
                Company
              </td>
              <td style="padding:10px;">
                ${data.company}
              </td>
            </tr>

            <tr>
              <td style="padding:10px;font-weight:bold;">
                Work Email
              </td>
              <td style="padding:10px;">
                ${data.email}
              </td>
            </tr>

            <tr>
              <td style="padding:10px;font-weight:bold;">
                Mobile Number
              </td>
              <td style="padding:10px;">
                ${data.phone}
              </td>
            </tr>

            <tr>
              <td style="padding:10px;font-weight:bold;">
                LinkedIn Profile
              </td>
              <td style="padding:10px;">
                ${data.linkedin || 'Not Provided'}
              </td>
            </tr>

            <tr>
              <td style="padding:10px;font-weight:bold;">
                Areas of Interest
              </td>
              <td style="padding:10px;">
                ${
                  data.interests?.length
                    ? data.interests.join(', ')
                    : 'Not Selected'
                }
              </td>
            </tr>

            <tr>
              <td style="padding:10px;font-weight:bold;">
                Award Nomination
              </td>
              <td style="padding:10px;">
                ${
                  data.awardNomination ||
                  'Not Selected'
                }
              </td>
            </tr>

            <tr>
              <td style="padding:10px;font-weight:bold;">
                Share Details With Partners
              </td>
              <td style="padding:10px;">
                ${
                  data.shareDetails
                    ? 'Yes'
                    : 'No'
                }
              </td>
            </tr>

            <tr>
              <td style="padding:10px;font-weight:bold;">
                Receive Event Updates
              </td>
              <td style="padding:10px;">
                ${
                  data.receiveUpdates
                    ? 'Yes'
                    : 'No'
                }
              </td>
            </tr>
          </table>
        </div>
      `,
    })

    // Auto Reply Email

    await transporter.sendMail({
      from: `"CIO Leadership Summit" <${process.env.EMAIL_USER}>`,
      to: data.email,
      subject:
        'Registration Confirmation - CIO Leadership Summit 2026',
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.7;">
          <h2>
            Thank You for Registering
          </h2>

          <p>
            Dear ${data.fullName},
          </p>

          <p>
            Thank you for registering for the
            <strong>
              CIO Leadership Summit 2026
            </strong>.
          </p>

          <p>
            Your delegate registration has been
            successfully received.
          </p>

          <p>
            Our team will review your submission
            and contact you with participation
            details, event updates, and next
            steps.
          </p>

          <br/>

          <p>
            Regards,<br/>
            CIO Leadership Summit Team
          </p>
        </div>
      `,
    })

    return NextResponse.json({
      success: true,
      message:
        'Delegate registration submitted successfully',
    })
  } catch (error) {
    console.error(
      'Delegate Registration Error:',
      error
    )

    return NextResponse.json(
      {
        success: false,
        message:
          'Failed to submit registration',
      },
      {
        status: 500,
      }
    )
  }
}

