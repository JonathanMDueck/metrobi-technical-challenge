import styles from "./styles.module.css";

export default function Sidebar() {
  return (
    <div className={styles.sidebarSection}>
      <div className={styles.hero}>Hero</div>
      <div className={styles.sidebar}>Sidebar</div>
    </div>
  );
}
