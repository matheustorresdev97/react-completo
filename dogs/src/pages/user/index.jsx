import { Outlet } from "react-router-dom";
import {} from "../../components/user-header";

export function User() {
  return (
    <section className="container">
      <UserHeader />
      <Outlet />
    </section>
  );
}
