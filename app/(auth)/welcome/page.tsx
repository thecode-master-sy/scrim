import { Logo } from "@/app/components/Logo";
import OnboardingComponent from "@/app/components/auth/OnboardingComponent";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { redirect } from "next/navigation"
import { getProfile } from "@/app/lib/api-client/user";

export default async function Page() {
  const supabase = createServerComponentClient({cookies});

  const {data: {session}} = await supabase.auth.getSession();

  if(!session) {
    redirect("/login")
  }

  const {id, email} = session.user;

  const data = await getProfile({id, email: email ?? ""});

  if(data.data !== null) {
    redirect("/dashboard")
  }

  return (
    <div className="flex min-h-screen flex-col px-4">
      <div>
        <Logo className="font-extrabold" />
      </div>

      <div className="flex grow">
        <div className="mx-auto my-auto w-full">
          <OnboardingComponent userDetails={{id, email: email ?? ""}}/>
        </div>
      </div>
    </div>
  );
}