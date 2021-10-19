const podeDirigir = true
if(podeDirigir){
    console.log('Pode dirigir!')
}

const saldoEmConta = 0
if(!saldoEmConta){
    console.log('Não tem saldo!')
}

const boolComString = "ae Hackerzão"
// Força o valor a true ou false
// de acordo com a tabela
console.log('boolComString', !!boolComString)

//negacao
console.log('negação', !boolComString)

// negação + forçar a bool
console.log(
    'forçar o bool +',
    !(!!boolComString)
)