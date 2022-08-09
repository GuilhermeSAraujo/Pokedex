import { useEffect, useState } from 'react'
import ListaOpcoesService from '../services/listaOpcoesService';
import { List, ListItem, ListItemText, Grid } from '@mui/material';

function ListaOpcoes() {
	const [listaPokemons, setListaPokemons] = useState([]);

	useEffect(() => {
		const getListagem = async () => {
			let retorno = await ListaOpcoesService.obterListagem(5, 0);
			setListaPokemons(retorno);
		}
		getListagem();
	}, []);
	console.log(listaPokemons);
	return (
		<Grid container lg={12}>
			<Grid item lg={6}>
				<List dense={true}>
					{listaPokemons.map((p) => <ListItemText primary={p.name} />)}
				</List>
			</Grid>
		</Grid>
	);
}

export default ListaOpcoes;
