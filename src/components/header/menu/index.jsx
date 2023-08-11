import styles from "./style.module.scss";
import { motion, ease } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export default function Menu({ handleClose }) {
  const listItem = useRef(null);

  const handleClick = () => {
    handleClose();
  };

  const closeButton = {
    initial: {
      right: "-200px",
      opacity: 0,
    },
    enter: {
      right: 0,
      opacity: 1,
      transition: {
        ease: ease,
        duration: 0.5,
      },
    },
    exit: {
      right: "-200px",
      opacity: 0,
      transition: {
        ease: ease,
      },
    },
  };

  const rotate = {
    initial: {
      rotateX: 90,
      opacity: 0,
    },
    enter: (index) => ({
      rotateX: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: [0.33, 1, 0.68, 1],
        delay: 0.3 + index * 0.05,
      },
    }),
    exit: {
      opacity: 0,
      transition: { duration: 0.5, ease: [0.33, 1, 0.68, 1] },
    },
  };

  const menuItems = [
    {
      title: "Projects",
      description: "To See Everything",
      images: ["projects1.jpg", "projects2.jpg"],
    },
    {
      title: "Agence",
      description: "To Learn Everything",
      images: ["agence1.jpg", "agence2.jpg"],
    },
    {
      title: "Contact",
      description: "To Send a FAX",
      images: ["contact1.jpg", "contact2.jpg"],
    },
  ];

  const handleMouseEnter = () => {};

  const handleMouseLeave = () => {};

  return (
    <div className={styles.menu}>
      <div onClick={handleClick}>
        <motion.svg
          key="close"
          variants={closeButton}
          initial="initial"
          animate="enter"
          exit="exit"
          width="68"
          height="68"
          viewBox="0 0 68 68"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={styles.button}
        >
          <path d="M1.5 1.5L67 67" stroke="#ffcece" />
          <path d="M66.5 1L0.999997 66.5" stroke="#ffcece" />
        </motion.svg>
      </div>

      <div className={styles.list}>
        {menuItems.map((item, index) => {
          return (
            <motion.div
              variants={rotate}
              initial="initial"
              animate="enter"
              exit="exit"
              custom={index}
              key={index}
              className={styles.item}
            >
              <motion.div
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className={styles.container}
                key={index}
                ref={listItem}
              >
                <span className={styles.title}>{item.title}</span>
                <div className={styles.hoverbox}>
                  <Image
                    src={`/images/${item.images[0]}`}
                    height={120}
                    width={450}
                    alt="image"
                    className={styles.hoverimage}
                  />
                  <span className={styles.hovertitle}>{item.description}</span>
                  <Image
                    src={`/images/${item.images[1]}`}
                    height={120}
                    width={450}
                    alt="image"
                    className={styles.hoverimage}
                  />
                  <span className={styles.hovertitle}>{item.description}</span>
                </div>
              </motion.div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
