import styles from "./footer.module.css";
import Dogs from "../../assets/dogs.svg?react";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <Dogs />
      <p>Dogs. Alguns direitos reservados. &copy;</p>
    </footer>
  );
}
