import { motion, AnimatePresence } from "framer-motion";
import { useModalContext } from "@/app/contexts/ModalContextProvider";
import { Button } from "../ui/button";
import { X, MoveLeft } from "lucide-react";
import { Input } from "../ui/input";
import { SetStateAction, useRef, useState } from "react";
import { Pellet, PelletText } from "../ui/pellet";

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

const modalContentVariants = {
  initial: {
    scale: 0,
  },
  animate: {
    scale: 1,
  },
  exit: {
    scale: 0,
  },
};

const ScrollInFromLeftVariants = {
  inital: {
    x: "100%",
  },
  animate: {
    x: 0,
  },
  exit: {
    x: "-100%",
  },
};

const CreateScrimModalMobile = () => {
  const modalContext = useModalContext();
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

const CreateScrimModalDesktop = () => {
  const modalContext = useModalContext();
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

const ModalContent = () => {
  const [selectedTabIndex, setSelectedTabIndex] = useState(0);
  const tabs = [
    <Introduction moveToNext={moveToNext} key={Math.random()} />,
    <Title
      moveToNext={moveToNext}
      moveToPrevious={moveToPrevious}
      key={Math.random()}
    />,
    <Description
      moveToNext={moveToNext}
      moveToPrevious={moveToPrevious}
      key={Math.random()}
    />,
    <AddTags
      moveToNext={moveToNext}
      moveToPrevious={moveToPrevious}
      key={Math.random()}
    />,
  ];
  function moveToNext() {
    setSelectedTabIndex((prev) => prev + 1);
  }
  function moveToPrevious() {
    setSelectedTabIndex((prev) => prev - 1);
  }

  return (
    <motion.div>
      <AnimatePresence mode="wait" initial={false}>
        {tabs[selectedTabIndex]}
      </AnimatePresence>
    </motion.div>
  );
};

const ScrollInFromLeft = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      variants={ScrollInFromLeftVariants}
      initial="inital"
      animate="animate"
      exit="exit"
      transition={{
        x: {
          ease: [0.33, 1, 0.68, 1],
        },
      }}>
      {children}
    </motion.div>
  );
};

const Introduction = ({ moveToNext }: { moveToNext: () => void }) => {
  return (
    <ScrollInFromLeft>
      <header className="grid gap-2">
        <h3 className="text-mid font-bold">Create a new scrim</h3>
        <p>
          A scrim a friendly match between gamers. create a scrim room where you
          can share links to other gamers who want to play a friendly match with
          you
        </p>
      </header>
      <Button className="w-full mt-4" onClick={moveToNext}>
        Continue
      </Button>
    </ScrollInFromLeft>
  );
};

const Title = ({
  moveToNext,
  moveToPrevious,
}: {
  moveToNext: () => void;
  moveToPrevious: () => void;
}) => {
  const titleRef = useRef(null);
  return (
    <ScrollInFromLeft>
      <header className="grid gap-2">
        <h3 className="text-mid font-bold">Give it a title</h3>
        <p>
          a descriptive title would make it easier for other to find your room
        </p>
      </header>
      <form className="grid gap-4 mt-4" onSubmit={(e) => e.preventDefault()}>
        <Input
          placeholder="search available scrims"
          name="title"
          ref={titleRef}
        />

        <div className="flex justify-between items-center">
          <span
            className="flex items-center gap-4 cursor-pointer"
            onClick={moveToPrevious}>
            <MoveLeft size={24} />
            <span>back</span>
          </span>

          <Button onClick={moveToNext}>Continue</Button>
        </div>
      </form>
    </ScrollInFromLeft>
  );
};

const Description = ({
  moveToNext,
  moveToPrevious,
}: {
  moveToNext: () => void;
  moveToPrevious: () => void;
}) => {
  const titleRef = useRef(null);
  return (
    <ScrollInFromLeft>
      <header className="grid gap-2">
        <h3 className="text-mid font-bold">Write a little Description</h3>
        <p>
          give a little description of the scrim. you could state the time,
          rules etc
        </p>
      </header>
      <form className="grid gap-4 mt-4" onSubmit={(e) => e.preventDefault()}>
        <Input
          placeholder="search available scrims"
          name="title"
          ref={titleRef}
        />

        <div className="flex justify-between items-center">
          <span
            className="flex items-center gap-4 cursor-pointer"
            onClick={moveToPrevious}>
            <MoveLeft size={24} />
            <span>back</span>
          </span>

          <Button onClick={moveToNext}>Continue</Button>
        </div>
      </form>
    </ScrollInFromLeft>
  );
};

const AddTags = ({
  moveToNext,
  moveToPrevious,
}: {
  moveToNext: () => void;
  moveToPrevious: () => void;
}) => {
  return (
    <ScrollInFromLeft>
      <header className="grid gap-2">
        <h3 className="text-mid font-bold">Add tags</h3>
        <p>
          adding the proper tags would also make it easier for others to find
          your scrim room
        </p>
      </header>
      <div className="grid gap-4 mt-4">
        <div className="flex flex-wrap gap-2">
          <Pellet>
            <PelletText>call of duty mobile</PelletText>
          </Pellet>
          <Pellet>
            <PelletText>free fire</PelletText>
          </Pellet>
          <Pellet>
            <PelletText>efootball</PelletText>
          </Pellet>
          <Pellet>
            <PelletText>pubg</PelletText>
          </Pellet>
        </div>

        <div className="flex justify-between items-center">
          <span
            className="flex items-center gap-4 cursor-pointer"
            onClick={moveToPrevious}>
            <MoveLeft size={24} />
            <span>back</span>
          </span>

          <Button>Continue</Button>
        </div>
      </div>
    </ScrollInFromLeft>
  );
};

const ModalOverlay = () => {
  return (
    <div className="absolute top-0 left-0 w-full h-screen bg-white/20 backdrop-blur-md -z-10" />
  );
};

export { CreateScrimModalDesktop, CreateScrimModalMobile };
