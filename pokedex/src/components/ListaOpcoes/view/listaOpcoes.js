import { useEffect, useState } from 'react'
import ListaOpcoesService from '../services/listaOpcoesService';
import { List, ListItem, ListItemText, Grid, ListItemButton } from '@mui/material';

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
		<Grid container lg={12} justifyContent='center'>
			<Grid item lg={6} maxWidth='350px' sx={{
				border: '5px',
			}}>
				<List dense={true} disablePadding={true}
					sx={{
						width: '100%',
						maxWidth: 360,
						bgcolor: 'background.paper',
						position: 'relative',
						overflow: 'auto',
						maxHeight: 300,
						'& ul': { padding: 0 },
					}}
					subheader={<li />}>
					{listaPokemons.length > 0 ?
						listaPokemons.map((p, index) => {
							return (
								<ListItem key={index}>
									<ListItemButton onClick={() => handleClickPokemon(p)}>
										<ListItemText primary={p.name} />
									</ListItemButton>
								</ListItem>
							)
						}) : <h3>Buscando Pokémons</h3>}
				</List>
			</Grid>
		</Grid>
	)
}

export default ListaOpcoes;
