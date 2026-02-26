import { Avatar } from '../atomos/avatar';
import { Titulo } from '../atomos/titulo';
import { Botao } from '../atomos/botao';

interface PropsMembro {
  nome: string;
  cargo: string;
  descricao: string;
  gradiente: string;
}

export const CardMembro = ({ nome, cargo, descricao, gradiente }: PropsMembro) => (
  <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 shadow-lg">
    <div className="flex items-center gap-4 mb-4">
      <Avatar gradiente={gradiente} />
      <div>
        <Titulo nivel={2}>{nome}</Titulo>
        <p className="text-gray-400 text-sm">{cargo}</p>
      </div>
    </div>
    <p className="text-gray-300 text-sm mb-4">{descricao}</p>
    <Botao variante="fantasma" className="w-full text-sm rounded-md py-2">
      Ver Perfil
    </Botao>
  </div>
);
