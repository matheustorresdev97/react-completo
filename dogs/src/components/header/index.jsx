import { Link } from "react-router-dom";
import styles from "./header.module.css";

import Dogs from "../../assets/dogs.svg?react"; 


export function Header() {
  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} container`}>
        <Link to="/" className={styles.logo} aria-label="Dogs - Home">
          <Dogs />
        </Link>
        <Link to="/login" className={styles.login}>
          Login / Criar
        </Link>
      </nav>
    </header>
  );
}
