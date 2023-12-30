import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function createScrimRoom(scrimRoomDetails: ScrimRoomDetails) {
    const URL = "/api/scrim/create";

    console.log(scrimRoomDetails.categories, "categories from the scrim api client");

    try {
        const response = await fetch(URL, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(scrimRoomDetails),
        });
    
        return await response.json();
      } catch (error) {
        console.log(error);
        return { error: true, message: "something went wrong please try again" };
      }
}
//i want to fetch scrim rooms where the user is a participant,
//findMany({
    //where: {

    //}
//})
export async function getScrimRooms(userId: string) {
      const data = await prisma.scrim.findMany({
        where: {
         ScrimParticipants: {
          some: {
            participantId: userId,
          },
         }
        }
      })
      return data
}

export async function getScrimRoom(scrimId:string) {
  const data = await prisma.scrim.findUnique({
    where: {
      id: scrimId,
    },
    include: {
      Messages: {
        include: {
          author: true
        }
      },
      ScrimParticipants: {
        include: {
          participant: true
        }
      },
      creator: true,
    }
  })
  return data
}