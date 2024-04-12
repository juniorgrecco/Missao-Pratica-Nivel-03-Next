import { NextResponse } from 'next/server';
import { controleEditora } from '../route';

export function GET(request: Request, { params }: { params: { codEditora: string } }) {
	const editora = controleEditora.getNomeEditora(+params.codEditora);

	return NextResponse.json({ nome: editora });
}
