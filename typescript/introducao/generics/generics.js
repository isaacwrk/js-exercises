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
const chamarEcho = echoMelhorado;
console.log(chamarEcho('algumacoosa'));
//Classes com genéricos
class OperacaoBinaria {
    constructor(operando1, operando2) {
        this.operando1 = operando1;
        this.operando2 = operando2;
    }
}
//resolvendo o generico apartir da herança
class SomaBinaria extends OperacaoBinaria {
    executar() {
        return this.operando1 + this.operando2;
    }
}
console.log(new SomaBinaria(3, 4).executar());
//console.log(new OperacaoBinaria('Bom','Dia').executar())
//console.log(new OperacaoBinaria(2,2).executar())
// construindo generico para pegar intervalo entre dias
class DiffData extends OperacaoBinaria {
    getTime(data) {
        let { dia, mes, ano } = data;
        return new Date(`${mes}/${dia}/${ano}`).getTime();
    }
    executar() {
        const t1 = this.getTime(this.operando1);
        const t2 = this.getTime(this.operando2);
        const diff = Math.abs(t1 - t2);
        const dia = 1000 * 60 * 60 * 24;
        return `${Math.ceil(diff / dia)} dias`;
    }
}
const d1 = new Data(1, 2, 2020);
const d2 = new Data(5, 2, 2020);
console.log(new DiffData(d1, d2).executar());
//Desafio Classe Fila Generics
//atributo: fila Array
//Metodos : entrar push, proximo splice , imprimir console
//criando classe generica com um type generico array
class Fila {
    constructor(...args) {
        this.fila = args;
    }
    //criando metodos
    entrar(elemento) {
        this.fila.push(elemento);
    }
    proximo() {
        if (this.fila.length >= 0 && this.fila[0]) {
            const primeiro = this.fila[0];
            this.fila.splice(0, 1);
            return primeiro;
        }
        else {
            return null;
        }
    }
    imprimir() {
        console.log(this.fila);
    }
}
//tipando os tipos da classe
const fila = new Fila('Jose', 'Maria', 'Ana', 'Lu');
fila.imprimir();
fila.entrar('luna');
fila.imprimir();
console.log(fila.proximo());
console.log(fila.proximo());
console.log(fila.proximo());
console.log(fila.proximo());
console.log(fila.proximo());
console.log(fila.proximo());
console.log(fila.proximo());
