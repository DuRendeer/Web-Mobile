import Link from 'next/link';

const produtos = [
    { id: '1', nome: 'Assinatura Premium', preco: 'R$ 99/mês' },
    { id: '2', nome: 'Pack de Templates', preco: 'R$ 49' },
    { id: '3', nome: 'Consultoria Individual', preco: 'R$ 299/h' },
    { id: '4', nome: 'Consultoria Empresarial', preco: 'R$ 1.200/mês' },
    { id: '5', nome: 'Consultoria de TI', preco: 'R$ 450/h' },
    { id: '6', nome: 'Consultoria de Marketing', preco: 'R$ 380/h' },
];

export default function ProductsPage() {
    return (
        <div className="p-8">
            <h1 className="text-2xl font-bold text-slate-800 mb-1">Todos os Produtos</h1>
            <p className="text-slate-500 mb-8">{produtos.length} produtos disponíveis.</p>

            <ul className="flex flex-col gap-3 max-w-2xl">
                {produtos.map((produto) => (
                    <li key={produto.id}>
                        <Link
                            href={`/product/${produto.id}`}
                            className="flex items-center justify-between bg-white border border-slate-200 rounded-xl px-6 py-4 hover:border-indigo-400 hover:shadow-sm transition-all group"
                        >
                            <div>
                                <span className="text-xs text-indigo-500 font-semibold uppercase tracking-wider">#{produto.id}</span>
                                <p className="text-slate-800 font-medium group-hover:text-indigo-600 transition-colors">{produto.nome}</p>
                            </div>
                            <span className="text-indigo-600 font-bold">{produto.preco}</span>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
