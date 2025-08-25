import styles from './Contato.module.css';
import foto from '../img/contato.jpg';


const Contato = () => {
  return (
    <section className={`${styles.contato} animeLeft`}>
      <img src={foto} alt="Máquina de escrever" />
      <div>
        <h1>Entre em contato.</h1>
        <ul className={styles.dados}>
          <li>andre@origamid.com</li>
          <li>99999-9999</li>
          <li>Rua Ali Perto, 999</li>
        </ul>
      </div>
    </section>
  );
};

export default Contato;
