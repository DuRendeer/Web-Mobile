import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class ChatService {
  constructor(private readonly prisma: PrismaService) {}

  async salvarMensagem(remetente: string, conteudo: string, horario: string) {
    return this.prisma.mensagem.create({
      data: { remetente, conteudo, horario },
    });
  }

  async buscarHistorico() {
    const mensagens = await this.prisma.mensagem.findMany({
      orderBy: { criadoEm: 'asc' },
      take: 50,
    });
    return mensagens.map((m) => ({
      id: m.id,
      sender: m.remetente,
      message: m.conteudo,
      time: m.horario,
    }));
  }
}
