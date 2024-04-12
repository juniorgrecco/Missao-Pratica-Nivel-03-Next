export default class Editora {
	codEditora: number;
	nome: string;

	constructor(nome: string, codEditora: number = 0) {
		this.codEditora = codEditora;
		this.nome = nome;
	}
}
