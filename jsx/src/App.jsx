


export default function App() {

  const titulo = <h1>Esse é um título</h1>;

  const random = Math.random();
  const ativo = false;

  function mostrarNome(sobrenome) {
    return 'Matheus ' + sobrenome;
  }

  const carro = {
    marca: 'Ford',
    rodas: '4',
  };

  const estiloP = {
    color: 'blue',
    fontSize: '2rem',
  };

  const luana = {
    cliente: 'Luana',
    idade: 27,
    compras: [
      { nome: 'Notebook', preco: 'R$ 2500' },
      { nome: 'Geladeira', preco: 'R$ 3000' },
      { nome: 'Smartphone', preco: 'R$ 1500' },
    ],
    ativa: true,
  };

  const mario = {
    cliente: 'Mario',
    idade: 31,
    compras: [
      { nome: 'Notebook', preco: 'R$ 2500' },
      { nome: 'Geladeira', preco: 'R$ 3000' },
      { nome: 'Smartphone', preco: 'R$ 1500' },
      { nome: 'Guitarra', preco: 'R$ 3500' },
    ],
    ativa: false,
  };

  const dados = luana;
  const total = dados.compras
    .map((item) => Number(item.preco.replace('R$ ', '')))
    .reduce((a, b) => a + b, 0);

  return (
    <>
      {titulo}
      <p>
        {true ? 'asdasd' : 'dsadas'} - {10}
        {mostrarNome('Torres')}
      </p>
      <p style={estiloP}>{new Date().getFullYear()}</p>
      <p style={estiloP}>{carro.marca}</p>
      <p>{carro.rodas}</p>
      <p className={ativo ? 'ativo' : 'inativo'}>{(random * 1000) / 50}</p>

      <h1>EXERCÍCIO</h1>
      <div>
        <p>Nome: {dados.cliente}</p>
        <p>Idade: {dados.idade}</p>
        <p>
          Situação:{' '}
          <span style={{ color: dados.ativa ? 'green' : 'red' }}>
            {dados.ativa ? 'Ativa' : 'Inativa'}
          </span>
        </p>
        <p>Total: R$ {total}</p>
        {total > 10000 && <p>Você está gastando muito</p>}
      </div>
    </>
  )
}
