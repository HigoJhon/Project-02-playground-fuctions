// Desafio 1
function compareTrue(comparador ,comparador2) {
  // seu código aqui
if (comparador === true && comparador2 === true ){
  return true;
    }
    return false;
  }
  // Desafio 2
function calcArea(base , height) {
  // seu código aqui
let resultado = (base * height )/ 2 
    return resultado
} 

// Desafio 3
function splitSentence(text) {
  // seu código aqui
   let frase = text.split(" ");
  return frase
}

// Desafio 4
function concatName(nomes) {
 
  let a = nomes[0];
  let d = nomes[nomes.length-1];
  let resultado = d + ", " + a;
  return resultado ;

}
// Desafio 5
function footballPoints(win , ties) {
  // seu código aqui
  let vitoria=win * 3  
  let empate =ties* 1
  
  resultado = vitoria + empate
  return resultado
}

// Desafio 6
function highestCount(numeros) {
  // seu código aqui
 
}

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

// Desafio 10
function techList() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};
