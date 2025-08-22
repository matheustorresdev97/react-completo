import { Footer } from "./Footer";
import { Form } from "./Form/Form";
import { Header } from "./Header";

const Teste = () => {
  const active = true;
  if (active) {
    return <p>Teste</p>;
  } else {
    return null;
  }
};

export default function App() {
  return (
    <section>
      <Teste />
      <Header />
      <Form />
      <Footer />
    </section>
  )
};


