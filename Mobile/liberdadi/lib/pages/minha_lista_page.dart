import 'package:flutter/material.dart';
import 'package:liberdadi/providers/lista_provider.dart';
import 'package:liberdadi/pages/detalhe_filme.dart';
import 'package:liberdadi/pages/quiz_filme.dart';
import 'package:nes_ui/nes_ui.dart';
import 'package:provider/provider.dart';

class MinhaListaPage extends StatelessWidget {
  const MinhaListaPage({super.key});

  String _recado(ListaProvider lista) {
    if (lista.minhaLista.isEmpty) return '';
    if (lista.pendentes.isEmpty) return 'Zerou a lista! Pia';
    if (lista.pendentes.length > 5) return 'Calma maratonista, vai respirar um pouco de ar';
    return 'Bora tirar uns da fila?';
  }

  @override
  Widget build(BuildContext context) {
    final lista = context.watch<ListaProvider>();
    final filmes = lista.minhaLista;

    return Scaffold(
      appBar: AppBar(title: const Text('Minha Lista')),
      body: Column(
        children: [
          Container(
            width: double.infinity,
            color: Theme.of(context).colorScheme.inverseSurface,
            padding: const EdgeInsets.fromLTRB(16, 8, 16, 20),
            child: Column(
              children: [
                Row(
                  mainAxisAlignment: MainAxisAlignment.spaceAround,
                  children: [
                    _Contador(rotulo: 'Na fila', valor: lista.pendentes.length),
                    _Contador(rotulo: 'JaViu', valor: lista.totalAssistidos),
                  ],
                ),
                if (filmes.isNotEmpty) ...[
                  const SizedBox(height: 12),
                  Text(
                    _recado(lista),
                    style: TextStyle(color: Theme.of(context).colorScheme.secondary),
                  ),
                ],
              ],
            ),
          ),
          Expanded(
            child: filmes.isEmpty
                ? const _ListaVazia()
                : ListView.separated(
                    itemCount: filmes.length,
                    separatorBuilder: (context, index) => const Divider(height: 1),
                    itemBuilder: (context, index) {
                      final filme = filmes[index];
                      final assistido = lista.foiAssistido(filme);

                      return ListTile(
                        leading: NesCheckBox(
                          value: assistido,
                          onChange: (_) => assistido
                              ? lista.desmarcarAssistido(filme)
                              : QuizFilme.perguntar(context, filme),
                        ),
                        title: Text(
                          filme.titulo,
                          style: TextStyle(
                            decoration:
                                assistido ? TextDecoration.lineThrough : null,
                          ),
                        ),
                        subtitle: Text(
                          assistido
                              ? 'Já viu! E aí, gosto?'
                              : '${filme.genero} • ${filme.ano}',
                        ),
                        trailing: NesIconButton(
                          icon: NesIcons.delete,
                          onPress: () => lista.remover(filme),
                        ),
                        onTap: () => DetalheFilme.abrir(context, filme),
                      );
                    },
                  ),
          ),
        ],
      ),
    );
  }
}

class _Contador extends StatelessWidget {
  final String rotulo;
  final int valor;

  const _Contador({required this.rotulo, required this.valor});

  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        Text(
          '$valor',
          style: Theme.of(context).textTheme.headlineMedium?.copyWith(
                color: Colors.white,
                fontWeight: FontWeight.w900,
              ),
        ),
        Text(rotulo, style: const TextStyle(color: Colors.white70)),
      ],
    );
  }
}

class _ListaVazia extends StatelessWidget {
  const _ListaVazia();

  @override
  Widget build(BuildContext context) {
    return Center(
      child: Padding(
        padding: const EdgeInsets.all(32),
        child: Column(
          mainAxisSize: MainAxisSize.min,
          children: [
            Opacity(
              opacity: 0.4,
              child: NesIcon(
                iconData: NesIcons.openEye,
                size: const Size.square(100),
              ),
            ),
            const SizedBox(height: 16),
            const Text(
              'Sua lista tá mais vazia que cinema em segunda de manhã',
              textAlign: TextAlign.center,
              style: TextStyle(fontSize: 16, fontWeight: FontWeight.bold),
            ),
            const SizedBox(height: 8),
            const Text(
              'Volta no catálogo e aperta "Quero ver" em alguma coisa!',
              textAlign: TextAlign.center,
            ),
          ],
        ),
      ),
    );
  }
}
