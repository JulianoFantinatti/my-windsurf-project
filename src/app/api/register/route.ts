import { NextResponse } from "next/server"
import { hash } from "bcrypt"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export async function POST(req: Request) {
  try {
    const { name, email, password } = await req.json()

    if (!name || !email || !password) {
      return new NextResponse("Missing required fields", { status: 400 })
    }

    // Check if user already exists
    const existingUser = await prisma.user.findUnique({
      where: {
        email,
      },
    })

    if (existingUser) {
      return new NextResponse("User already exists", { status: 400 })
    }

    // Hash password
    const hashedPassword = await hash(password, 12)

    // Create user
    const user = await prisma.user.create({
      data: {
        name,
        email,
        hashedPassword,
      },
    })

    return NextResponse.json({
      user: {
        name: user.name,
        email: user.email,
      },
    })
  } catch (error: any) {
    console.error("[REGISTER_ERROR]", error)
    return new NextResponse("Internal Error", { status: 500 })
  }
}