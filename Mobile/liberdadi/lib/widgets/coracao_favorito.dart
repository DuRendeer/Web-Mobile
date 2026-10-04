import 'package:flutter/material.dart';
import 'package:liberdadi/models/filme.dart';
import 'package:liberdadi/providers/lista_provider.dart';
import 'package:nes_ui/nes_ui.dart';
import 'package:provider/provider.dart';

class CoracaoFavorito extends StatelessWidget {
  final Filme filme;

  const CoracaoFavorito({super.key, required this.filme});

  @override
  Widget build(BuildContext context) {
    final lista = context.watch<ListaProvider>();
    final favorito = lista.ehFavorito(filme);

    return NesIconButton(
      icon: NesIcons.heart,
      primaryColor: favorito ? Theme.of(context).colorScheme.primary : Colors.grey.shade400,
      onPress: () => lista.favoritar(filme),
    );
  }
}
