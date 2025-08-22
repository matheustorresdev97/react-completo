import { GlobalContext } from './GlobalContext';

export function Limpar() {
    const { limparDados } = React.useContext(GlobalContext);
    return <button onClick={limparDados}>Limpar</button>;
};


