"use client";
import styles from "./style.module.scss";
import { AnimatePresence } from "framer-motion";
import Burger from "@/components/header/burger";
import { useState } from "react";
import Stripes from "./stripes";
import Menu from "./menu";

export default function Header() {
  const [menuIsOpened, setMenuIsOpened] = useState(false);

  const handleOpen = () => {
    setMenuIsOpened(true);
  };

  const handleClose = () => {
    setMenuIsOpened(false);
  };

  return (
    <div className={styles.header}>
      <Burger handleOpen={handleOpen} />
      <AnimatePresence mode="wait">
        {menuIsOpened && (
          <>
            <Stripes />
            <Menu handleClose={handleClose} />
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
