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
    <Grid container md={12} lg={12} p='1.5rem' sx={{
      justifyContent: 'center',
      backgroundColor: '#87FF84',
      backgroundSize: '100%',
      heigth: '100%'
    }}
    >
      <Grid item md={12} lg={12} pb='2rem' textAlign='center'>
        <Header />
      </Grid>
      <Grid item md={6} lg={6} alignSelf='center'>
        <ListaOpcoes displayInfoPokemon={displayInfoPokemon} />
      </Grid>
      <Grid item md={6} lg={6}>
        <JanelaInformacoes pokemon={pokemon} />
      </Grid>
    </Grid >
  );
}

export default App;
