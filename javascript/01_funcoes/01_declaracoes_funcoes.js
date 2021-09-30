// declaração de função (function hoisting)
// funções são "first-class objects" / funções de primeira classe
helloWorld();

function helloWorld() {
    console.log("Oie...")
}

// functions expressions
const iData = function() {
    console.log('Sou um dado...')
}

function executeFunction(func) {
    console.log("Executando a função abaixo:")
    func();
}

executeFunction(iData);

// arrow functions
const arrowFunction = () => {
    console.log("Sou uma arrow function...")
}

arrowFunction();

// funções dentro de um objeto
const animal = {
    dog: function() {
        console.log("woof, woof ...")
    },
    cat: () => {
        console.log("meow, meow ...")
    },
    cow() {
        console.log("mu, mu ...")
    }
};

animal.dog();
animal.cat();
animal.cow();
