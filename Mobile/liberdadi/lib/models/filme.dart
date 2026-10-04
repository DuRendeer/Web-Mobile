import 'package:liberdadi/models/pergunta.dart';

class Filme {
  final String titulo;
  final int ano;
  final String genero;
  final String sinopse;
  final Pergunta pergunta;

  const Filme({
    required this.titulo,
    required this.ano,
    required this.genero,
    required this.sinopse,
    required this.pergunta,
  });
}
