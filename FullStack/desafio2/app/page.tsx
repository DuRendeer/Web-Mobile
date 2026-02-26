'use client';

import { useState } from 'react';
import { Titulo } from './components/ui/atomos/titulo';
import { Botao } from './components/ui/atomos/botao';
import { BarraBusca } from './components/ui/moleculas/barra-busca';
import { CardMembro } from './components/ui/moleculas/card-membro';

interface Membro {
  id: number;
  nome: string;
  cargo: string;
  descricao: string;
  gradiente: string;
}

const membros: Membro[] = [
  {
    id: 1,
    nome: 'Eduardo Sochodolak',
    cargo: 'Full-stack Developer',
    descricao: 'Especialista em React e Node.js. Adora café e Docker.',
    gradiente: 'from-blue-500 to-purple-500',
  },
  {
    id: 2,
    nome: 'Moaca - In Memorian -',
    cargo: 'UI/UX Designer',
    descricao: 'Focado em acessibilidade e design systems escaláveis.',
    gradiente: 'from-green-500 to-teal-500',
  },
  {
    id: 3,
    nome: 'Johann Matheus Pedroso da Silva',
    cargo: 'DevOps Engineer',
    descricao: 'Mestre em Kubernetes e automação de pipelines CI/CD.',
    gradiente: 'from-orange-500 to-red-500',
  },
];

export default function PaginaComunidade() {
  const [busca, setBusca] = useState('');

  const membrosFiltrados = membros.filter((m) =>
    m.nome.toLowerCase().includes(busca.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-900 p-8 text-white">
      <header className="flex justify-between items-center mb-10">
        <Titulo nivel={1}>Membros do Grupo</Titulo>
        <BarraBusca aoBuscar={setBusca} />
      </header>

      <main className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {membrosFiltrados.map((membro) => (
          <CardMembro key={membro.id} {...membro} />
        ))}
      </main>

      <footer className="mt-12 text-center text-gray-500 text-xs">
        <p>© 2026 - Engenharia de Software - Full-Stack Class</p>
        <Botao variante="link" className="mt-2 text-sm">
          Sair do sistema
        </Botao>
      </footer>
    </div>
  );
}
