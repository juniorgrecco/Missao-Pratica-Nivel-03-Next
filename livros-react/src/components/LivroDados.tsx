import React from 'react';
import ControleEditora from '../controle/ControleEditora';
import ControleLivros from '../controle/ControleLivros';
import { useNavigate } from 'react-router-dom';
import Livro from '../modelo/Livro';

const controleEditora = new ControleEditora();
const controleLivro = new ControleLivros();

export default function LivroDados() {
	const opcoes = controleEditora
		.getEditoras()
		.map((editora) => ({ value: editora.codEditora, text: editora.nome }));

	const [titulo, setTitulo] = React.useState('');
	const [resumo, setResumo] = React.useState('');
	const [autores, setAutores] = React.useState('');
	const [codEditora, setCodEditora] = React.useState(opcoes[0].value);

	const navigate = useNavigate();

	function tratarCombo(evento: any) {
		setCodEditora(+evento.target.value);
	}

	function incluir(event: any) {
		event.preventDefault();
		const livro = new Livro(titulo, resumo, autores.split('\n'), codEditora, 0);
		controleLivro.incluir(livro);
		navigate('/');
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
