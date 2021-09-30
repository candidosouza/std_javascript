// IIFE -> Immediately Invoked Function Expression
// Função Imediatas/ Auto Envocada
// Muito utilizada para fugir do escopo global

(function() {
    const name = "Candido";
    console.log(name);
    console.log('Será executado na hora!!!');
    console.log('Foge do escopo mais abrangente');
})();

const name = "Candido Souza 1";
console.log(name);

(function() {
    const last_name = 'Souza 2'
    function createName(first_name) {
        return `${first_name} ${last_name}`;
    }

    function talkName() {
        console.log(createName('Candido'));
    }

    talkName();
})();

// com parametros
(function(first_name, last_name) {

    function createName() {
        return `${first_name} ${last_name}`;
    }

    console.log(createName());

})('Candido', 'Souza 3');
