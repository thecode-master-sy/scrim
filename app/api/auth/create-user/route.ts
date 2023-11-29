import { prisma } from "@/app/lib/db/db";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { id, email, username } = await req.json();

    //check if user exists before creating a new user
    const user = await prisma.user.findUnique({
      where: {
        id: id,
        email: email,
      },
    });

    if (user)
      return NextResponse.json(
        { error: true, message: "user already exists" },
        { status: 409 }
      );

    //check if the username is already taken
    const userWithSameUsername = await prisma.user.findFirst({
      where: {
        username: username,
      },
    });

    if (userWithSameUsername)
      return NextResponse.json(
        { error: true, message: "this username has been taken" },
        { status: 409 }
      );

    //if not create a new user
    const returnedUser = await prisma.user.create({
      data: {
        id: id,
        email: email,
        username: username,
      },
    });

    console.log(returnedUser);

    return NextResponse.json(
      {
        error: false,
        message: "user created successfully",
        user: returnedUser,
      },
      { status: 200 }
    );
  } catch (error) {
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
