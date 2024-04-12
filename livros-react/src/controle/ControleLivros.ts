import Livro from '../modelo/Livro';

let livros: Livro[] = [
	{ codigo: 0, autores: ['Jhon Doe'], titulo: 'Titulo 1', resumo: 'Resumo 1', codEditora: 279 },
	{
		codigo: 1,
		autores: ['Maria Lagos'],
		titulo: 'Minha historia.',
		resumo: 'Minha historia completa.',
		codEditora: 3580,
	},
	{
		codigo: 2,
		autores: ['Lucas Pavos'],
		titulo: 'Carros da noite',
		resumo: 'Um livro sobre corridas',
		codEditora: 142,
	},
];

export default class ControleLivros {
	obterLivros(): Livro[] {
		return livros;
	}
	incluir(livro: Livro) {
		livro.codigo =
			livros.reduce((maior, atual) => {
				if (atual.codigo > maior) maior = atual.codigo;
				return maior;
			}, 0) + 1;

		livros.push(livro);
	}
	excluir(codigo: number) {
		const index = livros.findIndex((livro) => livro.codigo === codigo);
		livros.splice(index, 1);
	}
}
