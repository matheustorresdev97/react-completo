import { Header } from "./Header";
import { Home } from './Home';
import { Produtos } from './Produtos';

export default function App() {
  const { pathname } = window.location;

  let Page;

  if (pathname === '/produtos') {
    Page = Produtos;
  } else {
    Page = Home;
  }

  return (
    <section>
      <Header />
      <Page />
    </section>
  )
};


