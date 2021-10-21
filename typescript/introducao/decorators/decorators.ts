//@logarClasse
function logarClasse(construtor: Function){
    console.log(construtor)
}

function decoratorVazio(_:Function){}

function logarClasseSe(valor:boolean){
    return valor ? logarClasse : decoratorVazio
}

//factory
//@decorator({a:'teste',b:12})
function decorator(obj:{a:string, b?:number}){
    return function(constructor: Function):void{
        console.log(obj.a+' ' + obj.b)
    }
}


@logarObjeto
class Eletrodomestico {
    constructor(){
        console.log('novo...')
    }
}
//assinatura de construtor genérico
type Construtor = {new(...args:any[]):{} }

//função que retorna uma  uma subclasse da classe do construtor
function logarObjeto(construtor: Construtor){
    console.log('Carregado...')
    return class extends construtor{
        constructor(...args:any[]){
            console.log('Antes...')
            super(...args)
            console.log('Depois...')
        }
    }
}


//interface para reforçar os tipos
interface Eletrodomestico2 {
    imprimir?(): void
}

@imprimivel
class Eletrodomestico2 {
    constructor(){
        console.log('novo...')
    }
}

function imprimivel(construtor: Construtor){
    construtor.prototype.imprimir = function(){
        console.log(this)
    }
}

const eletro = new Eletrodomestico2()
eletro.imprimir && eletro.imprimir()

//Desafio Decorator perfilAdmin

const usuarioLogado = {
    nome: 'Guilherme Filho',
    email: 'guigui@gmail.com',
    admin: false
}
 
@perfilAdmin
class MudancaAdministrativa {
    critico() {
        console.log('Algo crítico foi alterado!')
    }
}

function perfilAdmin<T extends Construtor>(constructor: T){
    return class extends constructor {
       constructor(...args: any[]){
           super(...args)
           if(!usuarioLogado || !usuarioLogado.admin){
               throw new Error('sem permissão')
           }
       }
    } 
}
 
new MudancaAdministrativa().critico()