import { useState } from "react";

export default function App() {
  const [textarea, setTextarea] = useState("");

  return (
    <form>
      <textarea
        value={textarea}
        onChange={({ target }) => setTextarea(target.value)}
        rows="5"
      />
      {textarea}
    </form>
  );
}
