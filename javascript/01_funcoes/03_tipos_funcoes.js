// O interpretador javascript faz o carregamento primeiro das funções, e após os demais códigos
// apenas para funções declarativas

// function declaration
// literal
function type() {
    return null;
}

// arrow function
// é mais curta, e o this fica associado ao contexto
let arrow = () => {
    return null;
}
// com a penas um parametro
let arrow1 = a => {
    return null;
}
// sem parametros
let arrow2 = _ => {
    return null;
}


// anônimas
// armazenamento em variáveis
// function expression
const func = function() {
    return null;
}

// armazenamento em arrays
const array = [function(arg){ return `Hello!!! ${arg}`; }, func]
console.log(array[0]("Candido "));

// armazenar em etributos e ojetos
const obj = {}
obj.talk = function () { return "Hello!!!"; }
console.log(obj.talk());

// armazenar dentro de outra funçao
function sum(a, b) {
    return function (c) {
        console.log(a + b + c);
    }
}

sum(1, 2)(7);


// named function expression
// função nomeada
const named = function named () {
    return null;
}
