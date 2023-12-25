"use client";
import { useState } from "react";
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
import { ProfileImage } from "../components/user/profileimage";
import {
  LeftPanel,
  MobileRightPanel,
  DesktopRightPanel,
} from "../components/ui/panel";
import {
  CreateScrimModalDesktop,
  CreateScrimModalMobile,
} from "../components/user/CreateScrimModal";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mobileIsOpen, setMobileIsOpen] = useState(false);
  return (
    <div className="relative overflow-hidden">
      <LeftPanel />

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
    </div>
  );
}
