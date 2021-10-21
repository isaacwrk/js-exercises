function echo(objeto:any){
    return objeto
}

//criando função generics
function echoMelhorado <Generico>(objeto: Generico):Generico{
    return objeto
}
//o generico se adapta ao tipo que eu vou inserir, é um tipo definido no momento da execução da função
console.log(echoMelhorado('João').length)
console.log(echoMelhorado<number>(27))
console.log(echoMelhorado({nome: 'João', idade:27}))

//generics disponiveis na API
const avaliacoes : Array<number> = [10,9.3,7.7]
avaliacoes.push(8.4)
//avaliacoes.push('5.5')
console.log(avaliacoes)

//generics array #02
function imprimir<T>(args: T[]){
    args.forEach(el => console.log(el))
}

imprimir([1,2,3])
//resolvendo o tipo de forma explicita
imprimir<number>([1,4,5])
imprimir<string>(['Ana','Bia','Carlos'])
imprimir<{nome:string, idade:number}>([
    {nome:'Isaac',idade:24},
    {nome:'Zé',idade:20},
    {nome:'Viviane',idade:27}
])

type Aluno = {nome:string, idade:number}
imprimir<Aluno>([
    {nome:'Junio',idade:24},
    {nome:'Zé',idade:20},
    {nome:'Viviane',idade:27}
])

//tipo genérico
type Echo =  <T>(data: T)=>T
const chamarEcho: Echo = echoMelhorado
console.log(chamarEcho<string>('algumacoosa'))

//Classes com genéricos
abstract class OperacaoBinaria<T, R>{
    constructor(public operando1:T, public operando2:T){}
    abstract executar(): R
}

//resolvendo o generico apartir da herança
class SomaBinaria extends OperacaoBinaria<number,number>{
    executar():number{
        return this.operando1 + this.operando2
    }
}
console.log(new SomaBinaria(3,4).executar())
//console.log(new OperacaoBinaria('Bom','Dia').executar())
//console.log(new OperacaoBinaria(2,2).executar())

// construindo generico para pegar intervalo entre dias
class DiffData extends OperacaoBinaria<Data, String>{
    getTime(data:Data):number{
        let {dia, mes, ano} = data
        return new Date(`${mes}/${dia}/${ano}`).getTime()
    }
    executar():string{
        const t1 = this.getTime(this.operando1)
        const t2 = this.getTime(this.operando2)
        const diff = Math.abs(t1-t2)
        const dia = 1000 * 60 * 60 * 24
        return `${Math.ceil(diff / dia)} dias`
    }
}

const d1 = new Data(1,2,2020)
const d2 = new Data(5,2,2020)
console.log(new DiffData(d1,d2).executar())

//Desafio Classe Fila Generics
//atributo: fila Array
//Metodos : entrar push, proximo splice , imprimir console

//criando classe generica com um type generico array
class Fila <T> {
    private fila: Array<T>
    constructor(...args: T[]){
        this.fila = args
    }

    //criando metodos
    entrar(elemento: T){
        this.fila.push(elemento)
    }

    proximo():T | null{
        if(this.fila.length >= 0 && this.fila[0] ){
        const primeiro = this.fila[0]
        this.fila.splice(0,1)
        return primeiro} else{
            return null
        }
    }

    imprimir(){
        console.log(this.fila)
    }
}

//tipando os tipos da classe
const fila = new Fila<string>('Jose','Maria','Ana','Lu')

fila.imprimir()
fila.entrar('luna')
fila.imprimir()
console.log(fila.proximo())
console.log(fila.proximo())
console.log(fila.proximo())
console.log(fila.proximo())
console.log(fila.proximo())
console.log(fila.proximo())
console.log(fila.proximo())
