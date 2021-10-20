//Desafio 01 - Classe converter para typescript 
class Moto{
    public velocidade: number  = 0
    constructor(
        public nome:string 
         ){}

    public buzinar(){
        return console.log('Bibiiiiiiiii!')
    }

    acelerar(delta:number){
        this.velocidade = this.velocidade + delta
    }

    frear(delta:number){
        this.velocidade = this.velocidade - delta
    }

}
const moto = new Moto('Yamaha MT-03')
moto.buzinar()
console.log(moto.velocidade)
moto.acelerar(30)
console.log(moto.velocidade)

//Desafio 02 Herança 
class objeto2D{
    constructor (
        public base: number = 0,
        public altura: number = 0){}
    

    calculo(){
        return this.base * this.altura
    }
}
class Retangulo extends objeto2D{}
const retangulo = new Retangulo(2,5)
console.log(`A Area do retangulo é: ${retangulo.calculo()}`)

//Desafio 03 Getters and Setters

class Estagiario{
    private _primeiroNome: string = ''

    get primeiroNome(): string{
        return this._primeiroNome
    }

    set primeiroNome(valor:string){
        if(valor.length >= 3){
            this._primeiroNome = valor
        } else{
            this._primeiroNome = ''
        }
    }
}
const estagiario = new Estagiario
console.log(estagiario)
estagiario.primeiroNome = 'Le'
console.log(estagiario.primeiroNome)
estagiario.primeiroNome = 'Leonardo'
console.log(estagiario.primeiroNome)

