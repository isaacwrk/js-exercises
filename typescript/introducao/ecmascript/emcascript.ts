// let & const
let seraQuePode = '?'
console.log(seraQuePode)

let estaFrio:boolean = true
if(estaFrio){
    let acao  = 'Colocar o casaco!'
    console.log(acao)
}

var segredo = 'externo!'
function revelar(){
    const segredo = 'interno'
    console.log(segredo)
}
revelar()
console.log(segredo)


function somar(n1:number, n2:number):number{
    return n1+n2
}
console.log(somar(1,1))
//arrow function
const subtrair = (n1:number,n2:number) => n1-n2
console.log(subtrair(5,2))

const saudacao = () => console.log('Ola')
saudacao()

//em uma arrow function no typescript precisa passar os valores dentro do parentese
const falarCom = (pessoa:string) => console.log('Ola ' + pessoa)
falarCom('João')

//this

function normalComThis(){
    console.log(this)
}

//bind o que eu passar como parametro vai ser usado dentro da funcao como this
const normalComThisEspecial = normalComThis.bind({nome:'eu'})
normalComThisEspecial()

//quem é o this neste ponto???
console.log(this)
const arrComThis = () => console.log(this)
arrComThis()

const arrowComthisEspecial = arrComThis.bind({nome:'euzinho'})
arrowComthisEspecial()