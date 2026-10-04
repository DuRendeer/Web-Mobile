import 'package:liberdadi/models/filme.dart';
import 'package:liberdadi/models/pergunta.dart';

const List<Filme> catalogo = [
  Filme(
    titulo: 'De Volta para o Futuro',
    ano: 1985,
    genero: 'Aventura',
    sinopse:
        'Marty McFly entra num DeLorean, vai parar em 1955 e se torna meu filme favorito.',
    pergunta: Pergunta(
      enunciado: 'Qual velocidade o DeLorean precisa atingir pra viajar no tempo?',
      alternativas: [
        '66 milhas por hora',
        '88 milhas por hora',
        '100 milhas por hora',
        '121 milhas por hora',
      ],
      indiceCerto: 1,
    ),
  ),
  Filme(
    titulo: 'De Volta para o Futuro: Parte II',
    ano: 1989,
    genero: 'Aventura',
    sinopse:
        'Marty e Doc vão pro futuro consertar a vida dos filhos do Marty. Tem skate voador, tênis que amarra sozinho e Meu Deus como amo essa trilogia.',
    pergunta: Pergunta(
      enunciado: 'Pra qual ano Marty e Doc viajam?',
      alternativas: [
        '2000',
        '2020',
        '2015',
        '2085',
      ],
      indiceCerto: 2,
    ),
  ),
  Filme(
    titulo: 'De Volta para o Futuro: Parte III',
    ano: 1990,
    genero: 'Faroeste',
    sinopse:
        'Agora é no Velho Oeste tem que ver os outros pra entender o final perfeito',
    pergunta: Pergunta(
      enunciado: 'Em que ano o Doc está preso no Velho Oeste?',
      alternativas: [
        '1885',
        '1855',
        '1868',
        '1905',
      ],
      indiceCerto: 0,
    ),
  ),
  Filme(
    titulo: 'O Poderoso Chefão: Parte II',
    ano: 1974,
    genero: 'Drama',
    sinopse:
        'Michael Corleone tenta segurar o império da família enquanto a gente vê o jovem Vito subindo na vida em Nova York. A sequência que me fez adorar o Al Pacino e o Robert De Niro.',
    pergunta: Pergunta(
      enunciado: 'Quem interpreta o jovem Vito Corleone?',
      alternativas: [
        'Al Pacino',
        'Marlon Brando',
        'Joe Pesci',
        'Robert De Niro',
      ],
      indiceCerto: 3,
    ),
  ),
  Filme(
    titulo: 'Heartstopper Forever',
    ano: 2026,
    genero: 'Romance',
    sinopse:
        'Eu amo Nick e Charlie. Prepare o lencinho, porque vai ter folhinha voando na tela e você chorando no sofá.',
    pergunta: Pergunta(
      enunciado: 'Qual esporte o Nick joga?',
      alternativas: [
        'Futebol',
        'Rugby',
        'Basquete',
        'Hóquei',
      ],
      indiceCerto: 1,
    ),
  ),
  Filme(
    titulo: 'Hoje Eu Quero Voltar Sozinho',
    ano: 2014,
    genero: 'Romance',
    sinopse:
        'Leonardo é cego, quer mais independência e conhece o Gabriel, o aluno novo da escola. Um romance adolescente brasileiro fofo demais pra aguentar.',
    pergunta: Pergunta(
      enunciado: 'Como se chama a melhor amiga do Leonardo?',
      alternativas: [
        'Giovana',
        'Karina',
        'Beatriz',
        'Fernanda',
      ],
      indiceCerto: 0,
    ),
  ),
  Filme(
    titulo: 'Ainda Estou Aqui',
    ano: 2024,
    genero: 'Drama',
    sinopse:
        'Eunice Paiva segura a família de pé depois que o marido some durante a ditadura. Fernanda Torres brilhando e o Brasil ganhando Oscar. Obrigatório.',
    pergunta: Pergunta(
      enunciado: 'Em qual cidade a família Paiva mora no começo do filme?',
      alternativas: [
        'São Paulo',
        'Brasília',
        'Rio de Janeiro',
        'Belo Horizonte',
      ],
      indiceCerto: 2,
    ),
  ),
  Filme(
    titulo: 'Perdidos pra Cachorro',
    ano: 2008,
    genero: 'Comédia',
    sinopse:
        'São Cachorros que falam',
    pergunta: Pergunta(
      enunciado: 'Raça do Papi',
      alternativas: [
        'Husky',
        'Beagle',
        'T-Rex',
        'Chihuahua',
      ],
      indiceCerto: 3,
    ),
  ),
  Filme(
    titulo: 'Apertem os Cintos... o Piloto Sumiu!',
    ano: 1980,
    genero: 'Comédia',
    sinopse:
        'A tripulação passa mal, Uma piada por segundo. E Amar o Leslie Nielsen.',
    pergunta: Pergunta(
      enunciado: 'O que faz a tripulação e os passageiros passarem mal?',
      alternativas: [
        'O frango',
        'A lasanha',
        'A turbulência',
        'O peixe',
      ],
      indiceCerto: 3,
    ),
  ),
  Filme(
    titulo: 'Histórias Cruzadas',
    ano: 2011,
    genero: 'Drama',
    sinopse:
        'Mississippi, anos 60 uma jornalista decide escrever um livro contando o lado das empregadas negras',
    pergunta: Pergunta(
      enunciado: 'O que a Minny coloca na famosa torta pra Hilly?',
      alternativas: [
        'Pimenta',
        'Laxante',
        'Cocô',
        'Sal',
      ],
      indiceCerto: 2,
    ),
  ),
  Filme(
    titulo: 'Django Livre',
    ano: 2012,
    genero: 'Faroeste',
    sinopse:
        'Django ganha a liberdade, vira caçador de recompensas e vai atrás da esposa. É Tarantino, então pode esperar muito diálogo bom e muito ketchup.',
    pergunta: Pergunta(
      enunciado: 'Quem interpreta o Django?',
      alternativas: [
        'Jamie Foxx',
        'Denzel Washington',
        'Samuel L. Jackson',
        'Will Smith',
      ],
      indiceCerto: 0,
    ),
  ),
  Filme(
    titulo: 'Bastardos Inglórios',
    ano: 2009,
    genero: 'Guerra',
    sinopse:
        'Um grupo de soldados caçando nazistas e Tarantino reescrevendo a história do jeito dele.',
    pergunta: Pergunta(
      enunciado: 'Como se chama o coronel nazista conhecido como caçador de judeus?',
      alternativas: [
        'Aldo Raine',
        'Hans Landa',
        'Fredrick Zoller',
        'Hugo Stiglitz',
      ],
      indiceCerto: 1,
    ),
  ),
  Filme(
    titulo: 'Vermelho, Branco e Sangue Azul',
    ano: 2023,
    genero: 'Romance',
    sinopse:
        'O filho da presidente dos EUA e um príncipe britânico se odeiam, causam um escândalo e precisam fingir amizade. Spoiler: não fica só na amizade.',
    pergunta: Pergunta(
      enunciado: 'O que o Alex e o Henry derrubam no casamento real?',
      alternativas: [
        'O champanhe',
        'Uma estátua',
        'A coroa',
        'O bolo',
      ],
      indiceCerto: 3,
    ),
  ),
];
