import { NextRequest, NextResponse } from 'next/server'
import { jwtVerify } from 'jose'

const SECRET = new TextEncoder().encode(
  process.env.JWT_SECRET ??
    'change-this-to-a-random-32-char-secret!!'
)

const COOKIE_NAME = 'admin_token'

export async function middleware(
  req: NextRequest
) {
  const { pathname } = req.nextUrl

  // Public Routes
  if (
  pathname.startsWith("/admin/login") ||
  pathname.startsWith("/api/admin/auth") ||
  pathname === "/api/admin/users"
) {
  return NextResponse.next();
}

  // Protected Routes
  if (
    pathname.startsWith('/admin') ||
    pathname.startsWith('/api/admin')
  ) {
    const token =
      req.cookies.get(COOKIE_NAME)?.value

    if (!token) {
      if (pathname.startsWith('/api/')) {
        return NextResponse.json(
          { error: 'Unauthorized' },
          { status: 401 }
        )
      }

      return NextResponse.redirect(
        new URL('/admin/login', req.url)
      )
    }

    try {
      const { payload } = await jwtVerify(
        token,
        SECRET
      )

      const role = payload.role as string

      const permissions =
        (payload.permissions as string[]) || []

      // SUPER ADMIN CAN ACCESS EVERYTHING
      if (role === 'SUPER_ADMIN') {
        return NextResponse.next()
      }

      // USERS PAGE
      if (
        pathname.startsWith('/admin/users')
      ) {
        return NextResponse.redirect(
          new URL(
            '/admin/unauthorized',
            req.url
          )
        )
      }

      // CONTACTS
      if (
        pathname.startsWith(
          '/admin/contacts'
        ) &&
        !permissions.includes('contacts')
      ) {
        return NextResponse.redirect(
          new URL(
            '/admin/unauthorized',
            req.url
          )
        )
      }

      // DELEGATES
      if (
        pathname.startsWith(
          '/admin/delegates'
        ) &&
        !permissions.includes(
          'delegates'
        )
      ) {
        return NextResponse.redirect(
          new URL(
            '/admin/unauthorized',
            req.url
          )
        )
      }

      // SPONSORS
      if (
        pathname.startsWith(
          '/admin/sponsors'
        ) &&
        !permissions.includes(
          'sponsors'
        )
      ) {
        return NextResponse.redirect(
          new URL(
            '/admin/unauthorized',
            req.url
          )
        )
      }

      // NOMINATIONS
      if (
        pathname.startsWith(
          '/admin/nominations'
        ) &&
        !permissions.includes(
          'nominations'
        )
      ) {
        return NextResponse.redirect(
          new URL(
            '/admin/unauthorized',
            req.url
          )
        )
      }

      // MEDIA
      if (
        pathname.startsWith('/admin/media') &&
        !permissions.includes('media')
      ) {
        return NextResponse.redirect(
          new URL(
            '/admin/unauthorized',
            req.url
          )
        )
      }

      return NextResponse.next()
    } catch (error) {
      console.error(error)

      if (pathname.startsWith('/api/')) {
        return NextResponse.json(
          { error: 'Session expired' },
          { status: 401 }
        )
      }

      return NextResponse.redirect(
        new URL('/admin/login', req.url)
      )
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    '/admin/:path*',
    '/api/admin/:path*',
  ],
}