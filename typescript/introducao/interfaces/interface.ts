interface Humano{
    nome: String
    idade?:number
    //receber propriedade aleatoria
    [prop: string]: any
    saudar(sobrenome:string):void
}

function saudarComOla(pessoa: Humano){
    console.log('Olá ' + pessoa.nome)
}

function mudarNome(pessoa: Humano){
    pessoa.nome = 'Joana'
}

const pessoa: Humano = {
    nome: 'João',
    idade: 27,
    saudar(sobrenome:string){
        console.log('Olá meu nome é '+ this.nome  +' '+  sobrenome)
    }
}

saudarComOla(pessoa)
mudarNome(pessoa)
saudarComOla(pessoa)
pessoa.saudar('Zoro')

//usando Classes 
class Cliente implements Humano{
    nome: string = ''
    ultimaCompra: Date = new Date
    saudar(sobrenome:string){
        console.log('Olá meu nome é ' + this.nome + ' ' + sobrenome)
    }
}

const meuCliente = new Cliente()
meuCliente.nome = 'Han'
saudarComOla(meuCliente)
meuCliente.saudar('Solo')
console.log(meuCliente.ultimaCompra)

//Interface função

interface FuncaoCalculo{
    (a:number,b:number):number
}

let potencia: FuncaoCalculo

potencia = function(base:number,exp:number):number{
    return Math.pow(base,exp)
}

console.log(potencia(3,10))