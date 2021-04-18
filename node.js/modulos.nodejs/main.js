const Matematica = require('./matematica')
const readline = require('readline')
const terminal = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

terminal.question('Insira o primeiro valor \n', valor1=>{
    terminal.question('Insira o segundo valor \n', valor2=> {
        terminal.question('Insira a operacao \n', tipoOperacao=>{
            const resultado = Matematica[tipoOperacao](
                Number(valor1), Number(valor2)
            )
            console.log(
                `A operação ${tipoOperacao} de ${valor1} e ${valor2} é ${resultado}`
            )
            terminal.close()
        })
        
    })
})