import { NextResponse, NextRequest } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(request: NextRequest) {
    try {
        const {id, email, username} = await request.json();

        const data = await prisma.profile.create({
            data: {
                email,
                id,
                username
            }
        })

        console.log(data);

        return NextResponse.json({
            error: false,
            data,
        }, {status: 200})

    }catch(error){
        return new NextResponse("Internal server error", {status: 500})
    }
}