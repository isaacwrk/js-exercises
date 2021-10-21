function echo(objeto:any){
    return objeto
}

//criando função generics
function echoMelhorado <Generico>(objeto: Generico):Generico{
    return objeto
}
//o generico se adapta ao tipo que eu vou inserir
console.log(echoMelhorado('João').length)
console.log(echoMelhorado<number>(27))
console.log(echoMelhorado({nome: 'João', idade:27}))