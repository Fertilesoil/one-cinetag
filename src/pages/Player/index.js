import React from 'react'
import { useParams } from 'react-router-dom';

import Banner from 'components/Banner'
import Titulo from 'components/Titulo'
import NaoEncontrada from 'pages/NaoEncontrada';

import styles from "./Player.module.css";

const Player = () => {
  const [video, setVideo] = React.useState({});
  const parametros = useParams();

  React.useEffect(() => {
    fetch(`https://my-json-server.typicode.com/Fertilesoil/one-cinetag-api/videos?id=${parametros.id}`)
      .then(data => data.json())
      .then(data => setVideo(...data));
  }, []);

  return (
    <>
      <Banner imagem={`player`}>
        Player
      </Banner>

      <Titulo>
        <h1>Player</h1>
      </Titulo>

      <section className={styles.container}>

        {video ?
          <iframe
            width="100%"
            height="100%"
            src={video.link}
            title={video.titulo}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullscreen />
          : (<NaoEncontrada />)
        }
      </section>
    </>
  )
}

export default Player