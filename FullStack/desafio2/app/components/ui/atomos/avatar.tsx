import { cn } from '../../../lib/utils';

interface PropsAvatar {
  gradiente: string;
  tamanho?: 'p' | 'm' | 'g';
}

export const Avatar = ({ gradiente, tamanho = 'm' }: PropsAvatar) => {
  const tamanhos = {
    p: 'w-8 h-8',
    m: 'w-12 h-12',
    g: 'w-16 h-16',
  };

  return (
    <div
      className={cn('rounded-full bg-gradient-to-tr', gradiente, tamanhos[tamanho])}
    />
  );
};
