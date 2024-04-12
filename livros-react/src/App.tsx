import './App.css';
import LivroLista from './components/LivroLista';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import LivroDados from './components/LivroDados';

function App() {
	return (
		<div className='App'>
			<nav>
				<ul>
					<li>
						<a href='/'>Livros</a>
					</li>
					<li>
						<a href={'/dados'}>Dados</a>
					</li>
				</ul>
			</nav>
			<BrowserRouter>
				<Routes>
					<Route path='/' Component={LivroLista} />
					<Route path='/dados' Component={LivroDados} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
