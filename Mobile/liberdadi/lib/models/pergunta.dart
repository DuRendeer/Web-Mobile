class Pergunta {
  final String enunciado;
  final List<String> alternativas;
  final int indiceCerto;

  const Pergunta({
    required this.enunciado,
    required this.alternativas,
    required this.indiceCerto,
  });

  bool acertou(int indice) => indice == indiceCerto;
}
