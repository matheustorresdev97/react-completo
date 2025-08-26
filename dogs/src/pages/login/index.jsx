import { useContext } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { UserContext } from "../../user-context";
import styles from "./login.module.css";

import LoginForm from "./login-form";
import LoginCreate from "./login-create";
import LoginPasswordLost from "./login-password-lost";
import LoginPasswordReset from "./login-password-reset";
import NotFound from "../not-found";

export default function Login() {
  const { login } = useContext(UserContext);

  if (login === true) return <Navigate to="/conta" />;
  return (
    <section className={styles.login}>
      <div className={styles.forms}>
        <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="criar" element={<LoginCreate />} />
        <Route path="perdeu" element={<LoginPasswordLost />} />
        <Route path="resetar" element={<LoginPasswordReset />} />
        <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </section>
  );
}
