import Link from 'next/link';
import React from 'react';

export default function Menu() {
	return (
		<nav>
			<ul>
				<li>
					<Link href={'/'}>Livros</Link>
				</li>
				<li>
					<Link href={'/dados'}>Dados</Link>
				</li>
			</ul>
		</nav>
	);
}
