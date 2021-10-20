"use strict";
// let & const
let seraQuePode = '?';
console.log(seraQuePode);
let estaFrio = true;
if (estaFrio) {
    let acao = 'Colocar o casaco!';
    console.log(acao);
}
var segredo = 'externo!';
function revelar() {
    const segredo = 'interno';
    console.log(segredo);
}
revelar();
console.log(segredo);
function somar(n1, n2) {
    return n1 + n2;
}
console.log(somar(1, 1));
//arrow function
const subtrair = (n1, n2) => n1 - n2;
console.log(subtrair(5, 2));
const saudacao = () => console.log('Ola');
saudacao();
//em uma arrow function no typescript precisa passar os valores dentro do parentese
const falarCom = (pessoa) => console.log('Ola ' + pessoa);
falarCom('Isaac');
//quem é o this neste ponto???
//console.log(this)
//const arrComThis = () => console.log(this)
//arrComThis()
//const arrowComthisEspecial = arrComThis.bind({nome:'euzinho'})
//arrowComthisEspecial()
//parametros padrao
function contagemRegressiva(inicio = 5, fim = inicio - 5) {
    console.log(inicio);
    while (inicio >= fim) {
        inicio--;
        console.log(inicio);
    }
    console.log("Fim!");
}
contagemRegressiva();
//Operador Spread e Rest
const numbers = [1, 10, 99, -5, 200, 640];
console.log(Math.max(...numbers));
const turmaA = ['Joao', 'Maria', 'Fernando'];
const turmaB = ['Jo', 'Marcos', 'Jorge', ...turmaA];
console.log(turmaB);
/// ... rest recebe os dados do array
function retornaArray(...args) {
    return args;
}
//retornaArray vai jogar os dados para dentro de args
const numeros = retornaArray(1, 2, 4, 6, 7, 8, 623);
console.log(numeros);
//posso usar dados de outra função (linha 55) dentro da minha função criada retornaArray
console.log(retornaArray(...numbers));
//Rest & Spread para tuplas
const tupla = [1, 'abc', false];
function tuplaParam1(a, b, c) {
    console.log(`1) ${a} ${b} ${c}`);
}
tuplaParam1(...tupla);
function tuplaParam2(...params) {
    console.log(Array.isArray(params));
    console.log(`2) ${params[0]} ${params[1]}  ${params[2]}`);
}
tuplaParam2(...tupla);
//Destructuring (array)
const caract = ['Motor Zetec', 2020];
// pega os dados e associa através do indice do array
const [motor, ano] = caract;
console.log(motor);
console.log(ano);
//Destructuring (Object)
const item = {
    nome: 'SSD 980GB',
    preco: 888,
    caracteristicas: {
        w: 'Importado'
    }
};
//definindo alias e chamando os dados do objeto
const { nome: n, preco: p, caracteristicas: { w } } = item;
console.log(n);
console.log(p);
console.log(w);
//concatenando strings template
const usuarioID = 'Admin ';
const notificacoes = '68';
//versão concatenando string
//const boasVindas:string = 'Bem vindo ' + usuarioID + 'Notificações: ' + notificacoes
const boasVindas = `
Bem-vindo ${usuarioID}, Notificações:${parseInt(notificacoes) > 9 ? '+9' : notificacoes}
`;
console.log(boasVindas);
