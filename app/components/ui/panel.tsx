"use client";
import { SlidersHorizontal } from "lucide-react";
import { ProfileComponent } from "../user/profile";
import { Button } from "./button";
import { DesktopNavBarContainer, ScrimLink } from "./navbar";
import { SideBarButton } from "./sidebartoggle";
import { Home, Gamepad, Bell } from "lucide-react";
import { motion } from "framer-motion";
import { useMobileRightPanelContext } from "@/app/contexts/PanelProviders";
import { useModalContext } from "@/app/contexts/ModalContextProvider";

const mobileRightPanelVariants = {
  initial: {
    x: "84%",
    opacity: 0.5,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      opacity: {
        delay: 0,
      },
    },
  },
};

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
    icon: <Home size={20} strokeWidth={2} />,
  },
  {
    label: "Scrims",
    path: "/scrims",
    icon: <Gamepad size={20} strokeWidth={2} />,
  },
];

const LeftPanel = () => {
  const mobileRightPanelContext = useMobileRightPanelContext();
  const modalContext = useModalContext();
  return (
    <div className="fixed left-0 top-0 h-screen w-full sm:w-[80%] md:w-[300px]  bg-scrim-sidebar md:bg-background border-r border-r-separator">
      <div className="flex flex-col h-screen">
        <header className="flex justify-between gap-2 items-center py-4 px-3 border-b border-separator">
          <div>
            <SideBarButton onClick={mobileRightPanelContext?.togglePanel} />
          </div>
          <div className="hidden md:block grow">
            <ProfileComponent />
          </div>

          <Button
            className="md:hidden"
            onClick={modalContext?.toggleMobileModal}>
            create
          </Button>
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
            <header className="flex justify-between items-center px-3">
              <h3 className="opacity-80">Scrim rooms</h3>

              <div className="flex gap-2">
                <SlidersHorizontal
                  size={20}
                  strokeWidth={2}
                  className="opacity-80 text-base"
                />
                <span className="opacity-80">filter</span>
              </div>
            </header>

            <div className="mt-7 px-3">
              {scrimRooms.map((scrimRoom, index) => (
                <ScrimLink
                  className="px-4 py-3 flex items-center"
                  activeStyles="bg-scrim-selected border border-border rounded rounded-md"
                  key={index}
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
  );
};

const MobileRightPanel = ({ children }: { children: React.ReactNode }) => {
  const mobileRightPanelContext = useMobileRightPanelContext();
  return (
    <motion.div
      variants={mobileRightPanelVariants}
      initial="initial"
      transition={{
        ease: [0.33, 1, 0.68, 1],
        duration: 0.4,
        opacity: {
          delay: 0.4,
        },
      }}
      animate={mobileRightPanelContext?.mobileRightPanelOpen ? "animate" : ""}
      className="relative w-full sm:translate-x-[84%] bg-scrim-sidebar border-l border-border md:hidden">
      {children}
    </motion.div>
  );
};

const DesktopRightPanel = ({ children }: { children: React.ReactNode }) => {
  const modalContext = useModalContext();
  return (
    <motion.div className="relative hidden md:block translate-x-0 w-auto ml-[300px] bg-background">
      <div className="fixed flex items-center justify-between top-0 left-0 right-0 w-full border-b border-border px-4 py-2 bg-background z-10">
        <SideBarButton />
        <div className="flex items-center gap-4">
          <Bell size={20} strokeWidth={2} />
          <Button onClick={modalContext?.toggleDesktopModal}>create</Button>
        </div>
      </div>
      {children}
    </motion.div>
  );
};

const DesktopPanelTrigger = () => {};

export { LeftPanel, MobileRightPanel, DesktopRightPanel };
