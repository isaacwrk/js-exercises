"use strict";
//Desafio 01 traduzindo código para typescript
const dobro = function (valor) {
    return valor * 2;
};
console.log(dobro(10));
//Desafio 02  verificar se há melhorias no código javascript
const dizerOla = function (nome) {
    if (nome === undefined) {
        nome = 'Pessoa';
        console.log(`Olá! ${nome}`);
    }
    else {
        console.log(`Olá! ${nome}`);
    }
};
dizerOla();
dizerOla('Isaac');
//Desafio 03 imprimir o menor valor!
const nums = [-3, 33, 38, 5];
console.log(Math.min(...nums));
//Desafio 04 adicionar os elementos de nums em array
const array = [55, 20];
console.log(array, ...nums);
//Desafio 05 simplifique os trechos de códigos avaixos utilizando o operador Destructing
const notas = [8.5, 6.3, 9.4];
const [nota1, nota2, nota3] = notas;
console.log(nota1, nota2, nota3);
const cientista = { primeiroNome: 'will', experiencia: 12 };
const { primeiroNome: cnome, experiencia: cxp } = cientista;
console.log(`O meu nome é ${cnome} e tenho ${cxp} anos de experiência`);
