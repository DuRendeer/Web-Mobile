import { InputHTMLAttributes } from 'react';
import { cn } from '../../../lib/utils';

interface PropsInput extends InputHTMLAttributes<HTMLInputElement> {}

export const Input = ({ className, ...resto }: PropsInput) => (
  <input
    className={cn(
      'bg-gray-800 border border-gray-700 px-4 py-2 rounded-lg text-white',
      'focus:outline-none focus:ring-2 focus:ring-blue-500',
      className
    )}
    {...resto}
  />
);
