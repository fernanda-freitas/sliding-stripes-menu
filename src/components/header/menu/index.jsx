import styles from "./style.module.scss";

export default function Menu({ handleClose }) {
  const handleClick = () => {
    handleClose();
  };

  return (
    <div className={styles.menu}>
      <div onClick={handleClick}>
        <svg
          width="68"
          height="68"
          viewBox="0 0 68 68"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={styles.button}
        >
          <path d="M1.5 1.5L67 67" stroke="white" />
          <path d="M66.5 1L0.999997 66.5" stroke="white" />
        </svg>
      </div>
      <div className={styles.list}>
        <div className={styles.item}>
          <p className={styles.title}>Projects</p>
        </div>
        <div className={styles.item}>
          <p className={styles.title}>Agence</p>
        </div>
        <div className={styles.item}>
          <p className={styles.title}>Contact</p>
        </div>
      </div>
    </div>
  );
}
