import { NextRequest, NextResponse } from 'next/server'
import { SignJWT, jwtVerify } from 'jose'
import bcrypt from 'bcryptjs'
import {prisma} from '@/lib/prisma'

const SECRET = new TextEncoder().encode(
  process.env.JWT_SECRET ??
    'change-this-to-a-random-32-char-secret!!'
)

const COOKIE_NAME = 'admin_token'

const COOKIE_OPTS = {
  httpOnly: true,
  secure: process.env.NODE_ENV === 'production',
  sameSite: 'lax' as const,
  path: '/',
  maxAge: 60 * 60 * 8, // 8 hours
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()

    const {
      action,
      username,
      password,
    } = body

    /**
     * LOGOUT
     */
    if (action === 'logout') {
      const res = NextResponse.json({
        success: true,
      })

      res.cookies.set(COOKIE_NAME, '', {
        ...COOKIE_OPTS,
        maxAge: 0,
      })

      return res
    }

    /**
     * LOGIN
     */
    if (action === 'login') {
      if (!username || !password) {
        return NextResponse.json(
          {
            error:
              'Username and password are required',
          },
          {
            status: 400,
          }
        )
      }

      const user =
        await prisma.adminUser.findUnique({
          where: {
            username,
          },
        })

      if (!user) {
        return NextResponse.json(
          {
            error: 'Invalid credentials',
          },
          {
            status: 401,
          }
        )
      }

      const validPassword =
        await bcrypt.compare(
          password,
          user.passwordHash
        )

      if (!validPassword) {
        return NextResponse.json(
          {
            error: 'Invalid credentials',
          },
          {
            status: 401,
          }
        )
      }

      const token = await new SignJWT({
        userId: user.id,
        username: user.username,
        role: user.role,
        permissions: user.permissions,
      })
        .setProtectedHeader({
          alg: 'HS256',
        })
        .setIssuedAt()
        .setExpirationTime('8h')
        .sign(SECRET)

      const res = NextResponse.json({
        success: true,
        user: {
          id: user.id,
          username: user.username,
          role: user.role,
          permissions:
            user.permissions,
        },
      })

      res.cookies.set(
        COOKIE_NAME,
        token,
        COOKIE_OPTS
      )

      return res
    }

    return NextResponse.json(
      {
        error: 'Unknown action',
      },
      {
        status: 400,
      }
    )
  } catch (error) {
    console.error(error)

    return NextResponse.json(
      {
        error: 'Something went wrong',
      },
      {
        status: 500,
      }
    )
  }
}

export async function GET(
  req: NextRequest
) {
  try {
    const token =
      req.cookies.get(COOKIE_NAME)?.value

    if (!token) {
      return NextResponse.json(
        {
          authenticated: false,
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
          payload.permissions,
      },
    })
  } catch {
    return NextResponse.json(
      {
        authenticated: false,
      },
      {
        status: 401,
      }
    )
  }
}