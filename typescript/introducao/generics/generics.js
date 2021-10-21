"use strict";
function echo(objeto) {
    return objeto;
}
//criando função generics
function echoMelhorado(objeto) {
    return objeto;
}
//o generico se adapta ao tipo que eu vou inserir
console.log(echoMelhorado('João').length);
console.log(echoMelhorado(27));
console.log(echoMelhorado({ nome: 'João', idade: 27 }));
