import styles from "../src/styles/Layout.module.css";

export default function Layout({ children }) {
  return (
    <div className={styles.layout}>
      <div className={styles.aside}>
        <h1>Board.</h1>
      </div>
      <div className={styles.signin}>{children}</div>
    </div>
  );
}
