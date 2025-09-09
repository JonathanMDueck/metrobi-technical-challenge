import styles from "./styles.module.css";

export default function Content() {
  return (
    <div className={styles.content}>
      <main className={styles.main}>
        <span>Main Content</span>
        <p className={styles.text}>
          ** If things do not look right, make sure you browser is in
          "Experimental Mode".
        </p>
      </main>
      <div className={styles.extra}>
        <span>Extra Content</span>
      </div>
    </div>
  );
}
