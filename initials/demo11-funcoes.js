function nomeDaFuncao(){

}

function queDiaEhoje(){
    const data = new Date()
    console.log(`Hoje é dia : ${data.getDate()}`)
}

queDiaEhoje()

function soma(valor1, valor2){
    console.log(`A soma de ${valor1} + ${valor2} é`, valor1+valor2)
}
soma(10,20)
soma(3,4)

//Funções podem retornar valores
function soma(valor1, valor2){
    return valor1 + valor2
}

const idade = 20
const tamanho = 10
const resultado = soma(idade, tamanho)
console.log('resultado:',resultado)


const funcionario1 = {
    nome:'Isaac',
    desconto:0.2,
    salarioBruto: 2000,
    salarioLiquido:0
}

const funcionario2 = {
    nome:'Vivi',
    desconto:0.1,
    salarioBruto: 2100,
    salarioLiquido:0
}

// const descontoFuncionario1 = 
//     funcionario1.salarioBruto - ( funcionario1.desconto * funcionario1.salarioBruto)

// const descontoFuncionario2 = 
//     funcionario2.salarioBruto - ( funcionario2.desconto * funcionario2.salarioBruto)

// // console.log(
// //     `Funcionário 1: ${descontoFuncionario1}
// //      Funcionário 2: ${descontoFuncionario2}`
// // )

function calcularDesconto(salarioBruto, desconto){
    return salarioBruto - (salarioBruto * desconto)
}

funcionario1.salarioLiquido = calcularDesconto(
    funcionario1.salarioBruto,
    funcionario1.desconto
)

funcionario2.salarioLiquido = calcularDesconto(
    funcionario2.salarioBruto,
    funcionario2.desconto
)

console.log(
    `Salário ${funcionario1.nome}: ${funcionario1.salarioLiquido}
    Salário  ${funcionario2.nome}: ${funcionario2.salarioLiquido}
    `
)