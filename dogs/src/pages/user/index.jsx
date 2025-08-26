import { Route, Routes } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../user-context";

import { UserHeader } from "../../components/user-header";

import Feed from "./feed";
import UserPhotoPost from "./user-photo-post";
import UserStats from "./user-stats";
import NotFound from "../not-found";
import { Head } from "../../components/helper/head";

export default function User() {
  const { data } = useContext(UserContext);

  return (
    <section className="container">
      <Head title="Minha conta" />

      <UserHeader />
      <Routes>
        <Route path="/" element={<Feed user={data.id} />} />
        <Route path="postar" element={<UserPhotoPost />} />
        <Route path="estatisticas" element={<UserStats />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </section>
  );
}
