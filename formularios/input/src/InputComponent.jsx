import { useState } from "react";
import { Checkbox } from "./Form/Checkbox";
import { Radio } from "./Form/Radio";
import { Input } from "./Form/Input";
import { Select } from "./Form/Select";

export function InputComponent() {
  const [termos, setTermos] = useState([]);
  const [linguagens, setLinguagens] = useState([]);
  const [cor, setCor] = useState("Vermelho");
  const [frutas, setFrutas] = useState("");
  const [produto, setProduto] = useState("");
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");

  return (
    <form>
      <h2>Termos</h2>
      <Checkbox
        options={["Li e aceito os termos."]}
        value={termos}
        setValue={setTermos}
      />

      <h2>Checkbox</h2>
      <Checkbox
        options={["JavaScript", "PHP", "Ruby"]}
        value={linguagens}
        setValue={setLinguagens}
      />

      <h2>Cores</h2>
      <Radio options={["Azul", "Vermelho"]} value={cor} setValue={setCor} />

      <h2>Frutas</h2>
      <Radio
        options={["Limão", "Laranja", "Uva"]}
        value={frutas}
        setValue={setFrutas}
      />

      <Select
        options={["Smartphone", "Tablet"]}
        value={produto}
        setValue={setProduto}
      />
      <Input id="nome" label="Nome" value={nome} setValue={setNome} required />
      <Input id="email" label="Email" value={email} setValue={setEmail} />
      <button>Enviar</button>
    </form>
  );
}
