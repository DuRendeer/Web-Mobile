import 'dart:io';

void main(){
  stdout.write("Me da um numero q vc quera ver a tabuada: ");
  var num = double.parse(stdin.readLineSync()!);

  print("Tabuada do $num");
  for (double i = 1; i <= 10; i++){
    var resul = i * num;
    print("$num X $i = $resul");
  }
}