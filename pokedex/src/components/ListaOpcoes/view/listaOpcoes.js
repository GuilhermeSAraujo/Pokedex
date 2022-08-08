import { useEffect, useState } from 'react'
import ListaOpcoesService from '../services/listaOpcoesService';
// import { List, Grid } from '@mui/material';

function ListaOpcoes() {
	const [listaPokemons, setListaPokemons] = useState([]);

	useEffect(() => {
		const getListagem = async () => {
			let retorno = await ListaOpcoesService.obterListagem(100, 0);
			setListaPokemons(retorno);
		}
		getListagem();
	}, []);


	return (
		// <Grid container lg={12}>
		// 	<Grid item lg={6}>
		// 		<List>
		// 			<p>Teste</p>
		// 		</List>
		// 	</Grid>
		// </Grid>
		<p>Lista</p>
	);
}

export default ListaOpcoes;
