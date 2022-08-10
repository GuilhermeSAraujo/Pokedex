import { Grid, Box, SvgIcon } from '@mui/material';
import { useEffect, useState } from 'react';
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
	console.log(dadosPokemon);
	return (
		<Grid lg={12}>
			<Grid lg={6}>
				{dadosPokemon && dadosPokemon.sprites ? (
					<Box
						component="img"
						sx={{
							height: 300,
							width: 300,
							// maxHeight: { xs: 233, md: 167 },
							// maxWidth: { xs: 350, md: 250 },
						}}
						alt="The house from the offer."
						src={dadosPokemon.sprites.front_default}
					/>
				) : (<h3>Nenhum pokemon selecionado</h3>)}
			</Grid>
		</Grid>
	);
}

export default JanelaInformacoes;
