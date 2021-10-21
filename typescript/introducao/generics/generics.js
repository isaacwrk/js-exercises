"use strict";
function echo(objeto) {
    return objeto;
}
//criando função generics
function echoMelhorado(objeto) {
    return objeto;
}
//o generico se adapta ao tipo que eu vou inserir, é um tipo definido no momento da execução da função
console.log(echoMelhorado('João').length);
console.log(echoMelhorado(27));
console.log(echoMelhorado({ nome: 'João', idade: 27 }));
//generics disponiveis na API
const avaliacoes = [10, 9.3, 7.7];
avaliacoes.push(8.4);
//avaliacoes.push('5.5')
console.log(avaliacoes);
