import { GlobalStorage } from './GlobalContext';
import { Produto } from './Produto';
import { Limpar } from './Limpar';

export default function App() {
  return (
    <GlobalStorage>
      <Produto />
      <Limpar />
    </GlobalStorage>
  )
}
