import React from 'react';
import Livro from '../modelo/Livro';
import { controleLivro } from '../LivroLista';
import LinhaLivro from './LinhaLivro';

export default function LivroLista() {
	const [livros, setLivros] = React.useState<Livro[]>([]);
	const [carregado, setCarregado] = React.useState(false);

	React.useEffect(() => {
		setLivros(controleLivro.obterLivros());
		setCarregado(true);
	}, [carregado]);

	return (
		<main>
			<h1>Tabela de livros</h1>
			<table>
				<thead>
					<tr>
						<th>Titulo</th>
						<th>Resumo</th>
						<th>Autores</th>
						<th>Codigo do livro</th>
						<th>Editora</th>
					</tr>
				</thead>
				<tbody>
					{livros.map((livro, index) => (
						<LinhaLivro
							key={index}
							livro={livro}
							excluir={() => {
								controleLivro.excluir(livro.codigo);
								setCarregado(false);
							}}
						/>
					))}
				</tbody>
			</table>
		</main>
	);
}
