//Array Vazio
const minhaLista = []

//Array populado
const minhasBandas = [
    "Megadeth",
    "Angra",
    "Sepultura",
    "Gojira",
    "Trivium",
    "Helloween"
]

// //buscando certo index dentro do array
// console.log(minhasBandas[2])

// //quantidade de itens no array
// console.log(minhasBandas.length)

// //adicionar itens no array
// minhasBandas.push('Havok')

// console.log(minhasBandas)

// //Remover o ultimo item do array e visualizar 
// const ultimo = minhasBandas.pop()
// console.log(ultimo, minhasBandas)

// //Remover o primeiro item do array 
// const primeiro = minhasBandas.shift()
// console.log(primeiro, minhasBandas)

// //Remover um item especifico baseado no indice
// //qual item remover e quantos remover
// minhasBandas.splice(3, 1)


//array com vários tipos de dados
const itens = [
    1, "computador", 0.22
]

//verificar o tipo do array
console.log(typeof(itens))

//verificar se é Array da forma correta
console.log(Array.isArray(itens))

//Ordenar 
const numeros = [4,5,8,3,6,1]
console.log(numeros.sort())

//juntar dois arrays
const novo = itens.concat([1,2,3])
console.log(novo)

//juntar dois arrays em uma string e escolher o separador
console.log(itens.join('-'))