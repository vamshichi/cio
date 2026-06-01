import { NextRequest, NextResponse } from 'next/server'

interface NominationData {
  nominatorName: string
  nominatorEmail: string
  candidateName: string
  candidateTitle: string
  candidateCompany: string
  reason: string
  category: string
}

// Simple in-memory storage for demo (replace with database in production)
const nominations: NominationData[] = []

export async function POST(request: NextRequest) {
  try {
    const body: NominationData = await request.json()

    // Validation
    if (
      !body.nominatorName ||
      !body.nominatorEmail ||
      !body.candidateName ||
      !body.reason
    ) {
      return NextResponse.json(
        { error: 'Please fill in all required fields' },
        { status: 400 }
      )
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(body.nominatorEmail)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      )
    }

    // Store nomination (in production, this would go to a database)
    nominations.push(body)

    // Log for demo purposes
    console.log(
      `[Nomination] New nomination for: ${body.candidateName} by ${body.nominatorName}`
    )

    return NextResponse.json(
      {
        success: true,
        message: 'Thank you for your nomination! We appreciate your recognition of excellence in technology leadership.',
        nominationId: `NOM-${Date.now()}`,
      },
      { status: 201 }
    )
  } catch (error) {
    console.error('Nomination error:', error)
    return NextResponse.json(
      { error: 'Failed to process nomination' },
      { status: 500 }
    )
  }
}

// GET endpoint to retrieve total nominations count (demo only)
export async function GET() {
  return NextResponse.json({
    totalNominations: nominations.length,
  })
}
