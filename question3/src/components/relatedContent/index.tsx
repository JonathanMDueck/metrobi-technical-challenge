import styles from "./styles.module.css";

export default function RelatedContent() {
  return (
    <div className={styles.relatedContent}>
      <div className={styles.images}>Related Images</div>
      <div className={styles.posts}>Related Posts</div>
    </div>
  );
}
