import { Grid, Box, SvgIcon, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { primeiraLetraParaMaiscula } from '../../../utils/stringUtils';

function Pokemon({ pokemon }) {
	const [dadosPokemon, setDadosPokemon] = useState({});

	console.log(pokemon);
	return (
		<Grid container md={12} lg={12} display='flex'>
			<Grid item md={12} lg={12}>
				<Typography variant='h5' md={12} lg={12} textAlign='center' pb='1rem'>
					{primeiraLetraParaMaiscula(pokemon.name)}
				</Typography>
			</Grid >
			<Grid item md={6} lg={6} textAlign='center'>
				<Typography variant='subtitle1' pb='1rem'>
					Tipo: {primeiraLetraParaMaiscula(pokemon.types[0].type.name)}
				</Typography>
				{pokemon.stats.map((stat) => {
					return (
						<Typography>{primeiraLetraParaMaiscula(stat.stat.name)} = {stat.base_stat}</Typography>
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