import JanelaInformacoesRepository from "../../../repositories/janelaInformacoesRepository";

class JanelaInformacoesService {
	async obterDadosPokemon(name) {
		if (name) {
			let retorno = await JanelaInformacoesRepository.getInfoPokemons(name);
			if (retorno.status !== 200) {
				throw new Error("Erro na requisição a API");
			} else {
				return retorno.data;
			}
		}
	}
}
export default new JanelaInformacoesService();