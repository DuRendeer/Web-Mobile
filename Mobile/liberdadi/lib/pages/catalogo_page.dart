import 'package:flutter/material.dart';
import 'package:liberdadi/models/catalogo.dart';
import 'package:liberdadi/pages/minha_lista_page.dart';
import 'package:liberdadi/providers/lista_provider.dart';
import 'package:liberdadi/widgets/botao_quero_ver.dart';
import 'package:liberdadi/pages/detalhe_filme.dart';
import 'package:liberdadi/widgets/coracao_favorito.dart';
import 'package:nes_ui/nes_ui.dart';
import 'package:provider/provider.dart';

class CatalogoPage extends StatelessWidget {
  const CatalogoPage({super.key});

  @override
  Widget build(BuildContext context) {
    final pendentes = context.watch<ListaProvider>().pendentes.length;

    return Scaffold(
      appBar: AppBar(
        title: const Text(
          'JaViu',
          style: TextStyle(fontWeight: FontWeight.w900),
        ),
        actions: [
          Padding(
            padding: const EdgeInsets.only(right: 16),
            child: Badge(
              isLabelVisible: pendentes > 0,
              label: Text('$pendentes'),
              backgroundColor: Theme.of(context).colorScheme.secondary,
              textColor: Theme.of(context).colorScheme.inverseSurface,
              child: NesIconButton(
                icon: NesIcons.tv,
                primaryColor: Colors.white,
                onPress: () {
                  Navigator.push(
                    context,
                    MaterialPageRoute(builder: (context) => const MinhaListaPage()),
                  );
                },
              ),
            ),
          ),
        ],
      ),
      body: ListView.separated(
        itemCount: catalogo.length + 1,
        separatorBuilder: (context, index) => const Divider(height: 1),
        itemBuilder: (context, index) {
          if (index == 0) {
            return const Padding(
              padding: EdgeInsets.all(16),
              child: Text(
                'Bora?',
              ),
            );
          }

          final filme = catalogo[index - 1];

          return ListTile(
            leading: CoracaoFavorito(filme: filme),
            title: Text(filme.titulo),
            subtitle: Text('${filme.genero} • ${filme.ano}'),
            trailing: BotaoQueroVer(filme: filme, soIcone: true),
            onTap: () => DetalheFilme.abrir(context, filme),
          );
        },
      ),
    );
  }
}
