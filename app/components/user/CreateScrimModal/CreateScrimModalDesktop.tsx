"use client"
import { useModalContext } from "@/app/contexts/ModalContextProvider";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import ModalContent  from "./ScrimModalContent";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

const modalContentVariants = {
    initial: {
      scale: 0,
    },
    animate: {
      scale: 1,
    },
    exit: {
      scale: 0.5,
    },
};

const ModalOverlay = () => {
    return (
      <div className="absolute top-0 left-0 w-full h-screen bg-white/20 backdrop-blur-md -z-10" />
    );
};

export default function CreateScrimModalDesktop(){
    const pathname = usePathname()
    const modalContext = useModalContext();
    useEffect(() => {
      if(modalContext?.desktopModalIsOpen) {
        modalContext?.toggleDesktopModal()
      }
    }, [pathname])
    return (
      <AnimatePresence>
        {modalContext?.desktopModalIsOpen && (
          <motion.div className="absolute top-0 left-0 w-full h-screen overflow-hidden flex pt-4 z-30">
            <ModalOverlay />
            <motion.div
              variants={modalContentVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              layout
              className="m-auto overflow-hidden relative max-w-xl bg-background rounded-md border border-border px-7 py-10 shadow-sm">
              <X
                size={24}
                className="absolute top-4 right-4 cursor-pointer"
                onClick={modalContext?.toggleDesktopModal}
              />
              <ModalContent />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    );
  };
  