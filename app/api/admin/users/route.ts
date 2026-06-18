import { NextRequest, NextResponse } from 'next/server'
import bcrypt from 'bcryptjs'
import {prisma} from '@/lib/prisma'

/**
 * GET ALL USERS
 */
export async function GET() {
  try {
    const users = await prisma.adminUser.findMany({
      orderBy: {
        createdAt: 'desc',
      },
      select: {
        id: true,
        username: true,
        role: true,
        permissions: true,
        createdAt: true,
      },
    })

    return NextResponse.json(users)
  } catch (error) {
    console.error(error)

    return NextResponse.json(
      {
        error: 'Failed to fetch users',
      },
      {
        status: 500,
      }
    )
  }
}

/**
 * CREATE USER
 */
export async function POST(req: NextRequest) {
  try {
    const body = await req.json()

    const {
      username,
      password,
      role,
      permissions,
    } = body

    if (!username || !password) {
      return NextResponse.json(
        {
          error: 'Username and password are required',
        },
        {
          status: 400,
        }
      )
    }

    const existingUser =
      await prisma.adminUser.findUnique({
        where: {
          username,
        },
      })

    if (existingUser) {
      return NextResponse.json(
        {
          error: 'Username already exists',
        },
        {
          status: 400,
        }
      )
    }

    const passwordHash =
      await bcrypt.hash(password, 10)

    const user =
      await prisma.adminUser.create({
        data: {
          username,
          passwordHash,
          role: role || 'ADMIN',
          permissions:
            role === 'SUPER_ADMIN'
              ? []
              : permissions || [],
        },
      })

    return NextResponse.json({
      success: true,
      message: 'User created successfully',
      user: {
        id: user.id,
        username: user.username,
        role: user.role,
      },
    })
  } catch (error) {
    console.error(error)

    return NextResponse.json(
      {
        error: 'Failed to create user',
      },
      {
        status: 500,
      }
    )
  }
}