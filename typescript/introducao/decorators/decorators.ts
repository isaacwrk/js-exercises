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

new Eletrodomestico()
new Eletrodomestico()
new Eletrodomestico()