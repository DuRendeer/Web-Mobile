'use client';
import { useState, useEffect } from 'react';
import { Button } from './components/ui/button';
import { Card, CardContent, CardHeader } from './components/ui/card';
import { User, Image as ImageIcon, Save, Plus, Minus, Trash2 } from 'lucide-react';
import FuzzyText from './components/ui/FuzzyText';
import ThemeToggle from './components/ui/ThemeToggle';

interface UserProfile {
  name: string;
  role: string;
  avatarUrl: string;
}

interface ItemEstoque {
  id: number;
  nome: string;
  quantidade: number;
}

export default function PerfilPage() {
  const [escuro, setEscuro] = useState(false);
  const [estoque, setEstoque] = useState<ItemEstoque[]>([]);
  const [novoNome, setNovoNome] = useState('');

  useEffect(() => {
    document.documentElement.classList.toggle('dark', escuro);
  }, [escuro]);

  const adicionarItem = () => {
    if (!novoNome.trim()) return;
    setEstoque((prev) => [...prev, { id: Date.now(), nome: novoNome.trim(), quantidade: 0 }]);
    setNovoNome('');
  };

  const alterarQtd = (id: number, delta: number) => {
    setEstoque((prev) =>
      prev.map((item) => item.id === id ? { ...item, quantidade: item.quantidade + delta } : item)
    );
  };

  const removerItem = (id: number) => {
    setEstoque((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <div className="min-h-screen bg-slate-100 dark:bg-background p-8 flex flex-col gap-8 relative">
      <div className="absolute top-4 right-4">
        <ThemeToggle escuro={escuro} onChange={setEscuro} />
      </div>

      {/* GERENCIADOR DE ESTOQUE */}
      <Card>
        <CardHeader title="Gerenciador de Estoque" description="Adicione, remova e ajuste quantidades." />
        <CardContent>
          <div className="flex gap-2 mb-4">
            <input
              value={novoNome}
              onChange={(e) => setNovoNome(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && adicionarItem()}
              placeholder="Nome do item..."
              className="flex-1 p-2 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none dark:bg-muted dark:border-border dark:text-foreground dark:placeholder:text-muted-foreground"
            />
            <Button icon={<Plus size={16} />} onClick={adicionarItem}>
              Adicionar
            </Button>
          </div>

          {estoque.length === 0 ? (
            <p className="text-center text-slate-400 dark:text-muted-foreground text-sm py-6">
              Nenhum item no estoque.
            </p>
          ) : (
            <ul className="space-y-2">
              {estoque.map((item) => (
                <li
                  key={item.id}
                  className="flex items-center gap-3 p-3 rounded-lg border border-slate-200 dark:border-border bg-slate-50 dark:bg-muted"
                >
                  <span className="flex-1 font-medium text-slate-800 dark:text-foreground truncate">
                    {item.nome}
                  </span>
                  {item.quantidade < 3 && (
                    <span className="text-xs font-semibold text-red-500">estoque baixo</span>
                  )}
                  <div className="flex items-center gap-1">
                    <button
                      onClick={() => alterarQtd(item.id, -1)}
                      className="w-7 h-7 flex items-center justify-center rounded border border-slate-300 dark:border-border hover:bg-slate-200 dark:hover:bg-background text-slate-600 dark:text-foreground transition-colors"
                    >
                      <Minus size={14} />
                    </button>
                    <span className="w-8 text-center font-mono font-bold text-slate-800 dark:text-foreground">
                      {item.quantidade}
                    </span>
                    <button
                      onClick={() => alterarQtd(item.id, 1)}
                      className="w-7 h-7 flex items-center justify-center rounded border border-slate-300 dark:border-border hover:bg-slate-200 dark:hover:bg-background text-slate-600 dark:text-foreground transition-colors"
                    >
                      <Plus size={14} />
                    </button>
                  </div>
                  <button
                    onClick={() => removerItem(item.id)}
                    disabled={item.quantidade > 0}
                    className="w-7 h-7 flex items-center justify-center rounded text-red-400 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-950 transition-colors disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-transparent"
                  >
                    <Trash2 size={15} />
                  </button>
                </li>
              ))}
            </ul>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
