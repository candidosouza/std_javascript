/*
Function.prototype.call()
O método call() invoca uma função com um dado valor this  e argumentos passados individualmente.
Nota: Apesar de a sintaxe desta função ser quase idêntica à de apply(), 
a principal diferença é que call() aceita uma lista de argumentos, 
enquanto apply() aceita um único array de argumentos.

Function.prototype.apply()
O método apply() chama uma função com um dado valor this e arguments providos como uma 
array (ou um objeto parecido com um array).

apply é muito parecido com call(), exceto pelo tipo de argumentos que ele suporta. 
Você pode usar um array de argumentos em vez de conjunto de parâmetros nomeados. 
Com apply, você pode usar um array literal, 
por exemplo, fun.apply(this, ['comer', 'bananas']), 
ou um objeto Array, 
por exemplo fun.apply(this, new Array('comer', 'bananas')).
*/

function getPrice(tax = 0, currency = 'R$') {
    return `${currency} ${this.price * (1 - this.discount) * (1 + tax)}`;
}

const product = {
    name: 'Notebook',
    price: '7777',
    discount: 0.15,
    getPrice
}

global.price = 20;
global.discount = 0.1;
console.log(getPrice());
console.log(product.getPrice());

const car = {
    price: '7777',
    discount: 0.5,
}

console.log(getPrice.call(car));
console.log(getPrice.apply(car));

// call e apply mudam na forma de passar parâmetros
console.log(getPrice.call(car, 0.17, '$'))
console.log(getPrice.apply(car, [0.17, '$']))