import Link from 'next/link';

const produtos = [
    { id: '1', nome: 'Assinatura Premium', descricao: 'Acesso completo à plataforma com suporte prioritário.', preco: 'R$ 99/mês' },
    { id: '2', nome: 'Pack de Templates', descricao: 'Coleção com +50 templates prontos para uso imediato.', preco: 'R$ 49' },
    { id: '3', nome: 'Consultoria Individual', descricao: 'Sessão de 1h com especialista dedicado ao seu negócio.', preco: 'R$ 299/h' },
];

export default function DashboardPage() {
    return (
        <div className="p-8">
            <h1 className="text-2xl font-bold text-slate-800 mb-1">Catálogo de Produtos</h1>
            <p className="text-slate-500 mb-8">Selecione um produto para ver os detalhes.</p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {produtos.map((produto) => (
                    <Link key={produto.id} href={`/product/${produto.id}`}>
                        <div className="bg-white border border-slate-200 rounded-xl p-6 hover:shadow-md hover:border-indigo-400 transition-all cursor-pointer group">
                            <span className="text-xs font-semibold text-indigo-500 uppercase tracking-wider">
                                Produto #{produto.id}
                            </span>
                            <h2 className="text-lg font-semibold text-slate-800 mt-2 mb-1 group-hover:text-indigo-600 transition-colors">
                                {produto.nome}
                            </h2>
                            <p className="text-slate-500 text-sm mb-4">{produto.descricao}</p>
                            <span className="text-indigo-600 font-bold">{produto.preco}</span>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
