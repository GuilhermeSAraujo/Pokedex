// import { StyledEngineProvider } from '@mui/material';
import { Grid } from '@mui/material';
import { useState } from 'react';
import { Header } from './components/header'
import { ListaOpcoes } from './components/listaOpcoes'
import { JanelaInformacoes } from './components/janelaInformacoes';

function App() {
  const [pokemon, setPokemon] = useState({});

  const displayInfoPokemon = (pokemon) => {
    setPokemon(pokemon);
  }

  return (
    <Grid lg={12}>
      <Header />
      <Grid lg={6} flex>
        <ListaOpcoes displayInfoPokemon={displayInfoPokemon} />
      </Grid>
      <Grid lg={6} flex>
        <JanelaInformacoes pokemon={pokemon} />
      </Grid>
    </Grid >
  );
}

export default App;
