import { Grid, Box } from '@mui/material';
import PokeLogo from '../../../assets/PokeLogo.svg';

function Header() {
	return (
		<Grid container md={12} lg={12}>
			<Grid item md={12} lg={12}>
				<Box
					component="img"
					sx={{
						maxWidth: '10%',
						textAlign: 'center',
						paddingBottom: '1.5rem'
					}}
					src={PokeLogo}
				/>
			</Grid>
		</Grid>
	);
}

export default Header;
