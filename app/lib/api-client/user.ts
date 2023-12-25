import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export async function createOrLoginUser(userDetails: UserDetails, shouldCreateUser: boolean) {
  const URL = "/api/auth/authenticate-user";

  try {
    const response = await fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({...userDetails, shouldCreateUser}),
    });

    return await response.json();
  } catch (error) {
    console.log(error);
    return { error: true, message: "something went wrong please try again" };
  }
}

export async function verifyOtp(userDetails:UserDetails, token: string) {
  const URL = "/api/auth/verify-otp";

  try {
    const response = await  fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({...userDetails, token})
    })

    return await response.json()
  }catch(error) {
    return {error: true, message: "something went wrong"}
  }
}

export async function createProfile(userDetails: UserDetails) {
  const URL = "/api/user/create-profile";

  try {
    const response = await  fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userDetails)
    })

    return await response.json()
  }catch(error) {
    return {error: true, message: "something went wrong"}
  }
}

export async function getProfile(userDetails:UserDetails) {
  const {id, email} = userDetails;
  try {
    const data = await prisma.profile.findUnique({
      where: {
        email,
        AND: {
          id
        }
      }
     })

     return {error: false, data}
  }catch(error) {
    return {error: true, message: "something went wrong"}
  }
}