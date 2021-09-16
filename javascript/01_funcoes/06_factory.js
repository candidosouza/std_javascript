// Função factory são as que retornam objetos

function factory() {
    return {
        first_name: '...',
        last_name: '...'
    }
}

console.log(factory());
console.log(typeof (factory()));

// example 01
// function product(name, price) {
//     return {
//         name: name,
//         price: price,
//     }
// }


function product(name, price) {
    return {
        name,
        price,
        discount: 0.1,
    }
}

console.log(product('TOYOTA HILUX 2.8 STD 4X4', '150.000,00'));
console.log(product('TOYOTA HILUX 2.8 STD 4X4', '145.000,00'));
console.log(product('TOYOTA HILUX 2.8 STD 4X4', '155.000,00'));

// Classe exemplo
class Peaple {
    constructor(name) {
        this.name = name;
    }

    talk() {
        console.log(`My name is ${this.name}`);
    }
}

const p1 = new Peaple("Candido");
p1.talk();

// // Função construtora exemplo
// function Peaple1(name) {
//     this.name = name;
//     this.talk = function () {
//         console.log(`My name is ${name}`)
//     };
// }

// const p2 = new Peaple1("Candido");
// p2.talk();

// Arrow function construtora exemplo
const peaple = name => {
    return {
        talk: () => {
            console.log(`My name is ${name}`);
        }
    }
}

const p2 = peaple("Candido");
p2.talk();
