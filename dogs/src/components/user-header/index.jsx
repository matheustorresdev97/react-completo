import styles from "./user-header.module.css";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import UserHeaderNav from "../user-header-nav/user-header-nav";

export function UserHeader() {
  const [title, setTitle] = useState("");
  const location = useLocation();

  React.useEffect(() => {
    const { pathname } = location;

    switch (pathname) {
      case "/conta/estatisticas":
        setTitle("Estatísticas");
        break;
      case "/conta/postar":
        setTitle("Poste sua foto");
        break;
      default:
        setTitle("Minha conta");
    }
  }, [location]);

  return (
    <header className={styles.header}>
      <h1 className="title">{title}</h1>
      <UserHeaderNav />
    </header>
  );
}
