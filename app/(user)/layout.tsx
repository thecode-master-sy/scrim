import { Button } from "../components/ui/button";
import {
  DesktopNavBarContainer,
  ScrimLink,
  MobileNavBarContainer,
  MobileNavBar,
  MobileNavListElement,
} from "../components/ui/navbar";
import { SideBarToggle } from "../components/ui/sidebartoggle";
import { ProfileComponent } from "../components/user/profile";
import {
  SlidersHorizontal,
  Home,
  Gamepad,
  Search,
  Bell,
  PanelLeft,
} from "lucide-react";
import { ProfileImage } from "../components/user/profileimage";

const scrimRooms = [
  {
    id: "12345",
    title: "1 v 1 snipers only by 9pm",
    messages: [],
    members: [],
    creator: "Heisenberg",
    status: "active",
  },
  {
    id: "20393",
    title: "scrim by 10am on tuesday",
    messages: [],
    members: [],
    creator: "Thecodemaster",
    status: "active",
  },
  {
    id: "398839",
    title: "clan match tomorrow who is in",
    messages: [],
    members: [],
    creator: "Thecodemaster",
    status: "active",
  },
];

const desktopPaths = [
  {
    label: "Dashboard",
    path: "/dashboard",
    icon: <Home />,
  },
  {
    label: "Scrims",
    path: "/scrims",
    icon: <Gamepad />,
  },
];

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative">
      <div className="fixed left-0 top-0 h-screen w-full sm:w-[70%] md:w-[300px]  bg-scrim-sidebar md:bg-background border-r border-r-separator">
        <div className="flex flex-col h-screen">
          <header className="flex gap-2 items-center py-4 px-3 border-b border-separator">
            <div>
              <SideBarToggle />
            </div>
            <div className="hidden md:block grow">
              <ProfileComponent />
            </div>

            <div className="flex md:hidden justify-between items-center grow">
              <h3>Scrim rooms</h3>

              <div className="flex gap-4 items-center">
                <div className="flex gap-2 items-center">
                  <SlidersHorizontal className="text-base" />
                  <span>filter</span>
                </div>
                <Button>create</Button>
              </div>
            </div>
          </header>

          <div>
            <DesktopNavBarContainer className="border-b border-separator px-3 py-7">
              <ul className="grid gap-5">
                {desktopPaths.map((path, index) => (
                  <li key={index}>
                    <ScrimLink
                      href={path.path}
                      className="flex gap-2 items-center">
                      {path.icon}
                      <span>{path.label}</span>
                    </ScrimLink>
                  </li>
                ))}
              </ul>
            </DesktopNavBarContainer>

            <div className="py-7">
              <header className="hidden md:flex justify-between items-center px-3">
                <h3 className="opacity-80">Scrim rooms</h3>

                <div className="flex gap-2">
                  <SlidersHorizontal className="opacity-80 text-base" />
                  <span className="opacity-80">filter</span>
                </div>
              </header>

              <div className="mt-7 px-3">
                {scrimRooms.map((scrimRoom, index) => (
                  <ScrimLink
                    className="px-4 py-3 flex items-center"
                    activeStyles="bg-scrim-selected border border-border rounded rounded-md"
                    href={`/scrims/${scrimRoom.id}-${scrimRoom.title
                      .split(" ")
                      .join("-")}`}>
                    {scrimRoom.title}
                  </ScrimLink>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-auto mb-4 px-3">
            <div className="px-3 py-4 border border-separator rounded-md">
              <h3 className="opacity-80">From Blog</h3>
              <p className="mt-4">
                <span>Story</span> Building Scrim
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full bg-background min-h-screen overflow-hidden">
        <div className="relative w-full sm:translate-x-[74%] min-h-screen md:translate-x-0 md:w-auto md:ml-[300px] bg-scrim-sidebar md:bg-background">
          <div className="fixed hidden  md:flex items-center justify-between top-0 left-0 right-0 w-full border-b border-border px-4 py-2 bg-background z-10">
            <SideBarToggle />
            <div className="flex items-center gap-4">
              <Bell />
              <Button>Create</Button>
            </div>
          </div>
          {children}
        </div>
      </div>

      <MobileNavBarContainer>
        <MobileNavBar>
          <MobileNavListElement>
            <ScrimLink
              href="/dashboard"
              activeStyles="text-primary-dark"
              className="flex flex-col items-center gap-2">
              <Home />
              <span>Home</span>
            </ScrimLink>
          </MobileNavListElement>

          <MobileNavListElement>
            <ScrimLink
              href="/scrims/search"
              activeStyles="text-primary-dark"
              className="flex flex-col items-center gap-2">
              <Search />
              <span>Search</span>
            </ScrimLink>
          </MobileNavListElement>

          <MobileNavListElement>
            <ScrimLink
              href="/scrims"
              activeStyles="text-primary-dark"
              className="flex flex-col items-center gap-2">
              <Gamepad />
              <span>Scrims</span>
            </ScrimLink>
          </MobileNavListElement>

          <div className="flex flex-col items-center gap-2">
            <ProfileImage />
            <span>profile</span>
          </div>
        </MobileNavBar>
      </MobileNavBarContainer>
    </div>
  );
}
