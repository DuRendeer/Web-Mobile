import {
  WebSocketGateway,
  SubscribeMessage,
  MessageBody,
  WebSocketServer,
  ConnectedSocket,
  OnGatewayConnection,
  OnGatewayDisconnect,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { ChatService } from './chat.service';

@WebSocketGateway({ cors: { origin: '*' } })
export class ChatGateway implements OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer()
  server: Server;

  constructor(private readonly chatService: ChatService) {}

  async handleConnection(client: Socket) {
    console.log(`Usuário entrou: ${client.id}`);
    const historico = await this.chatService.buscarHistorico();
    client.emit('historico', historico);
    this.server.emit('presenca', { tipo: 'entrou', id: client.id });
  }

  handleDisconnect(client: Socket) {
    console.log(`Usuário saiu: ${client.id}`);
    this.server.emit('presenca', { tipo: 'saiu', id: client.id });
  }

  @SubscribeMessage('msgToServer')
  async handleMessage(
    @ConnectedSocket() _client: Socket,
    @MessageBody() data: { sender: string; message: string },
  ) {
    const horario = new Date().toLocaleTimeString();
    const mensagem = await this.chatService.salvarMensagem(
      data.sender,
      data.message,
      horario,
    );
    this.server.emit('msgToClient', {
      id: mensagem.id,
      sender: mensagem.remetente,
      message: mensagem.conteudo,
      time: mensagem.horario,
    });
  }
}
