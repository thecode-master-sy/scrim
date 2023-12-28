import { motion } from "framer-motion";

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

export const ScrollInFromLeft = ({ children }: { children: React.ReactNode }) => {
    return (
      <motion.div
        variants={ScrollInFromLeftVariants}
        initial="inital"
        animate="animate"
        transition={{
          x: { ease: [0.22, 1, 0.36, 1] },
        }}>
        {children}
      </motion.div>
    );
};