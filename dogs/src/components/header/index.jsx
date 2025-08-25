import { Link } from "react-router-dom";
import styles from "./header.module.css";

import Dogs from "../../assets/dogs.svg?react";
import { useContext } from "react";
import { UserContext } from "../../user-context";

export function Header() {
  const { data, userLogout } = useContext(UserContext);

  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} container`}>
        <Link to="/" className={styles.logo} aria-label="Dogs - Home">
          <Dogs />
        </Link>
        {data ? (
          <Link to="/conta" className={styles.login}>
            {data.nome}
            <button onClick={userLogout}>Sair</button>
          </Link>
        ) : (
          <Link to="/login" className={styles.login}>
            Login / Criar
          </Link>
        )}
      </nav>
    </header>
  );
}
