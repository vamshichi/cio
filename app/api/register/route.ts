import { NextRequest, NextResponse } from 'next/server'

interface RegistrationData {
  name: string
  email: string
  company?: string
  jobTitle?: string
  message?: string
}

// Simple in-memory storage for demo (replace with database in production)
const registrations: RegistrationData[] = []

export async function POST(request: NextRequest) {
  try {
    const body: RegistrationData = await request.json()

    // Validation
    if (!body.name || !body.email) {
      return NextResponse.json(
        { error: 'Name and email are required' },
        { status: 400 }
      )
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      )
    }

    // Store registration (in production, this would go to a database)
    registrations.push(body)

    // Log for demo purposes
    console.log(`[Registration] New registration from: ${body.name} (${body.email})`)

    return NextResponse.json(
      {
        success: true,
        message: 'Registration successful! We will contact you soon.',
        registrationId: `REG-${Date.now()}`,
      },
      { status: 201 }
    )
  } catch (error) {
    console.error('Registration error:', error)
    return NextResponse.json(
      { error: 'Failed to process registration' },
      { status: 500 }
    )
  }
}

// GET endpoint to retrieve total registrations count (demo only)
export async function GET() {
  return NextResponse.json({
    totalRegistrations: registrations.length,
  })
}
