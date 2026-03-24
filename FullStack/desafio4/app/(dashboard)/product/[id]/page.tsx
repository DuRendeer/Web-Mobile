'use client';

import { useParams, useRouter } from 'next/navigation';

const produtos: Record<string, { nome: string; descricao: string; preco: string }> = {
    '1': { nome: 'Assinatura Premium', descricao: 'Acesso completo à plataforma com suporte prioritário.', preco: 'R$ 99/mês' },
    '2': { nome: 'Pack de Templates', descricao: 'Coleção com +50 templates prontos para uso imediato.', preco: 'R$ 49' },
    '3': { nome: 'Consultoria Individual', descricao: 'Sessão de 1h com especialista dedicado ao seu negócio.', preco: 'R$ 299/h' },
};

export default function ProductPage() {
    const params = useParams();
    const router = useRouter();
    const id = params.id as string;
    const produto = produtos[id];

    return (
        <div className="p-8">
            <button
                onClick={() => router.back()}
                className="flex items-center gap-2 text-slate-500 hover:text-indigo-600 mb-8 transition-colors text-sm font-medium"
            >
                ← Voltar
            </button>

            {produto ? (
                <div className="max-w-lg bg-white border border-slate-200 rounded-xl p-8">
                    <span className="text-xs font-semibold text-indigo-500 uppercase tracking-wider">
                        Produto #{id}
                    </span>
                    <h1 className="text-2xl font-bold text-slate-800 mt-2 mb-2">{produto.nome}</h1>
                    <p className="text-slate-500 mb-6">{produto.descricao}</p>
                    <span className="text-2xl font-bold text-indigo-600">{produto.preco}</span>
                </div>
            ) : (
                <p className="text-slate-500">Produto não encontrado.</p>
            )}
        </div>
    );
}
