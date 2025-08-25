import { Route, Routes } from "react-router-dom";
import { LoginForm } from "./login-form";
import { LoginCreate } from "./login-create";
import { LoginPasswordLost } from "./login-password-lost";
import { LoginPasswordReset } from "./login-password-reset";

export function Login() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="criar" element={<LoginCreate />} />
        <Route path="perdeu" element={<LoginPasswordLost />} />
        <Route path="resetar" element={<LoginPasswordReset />} />
      </Routes>
    </div>
  );
}
