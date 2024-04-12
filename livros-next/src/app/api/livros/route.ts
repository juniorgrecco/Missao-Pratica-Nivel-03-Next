import ControleLivros from '@/classes/controle/ControleLivros';
import Livro from '@/classes/modelo/Livro';
import { NextResponse } from 'next/server';

export const controleLivro = new ControleLivros();

export function GET() {
	return NextResponse.json(controleLivro.obterLivros());
}

export async function POST(request: Request) {
	const body: Livro = await request.json();

	controleLivro.incluir(body);

	return NextResponse.json(body);
}
