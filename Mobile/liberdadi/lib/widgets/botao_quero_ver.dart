import 'package:flutter/material.dart';
import 'package:liberdadi/models/filme.dart';
import 'package:liberdadi/providers/lista_provider.dart';
import 'package:nes_ui/nes_ui.dart';
import 'package:provider/provider.dart';

class BotaoQueroVer extends StatelessWidget {
  final Filme filme;
  final bool soIcone;

  const BotaoQueroVer({super.key, required this.filme, this.soIcone = false});

  void _alternar(BuildContext context) {
    final lista = Provider.of<ListaProvider>(context, listen: false);
    final adicionando = !lista.estaNaLista(filme);
    lista.alternarQueroVer(filme);

    ScaffoldMessenger.of(context).hideCurrentSnackBar();
    NesSnackbar.show(
      context,
      text: adicionando
          ? 'Anotado! "${filme.titulo}" tá na fila'
          : 'Tirou "${filme.titulo}" da lista, sem crise',
    );
  }

  @override
  Widget build(BuildContext context) {
    final naLista = context.watch<ListaProvider>().estaNaLista(filme);

    if (soIcone) {
      return NesButton.icon(
        type: naLista ? NesButtonType.success : NesButtonType.primary,
        icon: naLista ? NesIcons.check : NesIcons.add,
        iconSize: const Size.square(16),
        onPressed: () => _alternar(context),
      );
    }

    if (naLista) {
      return NesButton.iconText(
        type: NesButtonType.success,
        icon: NesIcons.check,
        text: 'Na lista',
        onPressed: () => _alternar(context),
      );
    }

    return NesButton.iconText(
      type: NesButtonType.primary,
      icon: NesIcons.add,
      text: 'Quero ver',
      onPressed: () => _alternar(context),
    );
  }
}
