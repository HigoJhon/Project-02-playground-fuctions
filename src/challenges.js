// Desafio 1
function compareTrue(comparador, comparador2) {
  // seu código aqui
  if (comparador === true && comparador2 === true) {
    return true;
  }
  return false;
}
// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  let resultado = (base * height) / 2
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
  let d = nomes[nomes.length - 1];
  let resultado = d + ", " + a;
  return resultado;

}
// Desafio 5
function footballPoints(win, ties) {
  // seu código aqui
  let vitoria = win * 3
  let empate = ties * 1

  resultado = vitoria + empate
  return resultado
}

// Desafio 6
function highestCount(numeros) {
  // seu código aqui
  let maior = numeros[0];
  for (let index = 0; index < numeros.length; index += 1) {
    if (numeros[index] > maior) {
      maior = numeros[index]
    }
  }

  let resultado = 0;
  for (let index = 0; index < numeros.length; index += 1) {
    if (numeros[index] === maior) {
      resultado += 1;
    }
  }
  return resultado
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  let resultado;
  let gato1 = Math.abs(cat1 - mouse);
  let gato2 = Math.abs(cat2 - mouse);

  if (gato1 < gato2) {
    resultado = "cat1";
  } else if (gato2 < gato1) {
    resultado = "cat2";
  } else {
    resultado = "os gatos trombam e o rato foge";
  }
  return resultado
}

// Desafio 8
function fizzBuzz(nume) {
  // seu código aqui 
  let resultado = [];
  for (let index = 0; index < nume.length; index += 1) {

    if (nume[index]% 3 === 0 && nume[index] % 5 === 0) {
      resultado.push("fizzBuzz");
    } else if (nume[index] % 5 === 0) {
      resultado.push("buzz");
    } else if (nume[index] % 3 === 0) {
      resultado.push("fizz");
    } else {
      resultado.push("bug!");
    }
  }
  return resultado;
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
