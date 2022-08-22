import { Box } from '@mui/material';
import { BulbassaurGif, GastlyGif, MewGif, PikachuGif } from '../../assets/loading';

function RandomLoading() {
	const obtemImagemLoading = () => {
		let num = Math.floor(Math.random() * 4);
		console.log(num);
		switch (num) {
			case 1:
				return (<Box
					component="img"
					sx={{
						maxWidth: '50%',
						marginRight: '0.5rem'
					}}
					src={BulbassaurGif}
				/>);
			case 2:
				return (<Box
					component="img"
					sx={{
						maxWidth: '50%',
						marginRight: '0.5rem'
					}}
					src={GastlyGif}
				/>)
			case 3:
				return (<Box
					component="img"
					sx={{
						maxWidth: '50%',
						marginRight: '0.5rem'
					}}
					src={MewGif}
				/>)
			case 4:
				return (<Box
					component="img"
					sx={{
						maxWidth: '50%',
						marginRight: '0.5rem'
					}}
					src={PikachuGif}
				/>)
			default:
				return (<Box
					component="img"
					sx={{
						maxWidth: '50%',
						marginRight: '0.5rem'
					}}
					src={PikachuGif}
				/>)
		}
	}

	console.log(obtemImagemLoading())
	return (
		<>
			{obtemImagemLoading()}
		</>
	)
}

export default RandomLoading;
