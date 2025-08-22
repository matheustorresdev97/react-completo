import { GlobalContext } from './GlobalContext';

export function Produto() {
    const { dados } = useContext(GlobalContext);
    if (dados === null) return null;
    return (
        <div>
            Produto:{' '}
            {dados.map((produto) => (
                <li key={produto.id}>{produto.nome}</li>
            ))}
        </div>
    );
};


