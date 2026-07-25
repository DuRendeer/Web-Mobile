import 'dart:io';

void main() {
  stdout.write("Me da um ano pra eu ver se é bissexto (anos são num inteiro genio): ");
  var ano = int.parse(stdin.readLineSync()!);
  
  if (ano % 4 == 0 && ano % 100 != 0 || ano % 400 == 0 ){
    print("È bisextu");
  }
  else{
    print("Num não não é Bisextu");
  }

}