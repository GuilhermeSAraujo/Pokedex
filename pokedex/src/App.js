// import { StyledEngineProvider } from '@mui/material';
import { useState } from 'react';
import { Header } from './components/header'
import { ListaOpcoes } from './components/listaOpcoes'
import { JanelaInformacoes } from './components/janelaInformacoes';

function App() {
  const [pokemon, setPokemon] = useState({});

  const displayInfoPokemon = (pokemon) => {
    console.log(pokemon);
    setPokemon(pokemon);
  }

  return (
    <>
      <Header />
      <ListaOpcoes displayInfoPokemon={displayInfoPokemon} />
      <JanelaInformacoes pokemon={pokemon} />
    </>
  );
}

export default App;
