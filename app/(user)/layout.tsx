import {
  ScrimLink,
  MobileNavBarContainer,
  MobileNavBar,
  MobileNavListElement,
} from "../components/ui/navbar";
import {
  Home,
  Gamepad,
  Search,
} from "lucide-react";
import { ProfileImage } from "../components/user/Profile/profileimage";
import {
  LeftPanel,
  MobileRightPanel,
  DesktopRightPanel,
} from "../components/user/DisplayScrimRoom/Panel";
import CreateScrimModalMobile from "../components/user/CreateScrimModal/CreateScrimModalMobile";
import CreateScrimModalDesktop from "../components/user/CreateScrimModal/CreateScrimModalDesktop";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { redirect } from "next/navigation"
import { getScrimRooms } from "../lib/api-client/scrim";
import ScrimRoomsProvider, { useScrimContext } from "../contexts/ScrimRoomContext";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  cookies().getAll() //keep cookies in the same execution context during build time
  const supabase = createServerComponentClient({cookies});
  const {data: {session}} = await supabase.auth.getSession();
  if(!session) {
    redirect("/login")
  }
  const {id} = session.user;
  const scrimRooms = await getScrimRooms(id);
  
  return (
    <div className="relative overflow-hidden">
      <ScrimRoomsProvider>
        <LeftPanel scrimRooms={scrimRooms}/>

        <div className="w-full bg-background overflow-hidden">
          <MobileRightPanel>{children}</MobileRightPanel>
          <DesktopRightPanel>{children}</DesktopRightPanel>
        </div>

        <CreateScrimModalMobile />
        <CreateScrimModalDesktop />

        <MobileNavBarContainer>
          <MobileNavBar>
            <MobileNavListElement>
              <ScrimLink
                href="/dashboard"
                activeStyles="text-primary-dark"
                className="flex flex-col items-center gap-1">
                <Home size={20} strokeWidth={2} />
                <span>Home</span>
              </ScrimLink>
            </MobileNavListElement>

            <MobileNavListElement>
              <ScrimLink
                href="/scrims/search"
                activeStyles="text-primary-dark"
                className="flex flex-col items-center gap-1">
                <Search size={20} strokeWidth={2} />
                <span>Search</span>
              </ScrimLink>
            </MobileNavListElement>

            <MobileNavListElement>
              <ScrimLink
                href="/scrims"
                activeStyles="text-primary-dark"
                className="flex flex-col items-center gap-1">
                <Gamepad size={20} strokeWidth={2} />
                <span>Scrims</span>
              </ScrimLink>
            </MobileNavListElement>

            <div className="flex flex-col items-center gap-1">
              <ProfileImage />
              <span>Profile</span>
            </div>
          </MobileNavBar>
        </MobileNavBarContainer>
      </ScrimRoomsProvider>
    </div>
  );
}
