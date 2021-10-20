"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// let & const
var seraQuePode = '?';
console.log(seraQuePode);
var estaFrio = true;
if (estaFrio) {
    var acao = 'Colocar o casaco!';
    console.log(acao);
}
var segredo = 'externo!';
function revelar() {
    var segredo = 'interno';
    console.log(segredo);
}
revelar();
console.log(segredo);
function somar(n1, n2) {
    return n1 + n2;
}
console.log(somar(1, 1));
//arrow function
var subtrair = function (n1, n2) { return n1 - n2; };
console.log(subtrair(5, 2));
var saudacao = function () { return console.log('Ola'); };
saudacao();
//em uma arrow function no typescript precisa passar os valores dentro do parentese
var falarCom = function (pessoa) { return console.log('Ola ' + pessoa); };
falarCom('Isaac');
//quem é o this neste ponto???
//console.log(this)
//const arrComThis = () => console.log(this)
//arrComThis()
//const arrowComthisEspecial = arrComThis.bind({nome:'euzinho'})
//arrowComthisEspecial()
//parametros padrao
function contagemRegressiva(inicio, fim) {
    if (inicio === void 0) { inicio = 5; }
    if (fim === void 0) { fim = inicio - 5; }
    console.log(inicio);
    while (inicio >= fim) {
        inicio--;
        console.log(inicio);
    }
    console.log("Fim!");
}
contagemRegressiva();
//Operador Spread e Rest
var numbers = [1, 10, 99, -5, 200, 640];
console.log(Math.max.apply(Math, numbers));
var turmaA = ['Joao', 'Maria', 'Fernando'];
var turmaB = __spreadArray(['Jo', 'Marcos', 'Jorge'], turmaA, true);
console.log(turmaB);
/// ... rest recebe os dados do array
function retornaArray() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return args;
}
//retornaArray vai jogar os dados para dentro de args
var numeros = retornaArray(1, 2, 4, 6, 7, 8, 623);
console.log(numeros);
//posso usar dados de outra função (linha 55) dentro da minha função criada retornaArray
console.log(retornaArray.apply(void 0, numbers));
//Rest & Spread para tuplas
var tupla = [1, 'abc', false];
function tuplaParam1(a, b, c) {
    console.log("1) " + a + " " + b + " " + c);
}
tuplaParam1.apply(void 0, tupla);
function tuplaParam2() {
    var params = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        params[_i] = arguments[_i];
    }
    console.log(Array.isArray(params));
    console.log("2) " + params[0] + " " + params[1] + "  " + params[2]);
}
tuplaParam2.apply(void 0, tupla);
//Destructuring (array)
var caract = ['Motor Zetec', 2020];
// pega os dados e associa através do indice do array
var motor = caract[0], ano = caract[1];
console.log(motor);
console.log(ano);
//Destructuring (Object)
var item = {
    nome: 'SSD 980GB',
    preco: 888,
    caracteristicas: {
        w: 'Importado'
    }
};
//definindo alias e chamando os dados do objeto
var n = item.nome, p = item.preco, w = item.caracteristicas.w;
console.log(n);
console.log(p);
console.log(w);
//concatenando strings template
var usuarioID = 'Admin ';
var notificacoes = '68';
//versão concatenando string
//const boasVindas:string = 'Bem vindo ' + usuarioID + 'Notificações: ' + notificacoes
var boasVindas = "\nBem-vindo " + usuarioID + ", Notifica\u00E7\u00F5es:" + (parseInt(notificacoes) > 9 ? '+9' : notificacoes) + "\n";
console.log(boasVindas);
