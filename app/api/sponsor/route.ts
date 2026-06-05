
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

    // Admin Email

    await transporter.sendMail({
      from: `"CIO Leadership Summit" <${process.env.EMAIL_USER}>`,
      to: 'enquary@confexmeet.com, ramesh.confexmeet@gmail.com',
      subject: `New Sponsorship Enquiry - ${data.company}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 800px;">
          <h2>New Sponsorship Enquiry</h2>

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
                ${
                  data.linkedin ||
                  'Not Provided'
                }
              </td>
            </tr>

            <tr>
              <td style="padding:10px;font-weight:bold;">
                Sponsorship Objectives
              </td>
              <td style="padding:10px;">
                ${
                  data.objectives?.length
                    ? data.objectives.join(', ')
                    : 'Not Selected'
                }
              </td>
            </tr>

            <tr>
              <td style="padding:10px;font-weight:bold;">
                Sponsored B2B Events Before
              </td>
              <td style="padding:10px;">
                ${
                  data.sponsoredBefore ||
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

