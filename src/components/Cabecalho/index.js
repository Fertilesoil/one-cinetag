import React from 'react';
import styles from "./Cabecalho.module.css";
import { Link } from 'react-router-dom';
import logo from "./Logo-cinetag-branco 1.png";
import CabecalhoLink from 'components/CabecalhoLink';

const Cabecalho = () => {
  return (
    <header className={styles.cabecalho}>
      <Link to={`./`}>
        <img src={logo} alt="Logo cinetag" />
      </Link>

      <nav className={styles.navegacao}>

        <CabecalhoLink url={`./`} className={styles.link}>
          Home
        </CabecalhoLink>

        <CabecalhoLink url={`./favoritos`}>
          Favoritos
        </CabecalhoLink>

      </nav>
    </header>
  )
}

export default Cabecalho