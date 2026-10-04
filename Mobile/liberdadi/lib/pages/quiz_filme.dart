import 'package:flutter/material.dart';
import 'package:liberdadi/models/filme.dart';
import 'package:liberdadi/providers/lista_provider.dart';
import 'package:nes_ui/nes_ui.dart';
import 'package:provider/provider.dart';

class QuizFilme extends StatelessWidget {
  final Filme filme;

  const QuizFilme({super.key, required this.filme});

  static Future<void> perguntar(BuildContext context, Filme filme) async {
    final lista = Provider.of<ListaProvider>(context, listen: false);

    final escolhida = await NesDialog.show<int>(
      context: context,
      builder: (context) => QuizFilme(filme: filme),
    );
    if (escolhida == null || !context.mounted) return;

    final acertou = lista.responder(filme, escolhida);
    final erros = lista.errosDe(filme);

    String mensagem;
    if (acertou) {
      mensagem = 'Acertou! "${filme.titulo}" liberado como JaViu';
    } else if (erros > 1) {
      mensagem =
          'Errou de novo? Já são $erros vezes, assiste esse filme direito';
    } else {
      mensagem = 'Errou! Acho que alguém não viu esse filme...';
    }

    ScaffoldMessenger.of(context).hideCurrentSnackBar();
    NesSnackbar.show(
      context,
      text: mensagem,
      type: acertou ? NesSnackbarType.success : NesSnackbarType.error,
    );
  }

  @override
  Widget build(BuildContext context) {
    final pergunta = filme.pergunta;

    return SizedBox(
      width: 320,
      child: SingleChildScrollView(
        child: Column(
          mainAxisSize: MainAxisSize.min,
          crossAxisAlignment: CrossAxisAlignment.stretch,
          children: [
            Text(
              'Prova que viu!',
              style: Theme.of(context).textTheme.titleMedium,
            ),
            const SizedBox(height: 16),
            Text(pergunta.enunciado),
            const SizedBox(height: 16),
            for (
              var indice = 0;
              indice < pergunta.alternativas.length;
              indice++
            )
              Padding(
                padding: const EdgeInsets.only(bottom: 8),
                child: NesButton.text(
                  type: NesButtonType.normal,
                  text: pergunta.alternativas[indice],
                  onPressed: () => Navigator.pop(context, indice),
                ),
              ),
            const SizedBox(height: 8),
            NesButton.text(
              type: NesButtonType.warning,
              text: 'Ainda não vi',
              onPressed: () => Navigator.pop(context),
            ),
          ],
        ),
      ),
    );
  }
}
