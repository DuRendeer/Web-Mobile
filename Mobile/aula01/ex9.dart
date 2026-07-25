import 'dart:io';

void main(){
  print("Me de 3 notas de 0 a 10 vamos ver se tu passo");
  stdout.write("Me da a pimeira: ");
  var num1 = double.parse(stdin.readLineSync()!);
  stdout.write("Me da a segunda: ");
  var num2 = double.parse(stdin.readLineSync()!);
  stdout.write("Me da a ultima: ");
  var num3 = double.parse(stdin.readLineSync()!);

  var nota = (num1 + num2 + num3) / 3;
  if (nota >= 7.0){
    print("Viva passo com a nota $nota");
  }
  if (nota < 7.0 && nota >= 5.0){
    print("Puts n passo fico com $nota mas relaxa da pra fazer a Recuperação");
  }
  if(nota < 5.0){
    print("carai n tem nem chance com $nota n tem recuperaçao nem nada abraço anjo");
  }
}