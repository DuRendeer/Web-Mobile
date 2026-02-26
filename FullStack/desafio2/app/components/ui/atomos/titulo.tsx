import { ReactNode } from 'react';
import { cn } from '../../../lib/utils';

interface PropsTitulo {
  nivel: 1 | 2 | 3;
  children: ReactNode;
  className?: string;
}

export const Titulo = ({ nivel, children, className }: PropsTitulo) => {
  const estilos = {
    1: 'text-3xl font-bold',
    2: 'text-xl font-semibold',
    3: 'text-lg font-medium',
  };

  const Tag = `h${nivel}` as 'h1' | 'h2' | 'h3';

  return <Tag className={cn(estilos[nivel], className)}>{children}</Tag>;
};
