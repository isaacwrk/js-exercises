"use strict";
//string
var nome = 'Isaac';
console.log(nome);
//number
var idade = 27;
idade = 25.8;
console.log(idade);
//boolean
var possuiHobbies = false;
console.log(possuiHobbies);
//tipos explícitos
var minhaIdade;
minhaIdade = 23;
console.log(typeof minhaIdade);
//array utilizando :any posso ter qualquer tipo de dado no array
var hobbies = ['Cozinhar', 'Jogar', 'Dormir'];
console.log(hobbies[0]);
console.log(typeof hobbies);
hobbies = [110, 200, 300, 'oi'];
console.log(hobbies);
//tuplas-> precisa que os dados inseridos sigam a sequencia do tipo de dados
var endereco = ["Av principal", 99, 'casa'];
console.log(endereco);
endereco = ['Rua da rua', 258, ''];
console.log(endereco);
//enums -> estrutras que determinam valores pré-definidos
var Cor;
(function (Cor) {
    Cor[Cor["Cinza"] = 0] = "Cinza";
    //determinando valor padrão
    Cor[Cor["Verde"] = 100] = "Verde";
    Cor[Cor["Azul"] = 101] = "Azul";
    Cor[Cor["Amarelo"] = 102] = "Amarelo";
    Cor[Cor["Vermelho"] = 103] = "Vermelho";
    Cor[Cor["Laranja"] = 104] = "Laranja";
})(Cor || (Cor = {}));
var minhaCor = Cor.Verde;
console.log(minhaCor);
console.log(Cor.Azul);
console.log(Cor.Verde, Cor.Amarelo, Cor.Cinza);
//Any => importante para flexibilizar o código 
var carro = 'BMW';
console.log(carro);
carro = { marca: 'BMW', ano: 2019 };
console.log(carro);
//Funcoes
function retornaMeuNome() {
    return nome;
}
console.log(retornaMeuNome());
//:void -> deixa explicito que essa função nao retorna nada
function digaOi() {
    console.log('Oi');
}
digaOi();
// setando parametros e setando seus tipos
function multiplicar(nA, nB) {
    return nA * nB;
}
console.log(multiplicar(20, 2));
// é possivel de tipar os parametros da funcao e a assinatura da funcao
var teste = function (a, b) {
    return false;
};
//tipo funcao => uma variavel que obrigatoriamente vai receber uma função
var calculo;
calculo = multiplicar;
console.log(calculo(5, 60));
//objetos
var usuario = {
    nome: 'Isaac',
    idade: 27
};
console.log(usuario);
usuario = {
    nome: 'ze',
    idade: 20
};
console.log(usuario);
//Desafio
/* Criar um objeto funcionário com:
    - Array de strings com os nomes dos supervisores
    -Função de bater  ponto que recebe a hora (número)
    e retorna uma string
    ->ponto normal(<=8)
    ->fora do horário (> 8)
*/
//resposta
var funcionario = {
    supervisores: ['Isaac', 'Fernando'],
    baterPonto: function (horario) {
        if (horario >= 8) {
            return 'Ponto normal';
        }
        else {
            return 'Fora do horário';
        }
    }
};
console.log(funcionario.supervisores);
console.log(funcionario.baterPonto(8));
//passando o alias na função
var funcionario2 = {
    supervisores: ['Vivi', 'Lulu'],
    baterPonto: function (horario) {
        if (horario >= 8) {
            return 'Ponto normal';
        }
        else {
            return 'Fora do horário';
        }
    }
};
console.log(funcionario2.supervisores);
console.log(funcionario2.baterPonto(7));
//Union Types
var nota = 10;
console.log("Minha nota \u00E9 " + nota);
//Tipo never é uma função que não tem um endpoint alcançável
function falha(msg) {
    throw new Error(msg);
}
var produto = {
    nome: 'Sabão',
    preco: 1,
    validarProduto: function () {
        if (!this.nome || this.nome.trim().length == 0) {
            falha('precisa ter um nome');
        }
        if (this.preco <= 0) {
            falha('preço inválido');
        }
    }
};
produto.validarProduto();
var contato1 = {
    nome: 'Isaac',
    tel1: 56404,
    tel2: null
};
var contaBancaria = {
    saldo: 3456,
    depositar: function (valor) {
        this.saldo += valor;
    }
};
var correntista = {
    nome: 'Ana Silva',
    contaBancaria: contaBancaria,
    contatos: ['34567890', '98765432']
};
correntista.contaBancaria.depositar(4000);
console.log(correntista);
