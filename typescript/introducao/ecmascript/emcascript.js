"use strict";
var _this = this;
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
falarCom('João');
//this
function normalComThis() {
    console.log(this);
}
//bind o que eu passar como parametro vai ser usado dentro da funcao como this
var normalComThisEspecial = normalComThis.bind({ nome: 'eu' });
normalComThisEspecial();
//quem é o this neste ponto???
console.log(this);
var arrComThis = function () { return console.log(_this); };
arrComThis();
var arrowComthisEspecial = arrComThis.bind({ nome: 'euzinho' });
arrowComthisEspecial();
