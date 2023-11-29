"use client";
import * as React from "react";
import { Button } from "../components/ui/button";
import {
  DesktopNavBarContainer,
  ScrimLink,
  MobileNavBarContainer,
  MobileNavBar,
  MobileNavListElement,
} from "../components/ui/navbar";
import { SideBarButton } from "../components/ui/sidebartoggle";
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
import { motion } from "framer-motion";
import {
  LeftPanel,
  MobileRightPanel,
  DesktopRightPanel,
} from "../components/ui/panel";
import { CreateScrimModal } from "../components/user/CreateScrimModal";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mobileIsOpen, setMobileIsOpen] = React.useState(false);
  return (
    <div className="relative">
      <LeftPanel />

      <div className="w-full bg-background overflow-hidden">
        <MobileRightPanel>{children}</MobileRightPanel>
        <DesktopRightPanel>{children}</DesktopRightPanel>
      </div>

      {/* <CreateScrimModal /> */}

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
