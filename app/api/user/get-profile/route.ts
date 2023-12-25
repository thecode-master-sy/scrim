import { NextRequest, NextResponse } from "next/server";
import { Prisma } from "@prisma/client";

export async function GET(req:NextRequest) {
    return  NextResponse.json({
        error: false,
        message: "api is working succesfully"
    }, {status: 200})
}