// meses com zero
const dataDeAniversario  = new Date(1997,0,20)
console.log(dataDeAniversario)

const primeiraDataDoJS = new Date(0)
console.log(primeiraDataDoJS)

const hoje = new Date()
console.log(hoje.toString())


//formato global recomendado!
console.log(hoje.toISOString())