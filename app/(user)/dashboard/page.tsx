import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";

export default async function Page() {
  cookies().getAll() // keep cookies within the same execution context during build time
  const supabase = createServerComponentClient({cookies});
  const {data: {session}} = await supabase.auth.getSession();
  if(!session) {
    redirect("/login")
  }
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div>
        <p>Select a scrim room to preview</p>

        <div>
          
        </div>
      </div>
    </div>
  );
}
