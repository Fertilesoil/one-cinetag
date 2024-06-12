import React from "react";

export const FavoritosContext = React.createContext();

FavoritosContext.displayName = "Favoritos";

const FavoritosProvider = ({ children }) => {

  const [favorito, setFavorito] = React.useState([]);

  const shared = {
    favorito,
    setFavorito
  }

  return (
    <FavoritosContext.Provider value={shared}>
      {children}
    </FavoritosContext.Provider>
  )
}

export default FavoritosProvider

export const useFavoritoContext = () => {
  const { favorito, setFavorito } = React.useContext(FavoritosContext);

  const adicionarFavorito = (novoFavorito) => {
    const favoritoRepetido = favorito.some(item => item.id === novoFavorito.id);

    let novaLista = [...favorito];

    if (!favoritoRepetido) {
      novaLista.push(novoFavorito);
      return setFavorito(novaLista);
    }

    novaLista = favorito.filter((fav) => fav.id !== novoFavorito.id);
    return setFavorito(novaLista);
  }

  return {
    favorito,
    adicionarFavorito
  }
};