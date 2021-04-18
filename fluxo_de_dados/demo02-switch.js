const readLine = require('readline')
const terminal = readLine.createInterface({
    //definir o modo de entrada via terminal
    input: process.stdin,
    //todo texto de saída vai sair no terminal
    output: process.stdout
})

//texto do menu
const textoMenu = `
Olá seja bem-vindo ao sistema de media,
Digite 1 para acessar o menu inicial
Digite 2 para acessar o menu de heróis
Digite 3 para acesar o menu de guerreiros
digite 0 para sair 
`
// console.log('textoMenu', textoMenu);

// const opcao = 2
// switch(opcao){
//     case 1:
//         console.log('pressionou 1')
//         break;
//     case 2:
//         console.log('pressionou 2')
//         break;
//     default:
//         console.log('opção inválida')
//         break;
// }

// terminal.question('Qual o seu nome?', (msg) =>{
//     console.log('Voce digitou', msg)
//     terminal.close()
// })

const questoes = {
    menuInicial:{
        texto: textoMenu,
        fn: menuInicial
    },
    opcao1:{
        texto:"isto é um submenu! pressione enter para selecionar mais opcoes..",
        fn: opcao1
    }
}

function opcao1(msg){
    console.log('Não existe mais opções!')
    terminal.close()
}
function menuInicial(msg){
    const opcao = Number(msg)
    if(isNaN(opcao)){
        throw new Error('Não é um número :/', msg)
    }
    switch(opcao){
        case 0:
            console.log('Saindo...')
            terminal.close()
            break;
        
        case 1:
            console.log('Menu inicial')
            terminal.question(
                questoes.opcao1.texto,
                questoes.opcao1.fn
            )
            break;
        
        default:
            console.log('Opção Inválida')
            terminal.close()
            break;
            }
}

terminal.question(
    questoes.menuInicial.texto,
    questoes.menuInicial.fn
)