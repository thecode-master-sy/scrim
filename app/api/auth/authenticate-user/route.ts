import { NextRequest, NextResponse } from "next/server";
import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

export async function POST(request: NextRequest) {
    try {
        const {email, shouldCreateUser} = await request.json();
       
        const supabase = createRouteHandlerClient({cookies});

        const { data, error } = await supabase.auth.signInWithOtp({
            email: email,
            options: {
              // set this to false if you do not want the user to be automatically signed up
              shouldCreateUser: shouldCreateUser,
            },
          })
          
          console.log(data, error);
        
          return NextResponse.json({
            error: error,
            data: data
          }, {status: 200})
    }catch(error) {
        console.log(error);
        return new NextResponse("Internal Server Error", {status: 500})
    }
}