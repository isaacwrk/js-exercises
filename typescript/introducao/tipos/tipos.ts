//string
let nome: string = 'Isaac'
console.log(nome)

//number
let idade: number = 27
idade = 25.8
console.log(idade)

//boolean
let possuiHobbies: boolean = false
console.log(possuiHobbies)

//tipos explícitos
let minhaIdade: number
minhaIdade = 23
console.log(typeof minhaIdade)


//array utilizando :any posso ter qualquer tipo de dado no array
let hobbies: any[] = ['Cozinhar','Jogar','Dormir']
console.log(hobbies[0])
console.log(typeof hobbies)

hobbies = [110,200,300,'oi']
console.log(hobbies)

//tuplas-> precisa que os dados inseridos sigam a sequencia do tipo de dados
let endereco:[string,number, string] = ["Av principal", 99, 'casa']
console.log(endereco)

endereco = ['Rua da rua', 258,'']
console.log(endereco)

//enums -> estrutras que determinam valores pré-definidos

enum Cor{
    Cinza,
    //determinando valor padrão
    Verde = 100,
    Azul,
    Amarelo,
    Vermelho,
    Laranja
}

let minhaCor: Cor = Cor.Verde
console.log(minhaCor)
console.log(Cor.Azul)
console.log(Cor.Verde, Cor.Amarelo,Cor.Cinza)

//Any => importante para flexibilizar o código 
let carro: any = 'BMW'
console.log(carro)
carro = {marca: 'BMW', ano:2019}
console.log(carro)

//Funcoes

function retornaMeuNome():string{
    return nome
}
console.log(retornaMeuNome())


//:void -> deixa explicito que essa função nao retorna nada
function digaOi():void{
    console.log('Oi')
}
digaOi()

// setando parametros e setando seus tipos
function multiplicar(nA: number, nB:number ):number{
    return nA * nB
}
console.log(multiplicar(20,2))


// é possivel de tipar os parametros da funcao e a assinatura da funcao
const teste = function(a: number, b:number): boolean{
    return false
}
//tipo funcao => uma variavel que obrigatoriamente vai receber uma função
let calculo:(numeroA:number,numeroB:number)=> number 

calculo = multiplicar
console.log(calculo(5,60))

//objetos
let usuario: {nome:string, idade:number} = {
    nome: 'Isaac',
    idade: 27
}
console.log(usuario)

usuario = {
    nome: 'ze',
    idade:20
}
console.log(usuario)

//Desafio
/* Criar um objeto funcionário com:
    - Array de strings com os nomes dos supervisores
    -Função de bater  ponto que recebe a hora (número)
    e retorna uma string
    ->ponto normal(<=8)
    ->fora do horário (> 8)
*/
//resposta
let funcionario:{
    supervisores: string[], 
    baterPonto:(horas:number)=>string
} = {
    supervisores:['Isaac', 'Fernando'],
    baterPonto(horario:number):string{
        if(horario >= 8){
            return 'Ponto normal'
        } else{
            return 'Fora do horário'
        }
    }
}
console.log(funcionario.supervisores)
console.log(funcionario.baterPonto(8))

//Criando um alias para guardas os tipos dos dados do desafio
type Funcionario = {
    supervisores: string [],
    baterPonto:(horas:number) => string
}
//passando o alias na função
let funcionario2:Funcionario = {
    supervisores:['Vivi', 'Lulu'],
    baterPonto(horario:number):string{
        if(horario >= 8){
            return 'Ponto normal'
        } else{
            return 'Fora do horário'
        }
    }
}
console.log(funcionario2.supervisores)
console.log(funcionario2.baterPonto(7))

//Union Types
let nota:number | string = 10
console.log(`Minha nota é ${nota}`)

//Tipo never é uma função que não tem um endpoint alcançável
function falha(msg:string): never{
    throw new Error(msg)
}
const produto = {
    nome:'Sabão',
    preco: 1,
    validarProduto(){
        if(!this.nome || this.nome.trim().length == 0){
            falha('precisa ter um nome')
        }
        if(this.preco <= 0 ){
            falha('preço inválido')
        }
    }
}
produto.validarProduto()

type Contato = {
    nome:string,
    tel1:number,
    tel2:number | null
}
const contato1: Contato ={
    nome:'Isaac',
    tel1:56404,
    tel2:null
}


//Desafio Conta Bancária
type Conta={
    saldo:number,
    depositar:(valor:number)=>void
}
let contaBancaria:any = {
    saldo: 3456,
    depositar(valor:any) {
        this.saldo += valor
    }
}

type Correntista={
    nome: string,
    contaBancaria: any,
    contatos:string[]
}
let correntista:Correntista = {
    nome: 'Ana Silva',
    contaBancaria: contaBancaria,
    contatos: ['34567890', '98765432']
}
 
correntista.contaBancaria.depositar(4000)
console.log(correntista)