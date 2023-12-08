"use client";
import { createContext, useContext, useState } from "react";

type ModalContextType = {
  mobileModalIsOpen: boolean;
  desktopModalIsOpen: boolean;
  toggleMobileModal: () => void;
  toggleDesktopModal: () => void;
};

const ModalContext = createContext<ModalContextType | null>(null);

export function useModalContext() {
  return useContext(ModalContext);
}

export default function ModalContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mobileModalIsOpen, setMobileModalIsOpen] = useState(false);
  const [desktopModalIsOpen, setDesktopModalIsOpen] = useState(false);

  function toggleDesktopModal() {
    setDesktopModalIsOpen(!desktopModalIsOpen);
  }

  function toggleMobileModal() {
    setMobileModalIsOpen(!mobileModalIsOpen);
  }

  return (
    <ModalContext.Provider
      value={{
        mobileModalIsOpen,
        desktopModalIsOpen,
        toggleDesktopModal,
        toggleMobileModal,
      }}>
      {children}
    </ModalContext.Provider>
  );
}
