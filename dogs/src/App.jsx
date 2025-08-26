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

import { User } from "./pages/user";
import { ProtectedRoute } from "./components/helper/protected-route";

import { Feed } from "./pages/user/feed";
import { UserPhotoPost } from "./pages/user/user-photo-post";
import { UserStats } from "./pages/user/user-stats";

import { UserStorage } from "./user-context";

export default function App() {
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
            <Route
              path="conta/"
              element={
                <ProtectedRoute>
                  <User />
                </ProtectedRoute>
              }
            >
              <Route index element={<Feed />} />
              <Route path="postar" element={<UserPhotoPost />} />
              <Route path="estatisticas" element={<UserStats />} />
            </Route>
          </Routes>
          <Footer />
        </UserStorage>
      </BrowserRouter>
    </div>
  );
}
