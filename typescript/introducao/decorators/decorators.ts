@logarClasse

class Eletrodomestico {
    constructor(){
        console.log('novo...')
    }
}

function logarClasse(construtor: Function){
    console.log(construtor)
}

new Eletrodomestico()
new Eletrodomestico()
new Eletrodomestico()