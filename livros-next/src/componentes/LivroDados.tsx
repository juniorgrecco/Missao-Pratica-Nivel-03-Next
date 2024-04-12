'use client';

import { controleEditora } from '@/app/api/editoras/route';
import { controleLivro } from '@/app/api/livros/route';
import Livro from '@/classes/modelo/Livro';
import { useRouter } from 'next/navigation';
import React from 'react';

export default function LivroDados() {
	const opcoes = controleEditora
		.getEditoras()
		.map((editora) => ({ value: editora.codEditora, text: editora.nome }));

	const [titulo, setTitulo] = React.useState('');
	const [resumo, setResumo] = React.useState('');
	const [autores, setAutores] = React.useState('');
	const [codEditora, setCodEditora] = React.useState(opcoes[0].value);

	const baseURL = 'http://localhost:3000/api/livros';

	const navigate = useRouter();

	async function incluirLivro(livro: Livro) {
		fetch(baseURL, { method: 'POST', body: JSON.stringify(livro) });
	}

	function tratarCombo(evento: any) {
		setCodEditora(+evento.target.value);
	}

	async function incluir(event: any) {
		event.preventDefault();
		const livro = new Livro(titulo, resumo, autores.split('\n'), codEditora, 0);
		await incluirLivro(livro);
		navigate.push('/');
	}

	return (
		<main>
			<h1>Adicionar livro</h1>
			<form onSubmit={incluir}>
				<label>
					Titulo <input required value={titulo} onChange={(e) => setTitulo(e.target.value)} />
				</label>
				<label>
					Resumo <input required value={resumo} onChange={(e) => setResumo(e.target.value)} />
				</label>
				<label>
					Autores <input required value={autores} onChange={(e) => setAutores(e.target.value)} />
				</label>
				<label>
					Editoras{' '}
					<select onChange={tratarCombo}>
						{opcoes.map((opcao, index) => (
							<option key={index} value={opcao.value}>
								{opcao.text}
							</option>
						))}
					</select>
				</label>
				<button>Enviar</button>
			</form>
		</main>
	);
}
