// 1
function somarArray(numeros) {
  let total = 0;
  for(let i = 0; i < numeros.length; i++) {
    total += numeros[i];
  }
  return total;
}

const numeros = [41, 22, 3, 214, 45];
console.log("Exercicio 1 - Soma dos elementos:", somarArray(numeros)); 

// 2
function converterParaMaiusculas(strings) {
  const resultado = [];
  
  for(let i = 0; i < strings.length; i++) {
    resultado.push(strings[i].toUpperCase());
  }
  
  return resultado;
}

const palavras = ["jaguatirica", "funil", "artefato", "casa"];
console.log("Exercicio 2 - Strings em maiusculas:", converterParaMaiusculas(palavras));

// 3
function adicionarItem(array, item) {
  const copia = [...array];
  copia.push(item);
  return copia;
}

const frutas = ["tomate", "banana", "laranja"];
console.log("Exercicio 3 - Array com item adicionado:", adicionarItem(frutas, "morango"));

// 4
function removerPrimeiro(array) {
  if (array.length === 0) return [];
  
  const copia = [...array];
  copia.shift();
  return copia;
}

const cores = ["vermelho", "azul bebe", "laranja", "amarelo"];
console.log("Exercicio 4 - Array sem o primeiro elemento:", removerPrimeiro(cores));

// 5
function filtrarPares(numiros) {
  const pares = [];
  
  for (let numiro of numiros) {
    if (numiro % 2 === 0) {
      pares.push(numiro);
    }
  }
  
  return pares;
}

const numirosVariados = [12, 101, 3, 13, 35, 62, 7, 28, 29, 10];
console.log("Exercicio 5 - Numeros pares:", filtrarPares(numirosVariados));

// 6
function contarPalavrasLongas(palavras) {
  let contador = 0;
  
  for (let i = 0; i < palavras.length; i++) {
    if (palavras[i].length > 5) {
      contador++;
    }
  }
  
  return contador;
}

const listaPalavras = ["pindamuingaba", "muce", "bernardo", "calendario", "web", "spotted"];
console.log("Exercicio 6 - Quantidade de palavras com mais de 5 letras:", contarPalavrasLongas(listaPalavras));

// 7
function encontrarMaior(num) {
  if (num.length === 0) return null;
  
  let maior = num[0];
  
  for (let i = 1; i < num.length; i++) {
    if (num[i] > maior) {
      maior = num[i];
    }
  }
  
  return maior;
}

const numAleatorios = [10, 5, 22, 8, 15, 131, 55];
console.log("Exercicio 7 - Maior numero:", encontrarMaior(numAleatorios));

// 8
function juntarNomes(nomes) {
  let resultado = "";
  
  for (let i = 0; i < nomes.length; i++) {
    resultado += nomes[i];
    if (i < nomes.length - 1) {
      resultado += ", ";
    }
  }
  
  return resultado;
}

const listaNomes = ["Jucislau", "Bernardo", "Burdoga", "Pedro"];
console.log("Exercicio 8 - Nomes unidos por virgula:", juntarNomes(listaNomes));

// 9
function reverterArray(array) {
  const resultado = [];
  
  for (let i = array.length - 1; i >= 0; i--) {
    resultado.push(array[i]);
  }
  
  return resultado;
}

const letras = ["A", "T", "L", "A", "P"];
console.log("Exercicio 9 - Array em ordem reversa:", reverterArray(letras));

// 10
function calcularQuadrados(numeros) {
  const resultado = [];
  
  for (const numero of numeros) {
    resultado.push(numero * numero);
  }
  
  return resultado;
}

const listaNumeros = [9, 2, 31, 42, -9];
console.log("Exercicio 10 - Quadrados dos numeros:", calcularQuadrados(listaNumeros));