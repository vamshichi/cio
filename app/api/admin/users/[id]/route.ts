import { NextRequest, NextResponse } from 'next/server'
import bcrypt from 'bcryptjs'
import {prisma} from '@/lib/prisma'

interface RouteContext {
  params: Promise<{
    id: string
  }>
}

/**
 * GET SINGLE USER
 */
export async function GET(
  req: NextRequest,
  { params }: RouteContext
) {
  try {
    const { id } = await params

    const user = await prisma.adminUser.findUnique({
      where: {
        id,
      },
      select: {
        id: true,
        username: true,
        role: true,
        permissions: true,
        createdAt: true,
      },
    })

    if (!user) {
      return NextResponse.json(
        {
          error: 'User not found',
        },
        {
          status: 404,
        }
      )
    }

    return NextResponse.json(user)
  } catch (error) {
    console.error(error)

    return NextResponse.json(
      {
        error: 'Failed to fetch user',
      },
      {
        status: 500,
      }
    )
  }
}

/**
 * UPDATE USER
 */
export async function PUT(
  req: NextRequest,
  { params }: RouteContext
) {
  try {
    const { id } = await params

    const body = await req.json()

    const {
      username,
      password,
      role,
      permissions,
    } = body

    const existingUser =
      await prisma.adminUser.findUnique({
        where: {
          id,
        },
      })

    if (!existingUser) {
      return NextResponse.json(
        {
          error: 'User not found',
        },
        {
          status: 404,
        }
      )
    }

    const updateData: any = {
      username,
      role,
      permissions:
        role === 'SUPER_ADMIN'
          ? []
          : permissions || [],
    }

    if (
      password &&
      password.trim().length > 0
    ) {
      updateData.passwordHash =
        await bcrypt.hash(password, 10)
    }

    const updatedUser =
      await prisma.adminUser.update({
        where: {
          id,
        },
        data: updateData,
      })

    return NextResponse.json({
      success: true,
      message: 'User updated successfully',
      user: {
        id: updatedUser.id,
        username: updatedUser.username,
        role: updatedUser.role,
      },
    })
  } catch (error) {
    console.error(error)

    return NextResponse.json(
      {
        error: 'Failed to update user',
      },
      {
        status: 500,
      }
    )
  }
}

/**
 * DELETE USER
 */
export async function DELETE(
  req: NextRequest,
  { params }: RouteContext
) {
  try {
    const { id } = await params

    const user =
      await prisma.adminUser.findUnique({
        where: {
          id,
        },
      })

    if (!user) {
      return NextResponse.json(
        {
          error: 'User not found',
        },
        {
          status: 404,
        }
      )
    }

    if (user.role === 'SUPER_ADMIN') {
      return NextResponse.json(
        {
          error:
            'Super Admin cannot be deleted',
        },
        {
          status: 403,
        }
      )
    }

    await prisma.adminUser.delete({
      where: {
        id,
      },
    })

    return NextResponse.json({
      success: true,
      message: 'User deleted successfully',
    })
  } catch (error) {
    console.error(error)

    return NextResponse.json(
      {
        error: 'Failed to delete user',
      },
      {
        status: 500,
      }
    )
  }
}