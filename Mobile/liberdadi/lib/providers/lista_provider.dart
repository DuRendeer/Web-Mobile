import 'package:flutter/material.dart';
import 'package:liberdadi/models/filme.dart';

class ListaProvider extends ChangeNotifier {
  final List<Filme> _minhaLista = [];
  final Set<Filme> _favoritos = {};
  final Set<Filme> _assistidos = {};
  final Map<Filme, int> _erros = {};

  List<Filme> get minhaLista => _minhaLista;

  List<Filme> get pendentes =>
      _minhaLista.where((filme) => !foiAssistido(filme)).toList();

  int get totalAssistidos => _assistidos.length;

  bool estaNaLista(Filme filme) => _minhaLista.contains(filme);

  bool ehFavorito(Filme filme) => _favoritos.contains(filme);

  bool foiAssistido(Filme filme) => _assistidos.contains(filme);

  int errosDe(Filme filme) => _erros[filme] ?? 0;

  void alternarQueroVer(Filme filme) {
    if (estaNaLista(filme)) {
      remover(filme);
      return;
    }
    _minhaLista.add(filme);
    notifyListeners();
  }

  void favoritar(Filme filme) {
    if (!_favoritos.remove(filme)) {
      _favoritos.add(filme);
    }
    notifyListeners();
  }

  bool responder(Filme filme, int alternativa) {
    final acertou = filme.pergunta.acertou(alternativa);
    if (acertou) {
      _assistidos.add(filme);
      _erros.remove(filme);
    } else {
      _erros[filme] = errosDe(filme) + 1;
    }
    notifyListeners();
    return acertou;
  }

  void desmarcarAssistido(Filme filme) {
    _assistidos.remove(filme);
    notifyListeners();
  }

  void remover(Filme filme) {
    _minhaLista.remove(filme);
    _assistidos.remove(filme);
    _erros.remove(filme);
    notifyListeners();
  }
}
