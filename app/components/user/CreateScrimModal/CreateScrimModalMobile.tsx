"use client"
import { motion, AnimatePresence } from "framer-motion";
import { useModalContext } from "@/app/contexts/ModalContextProvider";
import { X } from "lucide-react";
import ModalContent from "./ScrimModalContent";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

const mobileModalVariants = {
  initial: {
    y: "20%",
  },
  animate: {
    y: 0,
  },
  exit: {
    y: "100%",
  },
};

export default function CreateScrimModalMobile() {
  const pathname = usePathname();
  const modalContext = useModalContext();
  useEffect(() => {
    if(modalContext?.mobileModalIsOpen) {
      modalContext?.toggleMobileModal()
    }
  }, [pathname])
  return (
    <AnimatePresence>
      {modalContext?.mobileModalIsOpen && (
        <motion.div
          variants={mobileModalVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{
            y: {
              ease: [0.22, 1, 0.36, 1],
              duration: 0.7,
            },
          }}
          className="absolute top-0 left-0 w-full h-screen overflow-hidden flex z-30 bg-background p-4 md:hidden">
          <X
            size={24}
            className="cursor-pointer absolute top-4 left-4"
            onClick={modalContext?.toggleMobileModal}
          />
          <div className="m-auto">
            <ModalContent />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
