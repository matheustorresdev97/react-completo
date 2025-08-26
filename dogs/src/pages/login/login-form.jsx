import { Link } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { USER_GET } from "../../api.js";
import  styles  from "./login-form.module.css";
import  stylesBtn  from "../../components/forms/button/button.module.css";
import { Button } from "../../components/forms/button";
import { Input } from "../../components/forms/input";
import { useContext, useEffect } from "react";

import { UserContext } from "../../user-context";
import { Error } from "../../components/helper/error";

export default function LoginForm() {
  const username = useForm();
  const password = useForm();

  const { userLogin, error, loading } = useContext(UserContext);

  useEffect(() => {
    const token = window.localStorage.getItem("token");

    if (token) {
      getUser(token);
    }
  }, []);

  async function getUser(token) {
    const { url, options } = USER_GET(token);
    const response = await fetch(url, options);
    const json = await response.json();
    console.log(json);
  }

  async function handleSubmit(event) {
    event.preventDefault();

    if (username.validate() && password.validate()) {
      userLogin(username.value, password.value);
    }
  }

  return (
    <section className="animeLeft">
      <h1 className="title">Login</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <Input label="Usuário" type="text" name="username" {...username} />
        <Input label="Senha" type="password" name="password" {...password} />
        {loading ? (
          <Button disabled>Carregando...</Button>
        ) : (
          <Button>Entrar</Button>
        )}
        {error && <Error error={error} />}
      </form>

      <Link className={styles.perdeu} to="/login/perdeu">
        Perdeu a Senha?
      </Link>

      <div className={styles.cadastro}>
        <h2 className={styles.subtitle}>Cadastre-se</h2>
        <p>Ainda não possui conta? Cadastre-se no site.</p>
        <Link className={stylesBtn.button} to="/login/criar">
          Cadastro
        </Link>
      </div>
    </section>
  );
}
