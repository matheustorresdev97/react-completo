import React, { Suspense, useState } from 'react';
// import Contato from './Contato';
const Contato = React.lazy(() => import('./Contato'));

const App = () => {
  const [ativo, setAtivo] = useState(false);

  return (
    <div>
      {ativo && (
        <Suspense fallback={<div>Carregando...</div>}>
          <Contato />
        </Suspense>
      )}
      <button onClick={() => setAtivo(true)}>Ativar</button>
    </div>
  );
};

export default App;
