import { useEffect, useState } from 'react'
import Listagem from '../components/listagem.js'
import ListaOpcoesService from '../services/listaOpcoesService';
import { Box, Grid, Typography } from '@mui/material';
import RandomLoading from '../../../utils/components/randomLoading'

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
				{listaPokemons.length === 0 ? (
					<RandomLoading />
				) : <Listagem listaPokemons={listaPokemons} handleClickPokemon={handleClickPokemon} />}


			</Grid>
		</Grid>
	)
}

export default ListaOpcoes;
