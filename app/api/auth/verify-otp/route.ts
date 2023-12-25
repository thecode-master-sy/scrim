import { NextRequest, NextResponse } from "next/server";
import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";


export async function POST(request: NextRequest) {
    try {
        const {email, token} = await request.json();
        console.log(email, token);
        const supabase = createRouteHandlerClient({cookies});

        const {
            data: { session },
            error,
        } = await supabase.auth.verifyOtp({
            email,
            token,
            type: 'email',
        })
          
          
          console.log(session, error);
        
          return NextResponse.json({
            error: error,
            session: session
          }, {status: 200})
    }catch(error) {
        console.log(error);
        return new NextResponse("Internal Server Error", {status: 500})
    }
}