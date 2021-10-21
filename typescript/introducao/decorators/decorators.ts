//@logarClasse
@logarClasseSe(true)
@decorator({a:'teste',b:12})

class Eletrodomestico {
    constructor(){
        console.log('novo...')
    }
}

function logarClasse(construtor: Function){
    console.log(construtor)
}

function decoratorVazio(_:Function){}

function logarClasseSe(valor:boolean){
    return valor ? logarClasse : decoratorVazio
}

//factory
function decorator(obj:{a:string, b?:number}){
    return function(constructor: Function):void{
        console.log(obj.a+' ' + obj.b)
    }
}