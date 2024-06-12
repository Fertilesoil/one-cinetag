import Banner from 'components/Banner';
import Card from 'components/Card';
import Titulo from 'components/Titulo';
import React from 'react';
import styles from "./Inicio.module.css";

const Inicio = () => {
  const [videos, setVideos] = React.useState([]);

  React.useEffect(() => {
    fetch(`https://my-json-server.typicode.com/Fertilesoil/one-cinetag-api/videos`)
      .then(data => data.json())
      .then(data => setVideos([...data]));
  }, []);
  return (
    <>
      <Banner imagem={`home`} />

      <Titulo>
        <h1>Um lugar para guardar seus vídeos e filmes!</h1>
      </Titulo>

      <section className={styles.container}>
        {videos.map(({ id, titulo, capa }) => {
          return <Card key={id} id={id} titulo={titulo} capa={capa} />
        })}
      </section>
    </>
  )
}

export default Inicio