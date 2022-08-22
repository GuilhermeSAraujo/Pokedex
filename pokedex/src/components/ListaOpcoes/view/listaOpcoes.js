import { useEffect, useState } from 'react'
import Listagem from '../components/listagem.js'
import ListaOpcoesService from '../services/listaOpcoesService';
import Pikachu from '../../../assets/pikachu.gif';
import { Box, Grid, Typography } from '@mui/material';

function ListaOpcoes({ displayInfoPokemon }) {
	const [listaPokemons, setListaPokemons] = useState([]);

	useEffect(() => {
		const getListagem = async () => {
			let retorno = await ListaOpcoesService.obterListagem(1500, 0);
			setListaPokemons(retorno);
		}
		getListagem();
	}, []);

	const handleClickPokemon = (pokemon) => {
		displayInfoPokemon(pokemon);
	}

	return (

		<Grid container lg={12} justifyContent='center' textAlign='center'>
			<Grid item lg={6} maxWidth='350px' sx={{
				border: '5px',
			}}>
				<Typography variant='h6' textAlign='center' pb='1rem'>
					Selecione seu Pokémon
				</Typography>
				{listaPokemons.length === 0 ? (<Box
					component="img"
					sx={{
						maxWidth: '30%',
						marginRight: '0.5rem'
					}}
					src={Pikachu}
				/>) : <Listagem listaPokemons={listaPokemons} handleClickPokemon={handleClickPokemon} />}


			</Grid>
		</Grid>
	)
}

export default ListaOpcoes;
