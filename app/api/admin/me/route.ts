import { NextRequest, NextResponse } from 'next/server'
import { jwtVerify } from 'jose'

const SECRET = new TextEncoder().encode(
  process.env.JWT_SECRET ??
    'change-this-to-a-random-32-char-secret!!'
)

const COOKIE_NAME = 'admin_token'

export async function GET(
  req: NextRequest
) {
  try {
    const token =
      req.cookies.get(COOKIE_NAME)?.value

    if (!token) {
      return NextResponse.json(
        {
          error: 'Unauthorized',
        },
        {
          status: 401,
        }
      )
    }

    const { payload } =
      await jwtVerify(token, SECRET)

    return NextResponse.json({
      authenticated: true,

      user: {
        id: payload.userId,
        username:
          payload.username,
        role: payload.role,
        permissions:
          payload.permissions || [],
      },
    })
  } catch (error) {
    console.error(error)

    return NextResponse.json(
      {
        error: 'Unauthorized',
      },
      {
        status: 401,
      }
    )
  }
}