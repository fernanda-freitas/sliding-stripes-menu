"use client";
import styles from "./style.module.scss";

export default function Burger({ handleOpen }) {
  const handleClick = () => {
    handleOpen();
  };

  return (
    <div onClick={handleClick} className={styles.burger}>
      <div className={styles.background}></div>
      <svg
        width="56"
        height="7"
        viewBox="0 0 56 7"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <line
          x1="56"
          y1="0.5"
          x2="4.37114e-08"
          y2="0.500005"
          stroke="#f6eee3"
        />
        <line x1="56" y1="6.5" x2="28" y2="6.5" stroke="#f6eee3" />
      </svg>
      <span>Menu</span>
    </div>
  );
}
