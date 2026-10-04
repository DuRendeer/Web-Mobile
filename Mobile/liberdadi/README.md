# JaViu

Aluno: Eduardo Sochodolak 6º "B"
App em Flutter pra montar sua lista de filmes pra ver. Só marca como assistido quem acerta uma pergunta sobre o filme.

Atividade de gerenciamento de estado com **Provider**.

## O que dá pra fazer

- Ver o catálogo de filmes e abrir os detalhes de cada um
- Adicionar ou tirar filmes da sua lista com o botão "Quero ver"
- Favoritar filmes com a estrela
- Na Minha Lista, marcar como assistido respondendo um quiz do filme
- Ver quantos filmes ainda estão na fila e quantos você já viu

## Design

O visual é retrô, estilo videogame 8-bit, feito com o pacote [nes_ui](https://pub.dev/packages/nes_ui).

- Fonte pixelada Press Start 2P (vem do tema do nes_ui)
- Botões, checkbox, dialog do quiz e snackbars são widgets do nes_ui (`NesButton`, `NesCheckBox`, `NesDialog`, `NesSnackbar`)
- Ícones pixelados: TV pra abrir a lista, coração pra favoritar, lixeira pra remover
- Cores: vermelho `#E02424`, amarelo `#EBA93A` e preto `#17161C` na barra do topo
- Snackbar verde quando acerta o quiz e vermelho quando erra

## Estrutura

```
lib/
  main.dart
  models/      filme, pergunta e catálogo
  pages/       catálogo, minha lista, detalhe e quiz
  providers/   lista_provider
  widgets/     botão "Quero ver" e estrela de favorito
```

## Como rodar

```
flutter pub get
flutter run
```

Os prints das telas estão na pasta `prints/`.
