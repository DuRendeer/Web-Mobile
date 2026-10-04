import 'package:flutter/material.dart';
import 'package:liberdadi/models/filme.dart';
import 'package:liberdadi/widgets/botao_quero_ver.dart';
import 'package:liberdadi/widgets/coracao_favorito.dart';

class DetalheFilme extends StatelessWidget {
  final Filme filme;

  const DetalheFilme({super.key, required this.filme});

  static void abrir(BuildContext context, Filme filme) {
    showModalBottomSheet(
      context: context,
      showDragHandle: true,
      builder: (context) => DetalheFilme(filme: filme),
    );
  }

  @override
  Widget build(BuildContext context) {
    final textos = Theme.of(context).textTheme;

    return Padding(
      padding: const EdgeInsets.fromLTRB(24, 0, 24, 32),
      child: Column(
        mainAxisSize: MainAxisSize.min,
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Row(
            children: [
              Expanded(
                child: Text(
                  filme.titulo,
                  style: textos.headlineSmall?.copyWith(
                    fontWeight: FontWeight.bold,
                  ),
                ),
              ),
              CoracaoFavorito(filme: filme),
            ],
          ),
          const SizedBox(height: 4),
          Text('${filme.genero} • ${filme.ano}', style: textos.titleSmall),
          const SizedBox(height: 16),
          Text('Sobre o que é', style: textos.labelLarge),
          const SizedBox(height: 4),
          Text(filme.sinopse, style: textos.bodyLarge),
          const SizedBox(height: 24),
          SizedBox(
            width: double.infinity,
            child: BotaoQueroVer(filme: filme),
          ),
        ],
      ),
    );
  }
}
