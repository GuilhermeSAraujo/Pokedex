import axios from 'axios';
class ListagemRepository {
	async getListagem(limit, offset) {
		let retorno = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`);
		return retorno;
	}
}
export default new ListagemRepository();