import styles from "./style.module.scss";

export default function Menu() {
  return (
    <div className={styles.menu}>
      <div>
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
          <p className={styles.title}>projects</p>
        </div>
        <div className={styles.item}>
          <p className={styles.title}>projects</p>
        </div>
        <div className={styles.item}>
          <p className={styles.title}>projects</p>
        </div>
      </div>
    </div>
  );
}
