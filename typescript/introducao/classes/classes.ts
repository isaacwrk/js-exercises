class Data{
    dia:number 
    mes:number
    ano:number

    constructor(dia:number = 1, mes:number = 1,ano:number = 1970){
        this.dia = dia
        this.mes = mes
        this.ano = ano
    }
}

const aniversario = new Data(3,11,1991)
aniversario.dia =4
console.log(aniversario.dia)
console.log(aniversario)

const casamento = new Data //posso omitir os ()
casamento.ano = 2019
console.log(casamento)


class DataEsperta{
 
    constructor(public dia:number = 1,public mes:number = 1, public ano:number = 1970){
    }
}

const aniversarioEsperto = new DataEsperta(3,11,1991)
aniversarioEsperto.dia =18
console.log(aniversarioEsperto.dia)
console.log(aniversarioEsperto)

const casamentoEsperto = new DataEsperta //posso omitir os ()
casamentoEsperto.ano = 2019
console.log(casamentoEsperto)


//Desafio Produto 
//Atributos : nome, preco e desconto
//Criar o construtor
//Obs 1: Desconto é opcional(valor padrão 0)
//Obs 2: Criar dois produtos: passando dois e tres params

//metodos são comportamentos associados a classe
class Produto{
    constructor(public nome:string, public preco:number, public desconto:number = 0){}

    public resumo():string{
        return `${this.nome} custa ${this.preco} (${this.desconto * 100}% OFF)`
    }
}

const meuProduto = new Produto('Iphone',4000)
console.log(meuProduto.resumo())
const meuProdutoDesconto = new Produto('Iphone C', 3000, 0.2)
console.log(meuProdutoDesconto.resumo())

//Desafio 02
//Criar um método chamado preçoComDesconto
//quais os parametros e o retorno?
//alterar método resumo para mostrar o preço com desconto
class ProdutoD{
    constructor(public nome:string, public preco:number, public desconto:number = 0){}

    //criando método de calculo
    public precoComDesconto():number{
        return this.preco *(1- this.desconto)
    }
    //chamando no template string
    public resumo():string{
        return `${this.nome} custa com descontos ${this.precoComDesconto()} (${this.desconto * 100}% OFF)`
    }
}

const prod1 = new ProdutoD('Motog',900,0.2)
console.log(prod1.resumo())