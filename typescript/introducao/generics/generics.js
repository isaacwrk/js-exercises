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
//generics array #02
function imprimir(args) {
    args.forEach(el => console.log(el));
}
imprimir([1, 2, 3]);
//resolvendo o tipo de forma explicita
imprimir([1, 4, 5]);
imprimir(['Ana', 'Bia', 'Carlos']);
imprimir([
    { nome: 'Isaac', idade: 24 },
    { nome: 'Zé', idade: 20 },
    { nome: 'Viviane', idade: 27 }
]);
imprimir([
    { nome: 'Junio', idade: 24 },
    { nome: 'Zé', idade: 20 },
    { nome: 'Viviane', idade: 27 }
]);
