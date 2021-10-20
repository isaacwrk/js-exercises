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
class Produto {
    constructor(nome, preco, desconto = 0) {
        this.nome = nome;
        this.preco = preco;
        this.desconto = desconto;
    }
}
const meuProduto = new Produto('Iphone', 4000);
console.log(meuProduto);
const meuProdutoDesconto = new Produto('Iphone C', 3000, 0.2);
console.log(meuProdutoDesconto);
