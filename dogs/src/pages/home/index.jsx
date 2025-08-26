import Feed from "../user/feed";

import { Head } from "../../components/helper/head";

export default function Home() {
  return (
    <section className="container mainContainer">
      <Head
        title="Fotos"
        description="Home do site Dogs, com o feed de fotos."
      />

      <Feed />
    </section>
  );
}
