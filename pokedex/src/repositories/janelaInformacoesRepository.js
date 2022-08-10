import axios from 'axios';
class JanelaInformacoesRepository {
	async getInfoPokemons(name) {
		let retorno = await axios.get(`https://pokeapi.co/api/v2/pokemon-form/${name}`);
		return retorno;
	}
}
export default new JanelaInformacoesRepository();