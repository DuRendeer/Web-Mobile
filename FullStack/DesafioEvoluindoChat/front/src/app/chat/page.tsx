'use client';

import { useState, useEffect, useRef } from 'react';
import { useChat } from '@/src/hooks/useChat';

export default function ChatPage() {
  const [nome, setNome] = useState('Dev');
  const [texto, setTexto] = useState('');
  const fimRef = useRef<HTMLDivElement>(null);
  const { mensagens, enviarMensagem, onlineCount } = useChat(nome);

  useEffect(() => {
    const nomeSalvo = localStorage.getItem('chat-nome');
    if (nomeSalvo) setNome(nomeSalvo);
  }, []);

  useEffect(() => {
    fimRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [mensagens]);

  const handleNome = (valor: string) => {
    setNome(valor);
    localStorage.setItem('chat-nome', valor);
  };

  const handleEnviar = () => {
    if (texto.trim()) {
      enviarMensagem(texto);
      setTexto('');
    }
  };

  return (
    <div className="flex flex-col h-full bg-zinc-950 text-white overflow-hidden">
      <div className="flex items-center justify-between px-6 py-4 border-b border-zinc-800 shrink-0">
        <h1 className="text-base font-semibold tracking-tight">Chat ao Vivo</h1>
        <span className="flex items-center gap-2 text-sm text-zinc-400">
          <span className="w-2 h-2 rounded-full bg-green-500" />
          {onlineCount} online
        </span>
      </div>

      <div className="flex-1 overflow-y-auto px-6 py-4 space-y-3">
        {mensagens.map((m, i) => {
          const euEnviei = m.sender === nome;
          return (
            <div key={i} className={`flex ${euEnviei ? 'justify-end' : 'justify-start'}`}>
              <div
                className={`max-w-sm px-4 py-2.5 rounded-2xl ${
                  euEnviei
                    ? 'bg-white text-zinc-950 rounded-br-sm'
                    : 'bg-zinc-800 text-white rounded-bl-sm'
                }`}
              >
                {!euEnviei && (
                  <span className="text-xs font-medium text-zinc-400 block mb-1">
                    {m.sender}
                  </span>
                )}
                <p className="text-sm leading-relaxed">{m.message}</p>
                <span
                  className={`text-xs mt-1 block ${
                    euEnviei ? 'text-zinc-400' : 'text-zinc-500'
                  }`}
                >
                  {m.time}
                </span>
              </div>
            </div>
          );
        })}
        <div ref={fimRef} />
      </div>

      <div className="border-t border-zinc-800 px-6 py-4 shrink-0">
        <div className="flex gap-3 items-center">
          <input
            className="w-24 bg-zinc-900 text-white text-sm px-3 py-2.5 rounded-xl outline-none placeholder:text-zinc-600 border border-zinc-700 focus:border-zinc-500 transition-colors"
            value={nome}
            onChange={(e) => handleNome(e.target.value)}
            placeholder="Nome"
          />
          <input
            className="flex-1 bg-zinc-900 text-white text-sm px-4 py-2.5 rounded-xl outline-none placeholder:text-zinc-600 border border-zinc-700 focus:border-zinc-500 transition-colors"
            value={texto}
            onChange={(e) => setTexto(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleEnviar()}
            placeholder="Mensagem..."
          />
          <button
            onClick={handleEnviar}
            className="bg-white text-zinc-950 text-sm font-medium px-5 py-2.5 rounded-xl hover:bg-zinc-200 transition-colors"
          >
            Enviar
          </button>
        </div>
      </div>
    </div>
  );
}
