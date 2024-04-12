import { NextResponse } from 'next/server';
import { controleLivro } from '../route';

export async function DELETE(request: Request, { params }: { params: { codigo: string } }) {
	controleLivro.excluir(+params.codigo);

	return NextResponse.json('success');
}
