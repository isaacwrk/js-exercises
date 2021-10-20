"use strict";
//Desafio 01 - Classe converter para typescript 
class Moto {
    constructor(nome) {
        this.nome = nome;
        this.velocidade = 0;
    }
    buzinar() {
        return console.log('Bibiiiiiiiii!');
    }
    acelerar(delta) {
        this.velocidade = this.velocidade + delta;
    }
    frear(delta) {
        this.velocidade = this.velocidade - delta;
    }
}
const moto = new Moto('Yamaha MT-03');
moto.buzinar();
console.log(moto.velocidade);
moto.acelerar(30);
console.log(moto.velocidade);
//Desafio 02 Herança 
class objeto2D {
    constructor(base = 0, altura = 0) {
        this.base = base;
        this.altura = altura;
    }
    calculo() {
        return this.base * this.altura;
    }
}
class Retangulo extends objeto2D {
}
const retangulo = new Retangulo(2, 5);
console.log(`A Area do retangulo é: ${retangulo.calculo()}`);
//Desafio 03 Getters and Setters
class Estagiario {
    constructor() {
        this._primeiroNome = '';
    }
    get primeiroNome() {
        return this._primeiroNome;
    }
    set primeiroNome(valor) {
        if (valor.length >= 3) {
            this._primeiroNome = valor;
        }
        else {
            this._primeiroNome = '';
        }
    }
}
const estagiario = new Estagiario;
console.log(estagiario);
estagiario.primeiroNome = 'Le';
console.log(estagiario.primeiroNome);
estagiario.primeiroNome = 'Leonardo';
console.log(estagiario.primeiroNome);
