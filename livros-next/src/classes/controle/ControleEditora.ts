import Editora from '../modelo/Editora';

let editoras: Editora[] = [
	{ nome: 'Brinquedo', codEditora: 279 },
	{ nome: 'Bola de neve', codEditora: 142 },
	{ nome: 'YumiYumi', codEditora: 3580 },
];

export default class ControleEditora {
	getNomeEditora(codEditora: number): string {
		return editoras.filter((editora) => editora.codEditora === codEditora)[0].nome;
	}

	getEditoras(): Editora[] {
		return editoras;
	}
}
