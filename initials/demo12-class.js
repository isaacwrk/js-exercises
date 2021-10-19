class Heroi{
    atacar(){
        console.log(`atacou!`)
    }
    defender(){
        console.log(`defendeu!`)
    }
}

const heroi = new Heroi()
heroi.atacar()
heroi.defender()

//Usando construtor

class Heroi2{
    constructor(nome,idade){
        this.nome = nome
        this.idade = idade
    }

    atacar(){
        console.log(
            `O ${this.nome} atacou!!`
        )
    }
}

const heroi2 = new Heroi2(
    'Flash', 26
)

heroi2.atacar()