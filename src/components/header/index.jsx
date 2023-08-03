"use client";
import styles from "./style.module.scss";
import { AnimatePresence } from "framer-motion";
import Burger from "@/components/header/burger";
import { useState } from "react";
import Stripes from "./stripes";

export default function Header() {
  const [menuIsOpened, setMenuIsOpened] = useState(false);

  const handleMenuOpen = () => {
    setMenuIsOpened(!menuIsOpened);
  };

  return (
    <div className={styles.header}>
      <Burger handleMenu={handleMenuOpen} />
      <AnimatePresence mode="wait">
        {menuIsOpened && <Stripes />}
      </AnimatePresence>
    </div>
  );
}
