import "./App.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Header } from "./components/header";
import { Footer } from "./components/footer";

import { Home } from "./pages/home";
import { Login } from "./pages/login";
import { LoginForm } from "./pages/login/login-form";
import { LoginCreate } from "./pages/login/login-create";
import { LoginPasswordLost } from "./pages/login/login-password-lost";
import { LoginPasswordReset } from "./pages/login/login-password-reset";

import { UserContext, UserStorage } from "./user-context";
import { useContext } from "react";

export default function App() {
  const { login } = useContext(UserContext);

  if (login === true) return <Navigate to="/conta" />;

  return (
    <div>
      <BrowserRouter>
        <UserStorage>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />}>
              <Route index element={<LoginForm />} />
              <Route path="criar" element={<LoginCreate />} />
              <Route path="perdeu" element={<LoginPasswordLost />} />
              <Route path="resetar" element={<LoginPasswordReset />} />
            </Route>
          </Routes>
          <Footer />
        </UserStorage>
      </BrowserRouter>
    </div>
  );
}
