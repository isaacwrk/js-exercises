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