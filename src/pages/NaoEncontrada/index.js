import React from 'react'
import styles from "./NaoEncontrada.module.css";

const NaoEncontrada = () => {
  return (
    <section className={styles.container}>
      <h2>Oops!</h2>
      <p>o conteúdo que você procura não foi encontrado!</p>
    </section>
  )
}

export default NaoEncontrada