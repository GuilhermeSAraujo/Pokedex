import { Grid, Box, SvgIcon, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { Pokemon } from '../../pokemon'
import JanelaInformacoesService from '../services/janelaInformacoesService'

function JanelaInformacoes({ pokemon }) {
	const [dadosPokemon, setDadosPokemon] = useState({});

	useEffect(() => {
		const getDadosPokemon = async () => {
			let retorno = await JanelaInformacoesService.obterDadosPokemon(pokemon.name);
			setDadosPokemon(retorno);
		}
		if (pokemon) {
			getDadosPokemon();
		}
	}, [pokemon]);
	return (
		<Grid lg={12} justifyContent='center' sx={{
			padding: '5px',
			paddingBottom: '1.75rem'
		}}>
			{dadosPokemon && dadosPokemon.sprites ? (
				<Pokemon pokemon={dadosPokemon} />
			) : (<Typography variant='h6' md={12} lg={12} textAlign='center'>
				Nenhum Pokémon selecionado
			</Typography>)}
		</Grid>
	);
}

export default JanelaInformacoes;
