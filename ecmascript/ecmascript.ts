//let & const
let seraQuepode = '?'
console.log(seraQuepode)

let estaFrio = true
if (estaFrio) {
    let acao = 'Colocar o casaco'
    console.log(acao)
}

var segredo = 'extrerno!'
const cpf: string = '123.456.000-99'
// cpf = '789.101.132-78'
console.log(cpf)

function revelar() {
    var segredo = 'interno'
    console.log(segredo)
}
revelar()
console.log(segredo)

{
    {
        const def = 'def'
        console.log(def)
    }
}

for(var i = 0; i < 10; i++) {
    console.log(i)
}
//console.log(i)

// Arrow Fuction
function somar(n1: number, n2: number): number {
    return n1 + n2
}
console.log(somar(2,2))

const subtrair = (n1: number, n2: number): number => n1 - n2
console.log(subtrair(2, 3))

const saudacao = () => console.log("Olá!")
saudacao()

const falarCom = (pessoa: string) =>console.log('Olá' + pessoa)
falarCom('João')

// this

function normalcomThis() {
//    console.log(this)
}
normalcomThis()

//const normalThisEspecial = normalcomThis.bind({nome: 'Ana'})
//normalThisEspecial()

//this ???
//console.log(this)
//const arrowComThis = () => console.log(this)
//arrowComThis()

//const arrowComThisEspecial = arrowComThis.bind({nome: 'Ana'})
//arrowComThisEspecial()

// Parâmetro padrão
function contagemRegressiva(inicio: number = 5, fim: number = inicio - 5): void {
    console.log(inicio)
    while(inicio > fim) {
        inicio--
        console.log(inicio)
    }
    console.log("Fim")
}

contagemRegressiva()
contagemRegressiva(3)

// Rest & Spreed
const numbers = [1, 10, 99, -5, 200, 1034]
console.log(Math.max(...numbers))

const turmaA: string[] = ['João', 'Maria', 'Fernanda']
const turmaB: string[] = ['Fernando', 'Miguel', 'Lorena', ...turmaA]
console.log(turmaB)

function retornarArray(...args: number[] ): number []{
    return args
}

const numeros = retornarArray(1, 2, 4, 5, 6, 345, 623)
console.log(numeros)
console.log(retornarArray(...numbers))

// Rest & Spred (Tupla)
const tupla : [number, string, boolean] = [1 , 'abc', false]

function tuplaParam1(a: number, b: string, c: boolean): void {
console.log(`1) ${a} ${b} ${c}`)
}

tuplaParam1(...tupla)

function tuplaParam2(...params: [number,string, boolean]) {
    console.log(Array.isArray(params))
    console.log(`2) ${params[0]} ${params[1]} ${params[2]}`)
}

tuplaParam2(...tupla)

// Destrucuring (arry)
const caracteristicas = ['Motor Zetec 1.8', 2020]
// const motor = caratecisticas[0]
// const ano = caracteristica[1]

const [motor, ano] = caracteristicas
console.log(motor)
console.log(ano)

// Destrucuring (objeto)
const item = {
    nome: 'SSD 480GB',
    preco: 200,
    caracteristica: {
        w: 'Importado'
    }
}

const nomeItem = item.nome
const precoItem = item.preco
console.log(nomeItem)
console.log(precoItem)

const { nome: n, preco: p, caracteristica: { w } } = item
console.log(n)
console.log(p)
console.log(w)

const ususarioID: string = 'SuporteCod3r'
const notificacoes: string = '9'
// const boasVindas = 'Boas vindas' + usuarioID + 'notificações: ' + notificacoes
const boasVindas = `
    boas vindas ${ususarioID},
    notificações: ${parseInt(notificacoes) > 9 ? '+9' : notificacoes}
`

console.log(boasVindas)
console.log(`Motor: ${caracteristicas[0]}`)

// Callback

// function esperar3s(callback:  (dado: string) => void) {
//     setTimeout( () => {
//         callback('3s depois...')
//     }, 3000)
// }

// esperar3s(function(resultado: string) {
//     console.log(resultado)
// })

// function esperar3sPromise() {
//     return new Promise((resolve: any) => {
//         setTimeout(() => {
//             resolve('3s depois promise...')
//         }, 3000)
//     })
// }

// esperar3sPromise()
// .then(dado => console.log(dado))

// fetch('https://swapi.co/api/people/1/')
//     .then( res => res.json())
//     .then(personagem => personagem.films)
//     .then(films => fetch(films[0]))
//     .then(resFilm => resFilm.json())
//     .then(filme => console.log(filme.title))
//     .catch(err => console.log('Catch!!!!' + err))