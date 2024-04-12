import ControleEditora from '@/classes/controle/ControleEditora';
import { NextResponse } from 'next/server';

export const controleEditora = new ControleEditora();

export function GET() {
	return NextResponse.json(controleEditora.getEditoras());
}
