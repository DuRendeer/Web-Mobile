import 'dart:io';

void main(){
  print("Vamo ver teu imc?");
  stdout.write("Me da teu peso ai (em kg):");
  var peso = double.parse(stdin.readLineSync()!);
  stdout.write("Me da tua altura ai (em metros):");
  var altura = double.parse(stdin.readLineSync()!);
  
  var imc = peso / (altura * altura);
  print("Teu imc é $imc");
  if (imc < 18.5){
    print("Tu ta abaixo do peso");
  }
  else if (imc >= 18.5 && imc < 25){
    print("Tu ta no peso ideal");
  }
  else if (imc >= 25 && imc < 30){
    print("Tu ta acima do peso");
  }
  else{
    print("Tu ta obeso");
  }

}