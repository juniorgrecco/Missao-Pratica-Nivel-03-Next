'use client';

import React from 'react';
import LinhaLivro from './LinhaLivro';
import Livro from '@/classes/modelo/Livro';

export default function LivroLista() {
	const [livros, setLivros] = React.useState<Livro[]>([]);
	const [carregado, setCarregado] = React.useState(false);

	React.useEffect(() => {
		obterLivros()
			.then(async (res) => setLivros(await res.json()))
			.finally(() => setCarregado(true));
	}, [carregado]);

	const baseURL = 'http://localhost:3000/api/livros';

	async function obterLivros() {
		return await fetch(baseURL, { method: 'GET' });
	}

	async function excluirLivro(codigo: number) {
		return (await fetch(`${baseURL}/${codigo}`, { method: 'DELETE' })).ok;
	}
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
								excluirLivro(livro.codigo);
								setCarregado(false);
							}}
						/>
					))}
				</tbody>
			</table>
		</main>
	);
}
