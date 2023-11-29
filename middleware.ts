import { NextResponse, NextRequest } from "next/server";

import { jwtVerify, createRemoteJWKSet } from "jose";

const hankoApiUrl = process.env.NEXT_PUBLIC_HANKO_API_URL;

export async function middleware(req: NextRequest) {
  const hanko = req.cookies.get("hanko")?.value;

  const JWKS = createRemoteJWKSet(
    new URL(`${hankoApiUrl}/.well-known/jwks.json`)
  );

  try {
    const verifiedJWT = await jwtVerify(hanko ?? "", JWKS);
  } catch {
    return NextResponse.redirect(new URL("/login", req.url));
  }
}

export const config = {
  matcher: ["/dashboard", "/welcome"],
};
//if the user is already logged in redirect back to the dashboard for the login and welcome pages;
//if the user is not already logged in redirect back to the login page for the user to login

//the above function is only checking if the user is not logged in
