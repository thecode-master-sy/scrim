import { NextResponse, NextRequest } from "next/server";

export  async function POST(request: NextRequest) {
    return NextResponse.json({
        message: "this route is working properly"
    }, {status:200})
}