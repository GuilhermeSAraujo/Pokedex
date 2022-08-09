// import { StyledEngineProvider } from '@mui/material';
import { useState } from 'react';
import { Header } from './components/header'
import { ListaOpcoes } from './components/listaOpcoes'
import { JanelaInformacoes } from './components/janelaInformacoes';

function App() {
  const [mostrarJanela, setMostrarJanela] = useState(false);

  const displayInfoPokemon = (pokemon) => {
    console.log(pokemon);
  }

  return (
    <>
      <Header />
      <ListaOpcoes displayInfoPokemon={displayInfoPokemon} />
      <JanelaInformacoes />
    </>
  );
}

export default App;
