// a função com a paravra reservada "function" tem uma variavel especial que chama "arguments"
// que sustenta todos os agumentos enviados
// funciona na função apenas quando se passa a palavra function nome() {}
// não funciona e arrow functions

function hello() {
    console.log(arguments)

    // pegar o indice
    console.log(arguments[0])
}

hello('Valor', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
/* saida
[Arguments] {
    '0': 'Valor',
    '1': 1, 
    '2': 2,
    '3': 3,
    '4': 4,
    '5': 5,
    '6': 6,
    '7': 7,
    '8': 8,
    '9': 9,
    '10': 10
  }
*/

// para arguments em arrow functions 
const number = (...args) => {
    console.log(args);
}

number(0, 1, 2, 3, 4, 5, 6, 7)

// paramentros pode ser objetos
function person({name, lastName, age}) {
    console.log(name, lastName, age)
}

// person({name: 'Candido', lastName: 'Souza', age: 41})
let obj = {name: 'Candido', lastName: 'Souza', age: 41};
person(obj);

// parametros podem ser arrays
function numbers([value01, value02, value03]) {
    console.log(value01, value02, value03);
}

let values = [1, 2, 3];
numbers(values);

// parametros com rest operator, sinalizado com três pontos ...
function conta(operador, acumulador, ...numeros) {
    console.log(operador, acumulador, numeros);
    for (let numero of numeros) {
        if (operador === '+') acumulador += numero;
        if (operador === '-') acumulador -= numero;
        if (operador === '/') acumulador /= numero;
        if (operador === '*') acumulador *= numero;
    }
    console.log(arguments);
}

conta('+', 0, 20, 30, 40, 50);