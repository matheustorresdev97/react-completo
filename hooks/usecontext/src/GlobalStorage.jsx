import { createContext, useState } from "react";

export const GlobalContext = createContext();

export function GlobalStorage({ children }) {
    const [dados, setDados] = useState(null);

    React.useEffect(() => {
        fetch('https://ranekapi.origamid.dev/json/api/produto/')
            .then((response) => response.json())
            .then((json) => setDados(json));
    }, []);

    function limparDados() {
        setDados(null);
    }

    return (
        <GlobalContext.Provider value={{ dados, limparDados }}>
            {children}
        </GlobalContext.Provider>
    );
};
