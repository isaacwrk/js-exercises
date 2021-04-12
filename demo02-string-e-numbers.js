let salarioDoAmigo = 2000
let meuSalario = "2999.14"
//convertendo de string para number
let meuSalarioCorrigido = Number(meuSalario)

//somando as variaveis
console.log(
    salarioDoAmigo+meuSalarioCorrigido
)
//verificando o tipo da variavel
console.log(
    typeof(salarioDoAmigo),salarioDoAmigo
)
console.log(
    typeof(meuSalario), meuSalario
)

//verificar se é um number
console.log(
    isNaN(meuSalario)
)

//Criando Duas Strings e concatenando
let minhaString = 'Olá Mundo'
let outraString = "Olá mundo 2"
let minhaStringComVariaveis =
`${minhaString} - ${outraString}. teste`

console.log(minhaStringComVariaveis)
