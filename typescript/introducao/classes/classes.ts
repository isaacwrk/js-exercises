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


//Modificadores de acesso
class Carro {
    private velocidadeAtual:number = 0
    constructor(public marca:string,
        public modelo:string,
        private velocidadeMaxima:number = 200){  
    }

    protected alterarVelocidade(delta:number):any{
        const novaVelocidade = this.velocidadeAtual + delta
        const velocidadeValida = novaVelocidade >=0 && novaVelocidade <= this.velocidadeMaxima
        if(velocidadeValida){
            this.velocidadeAtual = novaVelocidade
        }else{
            this.velocidadeAtual = delta > 0 ? this.velocidadeMaxima : 0 
        }
        return this.velocidadeAtual
    }

    public acelerar():number{
        return this.alterarVelocidade(5)
    }

    public frear():number{
        return this.alterarVelocidade(-5)
    }
}

const carro1 = new Carro('Ford','Ka',185)
Array(50).fill(0).forEach(()=>carro1.acelerar())
console.log(carro1.acelerar)

//heranças
class Ferrari extends Carro{
    /*alterando metodos especificos para a herança ferrari lembrando que a classe pai precisa estar public | protected para herdar
    posso também criar um construitor especifico para essa herança mas preciso chamar o construtor original com super()
    */
    constructor(modelo:string, velocidadeMaxima:number){
        super('Ferrari',modelo, velocidadeMaxima)
    }
    public acelerar():number{
        return this.alterarVelocidade(20)
    }

    public frear():number{
        return this.alterarVelocidade(-15)
    }
}

const f40 = new Ferrari('F40', 324)
console.log(`${f40.marca} ${f40.modelo}`)
console.log(f40.acelerar())

//Getters & Setters
class Pessoa{
    private _idade: number = 0

    get idade():number{
        return this._idade
    }

    set idade(valor:number){
        if(valor >= 0 && valor <= 120){
            this._idade = valor
        }
    }
}

const pessoa1 = new Pessoa
pessoa1.idade = 10
console.log(pessoa1)

//Métodos e atributos estáticos -> quando nao há necessidade de estar instanciando em outro lugar
class Matematica{
    static PI: number = 3.1416

    static areaCircunferencia(raio:number):number{
        return this.PI * raio * raio
    }
}
console.log(Matematica.areaCircunferencia(4))

// Somente leitura 
class Aviao{
    public readonly modelo:string
    
    constructor(modelo:string, public readonly prefixo :string ){
        this.modelo = modelo 
    }
}

const turboHelice = new Aviao('Tu-114', 'PT-ABC')
console.log(turboHelice)
