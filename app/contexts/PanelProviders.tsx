"use client";
import { createContext, useContext, useState } from "react";

type mobileRightPanelContext = {
  mobileRightPanelOpen: boolean;
  togglePanel: () => void;
};

const mobileRightPanelContext = createContext<mobileRightPanelContext | null>(
  null
);

export function useMobileRightPanelContext() {
  return useContext(mobileRightPanelContext);
}

const MobileRightPanelContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [mobileRightPanelOpen, setMobilePanelOpen] = useState(false);

  function togglePanel() {
    setMobilePanelOpen(!mobileRightPanelOpen);
  }

  return (
    <mobileRightPanelContext.Provider
      value={{ mobileRightPanelOpen, togglePanel }}>
      {children}
    </mobileRightPanelContext.Provider>
  );
};

export { MobileRightPanelContextProvider };
