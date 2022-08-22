import { List, ListItem, ListItemText, Grid, ListItemButton } from '@mui/material';

function Listagem({ listaPokemons, handleClickPokemon }) {

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
						}) : (<></>)}
				</List>
			</Grid>
		</Grid>
	)
}

export default Listagem;
