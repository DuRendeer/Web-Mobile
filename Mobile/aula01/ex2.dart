import 'dart:io';

void main(){
  print("Titulo pq? pq print pula linha e o stdout.write nao pula linha");
  stdout.write("Ei tu usuario me da um numero ai:");
  var num1 = double.parse(stdin.readLineSync()!);
  stdout.write("Ei tu usuario me da outro numero ai:");
  var num2 = double.parse(stdin.readLineSync()!);

  var soma = num1 + num2;
  var subtracao = num1 - num2;
  var multiplicacao = num1 * num2;
  var divisao = num1 / num2;

  print("Vc me deu $num1 e $num2, a soma deles é $soma, a subtração é $subtracao");
  print(" a multiplicação é $multiplicacao e a divisão é $divisao");
}