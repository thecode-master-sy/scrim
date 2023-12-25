import { Logo } from "@/app/components/Logo";
import LoginComponent from "@/app/components/auth/LoginComponent";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import Link from "next/link";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function Page() {
  /* trying to resolve a build time error*/
  cookies().getAll()
  const supabase = createServerComponentClient({cookies});

  const {data: {session}} = await supabase.auth.getSession();

  if(session) {
    redirect("/dashboard");
  }

  return (
    <div className="w-full grid min-h-screen px-4">
      <div className="w-full m-auto grid gap-4 max-w-md">
        <div>
          <div className="flex justify-center">
            <Logo />
          </div>
        </div>
        <p className="text-center">welcome back sign into your scrim account</p>
        <LoginComponent shouldCreateUser={false}/>

        <p className="text-center">Dont have an account? <Link className="underline" href="/signup">Signup</Link></p>
      </div>
    </div>
  );
}
