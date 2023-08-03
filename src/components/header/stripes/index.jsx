"use client";
import { easeInOut, motion } from "framer-motion";
import styles from "./style.module.scss";

export default function Stripes() {
  const height = {
    initial: {
      height: 0,
    },
    enter: (index) => ({
      height: "100%",
      transition: {
        delay: 0.2 * index,
        duration: 0.3,
        ease: [0.5, 0.67, 0.83, 0.67],
      },
    }),
    exit: (index) => ({
      height: 0,
      transition: {
        delay: 0.2 * index,
        duration: 0.3,
        ease: [0.5, 0.67, 0.83, 0.67],
      },
    }),
  };

  const background = {
    initial: {
      opacity: 0,
    },
    enter: {
      opacity: 1,
    },
    exit: {
      opacity: 0,
      transition: {
        delay: 1,
      },
    },
  };

  return (
    <motion.div key="stripes" className={styles.stripes}>
      {[...Array(5)].map((_, index) => {
        return (
          <motion.div
            key={index}
            custom={index}
            className={styles.stripe}
            variants={height}
            initial="initial"
            animate="enter"
            exit="exit"
          >
            <motion.div
              key={index}
              className={styles.background}
              variants={background}
              initial="initial"
              animate="enter"
              exit="exit"
            ></motion.div>
          </motion.div>
        );
      })}
    </motion.div>
  );
}
