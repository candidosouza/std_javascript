// Closure é o escopo criado quando uma função é declarada
// Esse escopo permite a função acessar e manipular variáveis externas à função

var scope = ['scope', 'global'];

function checkscope() {
    let scope = ['scope', 'local']
    function f() { return scope; }
    return f();
}

console.log(checkscope());

var scope1 = ['scope', 'global'];

function checkscope1() {
    let scope1 = ['scope', 'local']
    function f() { return scope1; }
    return f;
}

console.log(checkscope1()());
