'use client';

import { useState } from 'react';
import { Input } from '../atomos/input';
import { Botao } from '../atomos/botao';

interface PropsBarraBusca {
  aoBuscar: (termo: string) => void;
}

export const BarraBusca = ({ aoBuscar }: PropsBarraBusca) => {
  const [termo, setTermo] = useState('');

  return (
    <div className="flex gap-2">
      <Input
        type="text"
        placeholder="Buscar..."
        value={termo}
        onChange={(e) => setTermo(e.target.value)}
      />
      <Botao onClick={() => aoBuscar(termo)}>Buscar</Botao>
    </div>
  );
};
