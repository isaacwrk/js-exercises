"use strict";
class Data {
    constructor(dia = 1, mes = 1, ano = 1970) {
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
    }
}
const aniversario = new Data(3, 11, 1991);
aniversario.dia = 4;
console.log(aniversario.dia);
console.log(aniversario);
const casamento = new Data; //posso omitir os ()
casamento.ano = 2019;
console.log(casamento);
class DataEsperta {
    constructor(dia = 1, mes = 1, ano = 1970) {
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
    }
}
const aniversarioEsperto = new DataEsperta(3, 11, 1991);
aniversarioEsperto.dia = 18;
console.log(aniversarioEsperto.dia);
console.log(aniversarioEsperto);
const casamentoEsperto = new DataEsperta; //posso omitir os ()
casamentoEsperto.ano = 2019;
console.log(casamentoEsperto);
//Desafio Produto 
//Atributos : nome, preco e desconto
//Criar o construtor
//Obs 1: Desconto é opcional(valor padrão 0)
//Obs 2: Criar dois produtos: passando dois e tres params
//metodos são comportamentos associados a classe
class Produto {
    constructor(nome, preco, desconto = 0) {
        this.nome = nome;
        this.preco = preco;
        this.desconto = desconto;
    }
    resumo() {
        return `${this.nome} custa ${this.preco} (${this.desconto * 100}% OFF)`;
    }
}
const meuProduto = new Produto('Iphone', 4000);
console.log(meuProduto.resumo());
const meuProdutoDesconto = new Produto('Iphone C', 3000, 0.2);
console.log(meuProdutoDesconto.resumo());
//Desafio 02
//Criar um método chamado preçoComDesconto
//quais os parametros e o retorno?
//alterar método resumo para mostrar o preço com desconto
class ProdutoD {
    constructor(nome, preco, desconto = 0) {
        this.nome = nome;
        this.preco = preco;
        this.desconto = desconto;
    }
    //criando método de calculo
    precoComDesconto() {
        return this.preco * (1 - this.desconto);
    }
    //chamando no template string
    resumo() {
        return `${this.nome} custa com descontos ${this.precoComDesconto()} (${this.desconto * 100}% OFF)`;
    }
}
const prod1 = new ProdutoD('Motog', 900, 0.2);
console.log(prod1.resumo());
//Modificadores de acesso
class Carro {
    constructor(marca, modelo, velocidadeMaxima = 200) {
        this.marca = marca;
        this.modelo = modelo;
        this.velocidadeMaxima = velocidadeMaxima;
        this.velocidadeAtual = 0;
    }
    alterarVelocidade(delta) {
        const novaVelocidade = this.velocidadeAtual + delta;
        const velocidadeValida = novaVelocidade >= 0 && novaVelocidade <= this.velocidadeMaxima;
        if (velocidadeValida) {
            this.velocidadeAtual = novaVelocidade;
        }
        else {
            this.velocidadeAtual = delta > 0 ? this.velocidadeMaxima : 0;
        }
        return this.velocidadeAtual;
    }
    acelerar() {
        return this.alterarVelocidade(5);
    }
    frear() {
        return this.alterarVelocidade(-5);
    }
}
const carro1 = new Carro('Ford', 'Ka', 185);
Array(50).fill(0).forEach(() => carro1.acelerar());
console.log(carro1.acelerar);
//heranças
class Ferrari extends Carro {
    //alterando metodos especificos para a herança ferrari lembrando que a classe pai precisa estar public | protected para herdar
    acelerar() {
        return this.alterarVelocidade(20);
    }
    frear() {
        return this.alterarVelocidade(-20);
    }
}
const f40 = new Ferrari('Ferrari', 'F40', 324);
console.log(`${f40.marca} ${f40.modelo}`);
console.log(f40.acelerar());
