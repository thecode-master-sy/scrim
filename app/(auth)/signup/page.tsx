import { Logo } from "@/app/components/Logo";
import SignUpComponent from "@/app/components/auth/LoginComponent";
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
      <div className="grid gap-4 w-full m-auto max-w-md">
        <div>
          <div className="flex justify-center">
            <Logo />
          </div>
        </div>
        <p className="text-center">Create a scrim account</p>
        <SignUpComponent shouldCreateUser={true}/>
        <p className="text-center">Already have an acccount? <Link href="/login" className="underline">SignIn</Link></p>
      </div>
    </div>
  );
}