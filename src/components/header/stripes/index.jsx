"use client";
import { motion } from "framer-motion";
import styles from "./style.module.scss";

export default function Stripes() {
  const height = {
    initial: {
      height: 0,
    },
    enter: {
      height: "100%",
    },
    exit: {
      height: 0,
    },
  };

  return (
    <motion.div className={styles.stripes}>
      {[...Array(5)].map((_, index) => {
        return (
          <motion.div
            key={index}
            className={styles.stripe}
            variants={height}
            initial="initial"
            animate="enter"
            exit="exit"
          ></motion.div>
        );
      })}
    </motion.div>
  );
}
