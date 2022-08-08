import ListagemRepository from "../../../repositories/listagemRepository";
class ListaOpcoes {
	async obterListagem(limit, offset) {
		let retorno = await ListagemRepository.getListagem(limit, offset);
		if (retorno.status !== 200) {
			throw new Error("Erro na requisição a API");
		} else {
			return retorno.data.results;
		}
	}
}
export default new ListaOpcoes();