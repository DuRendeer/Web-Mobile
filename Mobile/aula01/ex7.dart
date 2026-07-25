import 'dart:io';

void main(){
  var num = 0.0;
  var total = 0.0;
  while (num >= 0){
    stdout.write("Me da um numero positivo se for negativo o jogo acabo: ");
    num = double.parse(stdin.readLineSync()!);
    print("Antes tinha $total");
    total += num;
    print("Teu $num somado deu $total");
    if (num < 0){
      print("Poh acabo com o jogo");
    }
    else{
      print("EEe vamo dnv");
    }
  }
  
}