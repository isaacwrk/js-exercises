const heroi = {
    nome: "Flash",
    idade: 100,
    sexo: "Masculino"
}

console.log('nome', heroi.nome)
console.log('idade', heroi['idade'])
console.log('sexo', heroi.sexo)
console.log('naoExiste', heroi.naoExiste)

//adicionando id no array heroi
heroi.id = 0001
console.log(heroi)

//pegar as chaves do object 
console.log(Object.keys(heroi))

//pegar valores das chaves do objects
console.log(Object.values(heroi))

//Juntar dois objetos
const pessoa = {
    tamanho : '2 metros'
}
const novoObj = Object.assign(heroi,pessoa)
//deletando
delete novoObj.nome
console.log(novoObj)
