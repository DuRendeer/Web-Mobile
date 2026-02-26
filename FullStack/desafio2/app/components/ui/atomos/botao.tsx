import { ButtonHTMLAttributes, ReactNode } from 'react';
import { cn } from '../../../lib/utils';

interface PropsBotao extends ButtonHTMLAttributes<HTMLButtonElement> {
  variante?: 'primario' | 'fantasma' | 'link';
  tamanho?: 'p' | 'm' | 'g';
  children: ReactNode;
}

export const Botao = ({
  variante = 'primario',
  tamanho = 'm',
  children,
  className,
  ...resto
}: PropsBotao) => {
  const variantes = {
    primario: 'bg-blue-600 hover:bg-blue-700 text-white',
    fantasma: 'bg-gray-700 hover:bg-gray-600 text-white',
    link: 'bg-transparent text-blue-400 hover:underline',
  };

  const tamanhos = {
    p: 'px-3 py-1.5 text-sm',
    m: 'px-6 py-2',
    g: 'px-8 py-3 text-lg',
  };

  return (
    <button
      className={cn(
        'font-medium rounded-lg transition-all',
        variantes[variante],
        tamanhos[tamanho],
        className
      )}
      {...resto}
    >
      {children}
    </button>
  );
};
