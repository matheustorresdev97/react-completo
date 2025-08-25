import { Link } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { TOKEN_POST, USER_GET } from "../../api.js";

import { Button } from "../../components/forms/button";
import { Input } from "../../components/forms/input";
import { useContext, useEffect } from "react";

import { UserContext } from "../../user-context";

export function LoginForm() {
  const username = useForm();
  const password = useForm();

  const { userLogin } = useContext(UserContext);

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
    <section>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <Input label="Usuário" type="text" name="username" {...username} />
        <Input label="Senha" type="password" name="password" {...password} />

        <Button>Entrar</Button>
      </form>

      <Link to="/login/criar">Cadastro</Link>
    </section>
  );
}
