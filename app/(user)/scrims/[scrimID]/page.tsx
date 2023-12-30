import RealtimeScrimRoom from "@/app/components/user/DisplayScrimRoom/RealtimeScrimRoom";
import { getScrimRoom } from "@/app/lib/api-client/scrim";
import { getProfile } from "@/app/lib/api-client/user";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";


interface ScrimProps {
  scrimID: string;
}

export default async function Page({ params: { scrimID } }: { params: ScrimProps }) {
  cookies().getAll() //keep cookies within the same execution context during build time
  const supabase = createServerComponentClient({cookies});
  const {data: {session}} = await supabase.auth.getSession();

  if(!session) {
    redirect("/login")
  }

  const {id, email} = session.user;

  const response = await getProfile({id, email: email ?? ""});
  const user = response.data;

  if(!user) {
    redirect("/welcome")
  }

  const scrimRoom = await getScrimRoom(scrimID);

  if(scrimRoom == null) {
    redirect("/scrims/not-found")
  }

  //check if the user is a paricipant of the scrim;
  const isParticipant = scrimRoom.ScrimParticipants.find((scrimParticipant) => scrimParticipant.participantId == user.id)

  if(!isParticipant){
    redirect(`/scrims/join/${scrimRoom.id}`);
  }

  return (
    <div className="relative min-h-screen">
      <RealtimeScrimRoom scrimRoom={scrimRoom!} user={user}/>
    </div>
  );
}
