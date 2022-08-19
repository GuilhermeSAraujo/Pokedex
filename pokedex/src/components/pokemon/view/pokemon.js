import { Grid, Box, Typography, Divider } from '@mui/material';
import { useEffect, useState } from 'react';
import { primeiraLetraParaMaiscula } from '../../../utils/stringUtils';
import { obtemTipo, obtemStat } from '../../../utils/pokemonUtil';

function Pokemon({ pokemon }) {
	const [dadosPokemon, setDadosPokemon] = useState({});

	const obtemIconeTipo = (tipoPokemon) => {
		let tipo = obtemTipo(tipoPokemon);
		return tipo.icon;
	}

	console.log(pokemon);
	return (
		<Grid container md={12} lg={12} display='flex' sx={{
			boxShadow: '0px 0px 10px -6px #000000',
			borderRadius: '5%',
			paddingBottom: '1.5rem'
		}}>
			<Grid item md={12} lg={12}>
				<Typography variant='h5' md={12} lg={12} textAlign='center' pb='1rem' pt='1rem'>
					{primeiraLetraParaMaiscula(pokemon.name)}
				</Typography>
			</Grid >
			<Grid item md={6} lg={6} textAlign='center'>
				<Box flexDirection='row'>
					<Box
						component="img"
						sx={{
							maxWidth: '10%',
							marginRight: '0.5rem'
						}}
						src={obtemIconeTipo(pokemon.types[0].type.name)}
					/>
					<Typography variant='subtitle1' pb='1rem' md={6} lg={6}>
						{`Type: ${primeiraLetraParaMaiscula(pokemon.types[0].type.name)}`}
					</Typography>
				</Box>
				<Typography variant='body1' pb='0.5rem' md={6} lg={6}>
					<Divider variant='middle'><strong>Stats</strong></Divider>
				</Typography>
				{pokemon.stats.map((stat) => {
					return (
						<Typography pb='0.5rem'>{`${obtemStat(stat.stat.name)} ${primeiraLetraParaMaiscula(stat.stat.name)}`} = {stat.base_stat}</Typography>
					)
				})}
			</Grid>
			<Grid item md={6} lg={6} textAlign='center'>
				<Box
					component="img"
					alt={`Pokémon ${pokemon.name}`}
					src={pokemon.sprites.front_default}
					sx={{
						height: 250,
						width: 250,
					}}
				/>
			</Grid>
		</Grid >
	);
}

export default Pokemon;