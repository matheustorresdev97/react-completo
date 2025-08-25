import { useState } from "react";

export default function App() {
  const [select, setSelect] = useState("");

  return (
    <form>
      <select
        value={select}
        onChange={({ target }) => setSelect(target.value)}
        id="produtos"
      >
        <option disabled value="">
          Selecione
        </option>
        <option value="notebook">Notebook</option>
        <option value="smartphone">Smartphone</option>
        <option value="tablet">Tablet</option>
      </select>
      {select}
    </form>
  );
}
