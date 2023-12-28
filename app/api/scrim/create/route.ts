import { NextResponse, NextRequest } from "next/server";
import { PrismaClient } from "@prisma/client";
import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

const prisma = new PrismaClient();

export  async function POST(request: NextRequest) {
    try{
        const scrimRoomDetails = await request.json();
        cookies().getAll() //keep cookies within the same execution context
        const supabase = createRouteHandlerClient({cookies});
        const {data: {session}} = await supabase.auth.getSession()
        
        if(!session) return NextResponse.json({
            message: "Unauthorized access"
        }, {status: 401})

        const {id} = session.user;

        const data = await prisma.scrim.create({
            data: {
                creatorId: id,
                ...scrimRoomDetails
            }
        })

        console.log(data)

        return NextResponse.json({
            data,
            message: "scrim room has been successfully created"
        }, {status: 200})
    }catch(error) {
        return new NextResponse("Internal server error", {status: 500})
    }
}