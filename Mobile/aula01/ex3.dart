import 'dart:io';

void main () {
  stdout.write("Ei meu pitch parceiro tu quer saber se é par ou impar da um numero inteiro ai (se der um double problema teu)");
  var num = int.parse(stdin.readLineSync()!);
  if (num % 2 == 0) {
    print("O numero $num é par");
  }
  else{
    print("O numero $num é impar");
  }
}