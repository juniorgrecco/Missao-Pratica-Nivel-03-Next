import React from 'react';
import Livro from '../modelo/Livro';
import { controleEditora } from '../LivroLista';

export default function LinhaLivro(props: { livro: Livro; excluir: () => void }) {
	const nomeEditora = controleEditora.getNomeEditora(props.livro.codEditora);

	return (
		<tr>
			<td>
				{props.livro.titulo}
				<button onClick={props.excluir}>Excluir</button>
			</td>
			<td>{props.livro.resumo}</td>
			<td>
				<ul>
					{props.livro.autores.map((autor, index) => (
						<li key={index}>{autor}</li>
					))}
				</ul>
			</td>
			<td>{props.livro.codigo}</td>
			<td>{nomeEditora}</td>
		</tr>
	);
}
