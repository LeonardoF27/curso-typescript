//string
let nome: string = 'João'
console.log(nome)
//nome = 28

//numbers
let idade: number = 27
//idade = 'Ana'
idade = 27.5
console.log(idade)

//boolean
let possuiHobbies = false
//possuiHobbies = 1
console.log(possuiHobbies)

//Tipos explícitos
let minhaIdade: number
minhaIdade = 27
console.log(typeof minhaIdade)
//minhaIdade = '27'

//array
let hobbies: any[] = ["Cozinhar", "Praticar Esporte"]
console.log(hobbies[0])
console.log(typeof hobbies)

hobbies = [100, 200, 300]
// hobies = 100
console.log(hobbies)

//tuplas
let endereco = ["Av Principal", 99]
console.log(endereco)

endereco = ["Rua Importante", 1260, "Bloco C"]
console.log(endereco)

// enums
enum Cor {
    Cinza, // 0 
    Verde = 100, // 100
    Azul = 2, // 2
    Laranja,
    Amarelo,
    Vermelho = 100
}

let minhaCor: Cor = Cor.Verde
console.log(minhaCor)

console.log(Cor.Azul)
console.log(Cor.Laranja, Cor.Amarelo)
console.log(Cor.Verde, Cor.Vermelho)

// any
let carro: any = 'BMW'
console.log(carro)
carro = {marca: 'BMW', ano: 2019}
console.log(carro)

// funções
function retornaMeuNome(): string {
    return nome
    // return minhaIdade
}

console.log(retornaMeuNome())

function digaOi(): void {
    console.log('Oi')
    // return minhaIdade
}

digaOi()

function multiplicar(numA: number, nummB: number): number {
    return numA * nummB
}

//console.log(multiplicar(2, 'Bia'))
console.log(multiplicar(4.7, 9))

// tipo função
let calculo: (x: number, y: number) => number
//calculo  = digaOi
//calculo()
//calculo = {}

calculo = multiplicar
console.log(calculo(5, 6))

// objeto
let usuario: {nome: string, idade: number } = {
    nome: 'João',
    idade: 27
}

console.log(usuario)
// usuario = {}

// usuario = {
//    name: 'Maria',
//    age: 31
// }

usuario = {
    idade: 311,
    nome: 'Maria',
}

console.log(usuario)

// desafio
/*
    criar um objeto funcionário com:
        - Array de string com os nomes dos supervisores
        - Função de bater ponto que recebe a hora (número) e retorna uma string
            -> ponto normal (<= 8)
            -> Fora do horário (> 8)
*/
// Alias
type Funcionario = {
    supervisores: string[],
    baterPonto: (horas: number) => string
}

let funcionario: Funcionario = {
    supervisores: ['Ana', 'Fernando'],
    baterPonto(horario: number): string {
        if(horario <= 8){
            return 'Ponto normal'
        } else {
            return 'Fora do horário!'
        }
    }
}

let funcionario2: Funcionario = {
    supervisores: ['Bia', 'Carlos'],
    baterPonto(horario: number): string {
        if(horario <= 8){
            return 'Ponto normal'
        } else {
            return 'Fora do horário!'
        }
    }
}

console.log(funcionario.supervisores)
console.log(funcionario.baterPonto(8))
console.log(funcionario.baterPonto(9))

// funcionario = {}

// Union Types
let nota: number | string = 10
console.log(`Minha nota é ${nota}!`)
nota = '10'
console.log(`Minha nota é ${nota}!`)
//nota = true

// Checando tipos 
let valor = 30

if (typeof valor === "number") {
    console.log("É um number!")
} else {
    console.log(typeof valor)
}

// never
function falha(msg: string): never {
    throw new Error(msg)
}

const produto = {
    nome: 'Sabão',
    preco: 4,
    validarProduto() {
        if(!this.nome || this.nome.trim().length == 0){
            falha('Precisa ter um nome')
        }
        if(this.preco <= 0) {
            falha('Preço inválido!')
        }
    }
}

produto.validarProduto()

let altura = 12
// altura = null

let alturaOpcional: null | number = 12
alturaOpcional = null

type Contato = {
    nome: string,
    tel1: string,
    tel2: string | null
}

const contato1: Contato = {
    nome: 'Fulano',
    tel1: '912343456',
    tel2:null
}

console.log(contato1.nome)
console.log(contato1.tel1)
console.log(contato1.tel2)

let podeSerNulo = null // any!
podeSerNulo = 12
console.log(podeSerNulo)
podeSerNulo = 'abc'
console.log(podeSerNulo)

// desafio
type ContaBancaria = {
    saldo: number,
    depositar: (valor: number) => void
}

let contaBancaria  = {
    saldo: 3456,
    depositar(valor: number) {
        this.saldo += valor
    }
}

type Correntista = {
    nome: string,
    contabancaria: ContaBancaria,
    contatos: string[]
}

let correntista: Correntista= {
    nome: 'Ana Silva',
    contabancaria: contaBancaria,
    contatos: ['2345654455', '9876544325']
}

correntista.contabancaria.depositar(3000)
console.log(correntista)