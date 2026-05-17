# Chat em Tempo Real — Atividade WebSockets

Eduardo Sochodolak — 5º B

---

## Arquivos criados

**Backend**

| Arquivo | O que faz |
|---|---|
| `back/src/chat/chat.gateway.ts` | Gateway WebSocket. Gerencia conexões, desconexões e recebimento de mensagens |
| `back/src/chat/chat.service.ts` | Acessa o banco via Prisma para salvar mensagens e buscar o histórico |
| `back/src/chat/chat.module.ts` | Registra o Gateway e o Service, importa o PrismaModule |
| `back/.env` | Variável `DATABASE_URL` apontando pro SQLite local |

**Frontend**

| Arquivo | O que faz |
|---|---|
| `front/src/hooks/useChat.ts` | Hook que gerencia a conexão socket.io e os eventos do chat |
| `front/src/app/chat/page.tsx` | Tela do chat com layout full-page e estilização condicional |

---

## Arquivos modificados

| Arquivo | O que mudou |
|---|---|
| `back/prisma/schema.prisma` | Adicionado model `Mensagem` com os campos remetente, conteudo, horario e criadoEm |
| `back/src/app.module.ts` | Importado o `ChatModule` |
| `front/src/app/layout.tsx` | Favicon e metadata atualizados |

---

## Como cada requisito foi resolvido

**Indicador de Presença**
O gateway implementa `OnGatewayConnection` e `OnGatewayDisconnect`. Quando alguém conecta ou desconecta, o servidor emite `presenca` pra todos os clientes com `{ tipo: 'entrou' | 'saiu', id }`. O frontend atualiza o contador de online no header e loga no console o socket id.

**Estilização Condicional**
Na renderização de cada mensagem, compara `m.sender === nome`. Se for do próprio usuário, aparece alinhada à direita com fundo branco. Se for de outro, aparece à esquerda com fundo escuro e nome do remetente visível.

**Persistência**
Foi criado o model `Mensagem` no Prisma e rodada a migration. O `ChatService` tem dois métodos: `salvarMensagem` (chamado antes do broadcast de cada nova mensagem) e `buscarHistorico` (chamado no `handleConnection`, emitindo os últimos 50 registros só pro cliente que acabou de entrar).

---

## Como rodar

```bash

cd back && npm run start:dev
cd front && npm run dev
```

Acessa em: `http://localhost:4000/chat`
