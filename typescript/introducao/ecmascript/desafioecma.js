"use strict";
//Desafio 01 traduzindo código para typescript
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var dobro = function (valor) {
    return valor * 2;
};
console.log(dobro(10));
//Desafio 02  verificar se há melhorias no código javascript
var dizerOla = function (nome) {
    if (nome === undefined) {
        nome = 'Pessoa';
        console.log("Ol\u00E1! " + nome);
    }
    else {
        console.log("Ol\u00E1! " + nome);
    }
};
dizerOla();
dizerOla('Isaac');
//Desafio 03 imprimir o menor valor!
var nums = [-3, 33, 38, 5];
console.log(Math.min.apply(Math, nums));
//Desafio 04 adicionar os elementos de nums em array
var array = [55, 20];
console.log.apply(console, __spreadArray([array], nums, false));
//Desafio 05 simplifique os trechos de códigos avaixos utilizando o operador Destructing
var notas = [8.5, 6.3, 9.4];
var nota1 = notas[0], nota2 = notas[1], nota3 = notas[2];
console.log(nota1, nota2, nota3);
var cientista = { primeiroNome: 'will', experiencia: 12 };
var cnome = cientista.primeiroNome, cxp = cientista.experiencia;
console.log("O meu nome \u00E9 " + cnome + " e tenho " + cxp + " anos de experi\u00EAncia");
