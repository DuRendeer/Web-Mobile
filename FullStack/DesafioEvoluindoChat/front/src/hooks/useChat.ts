import { useEffect, useRef, useState, useCallback } from 'react';
import { io } from 'socket.io-client';

export const useChat = (nomeUsuario: string) => {
  const [mensagens, setMensagens] = useState<any[]>([]);
  const [onlineCount, setOnlineCount] = useState(0);
  const nomeRef = useRef(nomeUsuario);
  const socketRef = useRef<ReturnType<typeof io> | null>(null);

  useEffect(() => {
    nomeRef.current = nomeUsuario;
  }, [nomeUsuario]);

  useEffect(() => {
    const socket = io('http://localhost:3000');
    socketRef.current = socket;

    socket.on('historico', (historico: any[]) => {
      setMensagens(historico);
    });

    socket.on('msgToClient', (novaMensagem) => {
      setMensagens((prev) => [...prev, novaMensagem]);
    });

    socket.on('presenca', (evento: { tipo: string; id: string }) => {
      if (evento.tipo === 'entrou') {
        setOnlineCount((prev) => prev + 1);
        console.log(`Usuário entrou: ${evento.id}`);
      } else {
        setOnlineCount((prev) => Math.max(0, prev - 1));
        console.log(`Usuário saiu: ${evento.id}`);
      }
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  const enviarMensagem = useCallback((mensagem: string) => {
    socketRef.current?.emit('msgToServer', { sender: nomeRef.current, message: mensagem });
  }, []);

  return { mensagens, enviarMensagem, onlineCount };
};
