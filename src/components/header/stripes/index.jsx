"use client";
import { motion, ease } from "framer-motion";
import styles from "./style.module.scss";

export default function Stripes() {
  const height = {
    initial: {
      height: 0,
    },
    enter: (index) => ({
      height: "100%",
      transition: {
        duration: 0.5,
        delay: 0.05 * index,
        ease: ease,
      },
    }),
    exit: (index) => ({
      height: 0,
      transition: {
        duration: 0.3,
        delay: 0.05 * index,
        ease: ease,
      },
    }),
  };

  const background = {
    initial: {
      opacity: 0,
    },
    enter: {
      opacity: 0.06,
      transition: {
        duration: 0.4,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.4,
      },
    },
  };

  return (
    <motion.div key="stripes" className={styles.stripes}>
      {[...Array(5)].map((_, index) => {
        return (
          <>
            <motion.div
              key={index}
              custom={index}
              className={styles.stripe}
              variants={height}
              initial="initial"
              animate="enter"
              exit="exit"
            ></motion.div>
            <motion.div
              key={index}
              className={styles.background}
              variants={background}
              initial="initial"
              animate="enter"
              exit="exit"
            ></motion.div>
          </>
        );
      })}
    </motion.div>
  );
}
