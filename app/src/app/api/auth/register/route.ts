import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const client = new PrismaClient();

export async function POST(req: NextRequest) {
  try {
    const { email, password, firstname, lastname, phone } = await req.json();

    if (!email || !password || !firstname || !lastname || !phone) {
      return NextResponse.json(
        { error: "All user details are required" },
        { status: 400 }
      );
    }

    const existingUser = await client.user.findFirst({
      where: {
        Email: email,
      },
    });

    if (existingUser) {
      return NextResponse.json(
        { error: "User already exists with the same email" },
        { status: 409 } // 409 Conflict
      );
    }

    const newUser = await client.user.create({
      data: {
        Email: email,
        Password: password, // ⚠️ Consider hashing before storing
        FirstName: firstname,
        LastName: lastname,
        Phone: phone,
      },
      select: {
        Email: true,
        FirstName: true,
        LastName: true,
        Phone: true,
      },
    });

    return NextResponse.json(
      { message: "Register successful", User: newUser },
      { status: 201 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
