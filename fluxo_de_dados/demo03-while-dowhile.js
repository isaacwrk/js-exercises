//enquanto nao mudar não para!
let termoDeParada = true
let contator = 0
while(termoDeParada){
    termoDeParada = contator < 10
    if(contator % 2 === 0){
        console.log('Numero par', contator)
    }
    contator += 1
    // contator = contador +1
}

//roda a primeira vez e testa a variavel depois
do{
    console.log('Só uma vez! pois termoDeParada é ', termoDeParada)
}while(termoDeParada)