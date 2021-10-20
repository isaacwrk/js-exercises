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
