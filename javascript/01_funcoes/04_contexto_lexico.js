/*
A função carrega pega o contexto local em que ela foi definida, dentro do escopo léxico
*/

const valor = 'Global';

function minhaFuncao() {
    // vai carregar esse conteúdo
    // obtem o local onde foi declarada
    const valor = 'Local Minha Função';
    console.log(valor);
}

function exec() {
    const valor = 'Local função exec';
    // mesmo estando dentro de outra função
    minhaFuncao();
}

exec();
