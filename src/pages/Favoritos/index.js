import Banner from 'components/Banner'
import Titulo from 'components/Titulo'
import styles from "./Favoritos.module.css";
import Card from 'components/Card';
import { useFavoritoContext } from 'contextos/Favoritos';

const Favoritos = () => {
  const { favorito } = useFavoritoContext();
  return (
    <>
      <Banner imagem={`favoritos`} />

      <Titulo>
        <h1>Meus Favoritos</h1>
      </Titulo>

      <section className={styles.container}>
        {favorito.map(fav => (
          <Card {...fav} key={fav.id} />
        ))}
        {/* <Card id={20} titulo={`Harmoniosa`} capa={`https://i.imgur.com/ZeXo8Bn.jpeg`} /> */}
      </section>
    </>
  )
}

export default Favoritos