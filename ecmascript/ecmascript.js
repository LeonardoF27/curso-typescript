"use strict";
//let & const
let seraQuepode = '?';
console.log(seraQuepode);
let estaFrio = true;
if (estaFrio) {
    let acao = 'Colocar o casaco';
    console.log(acao);
}
var segredo = 'extrerno!';
const cpf = '123.456.000-99';
// cpf = '789.101.132-78'
console.log(cpf);
function revelar() {
    var segredo = 'interno';
    console.log(segredo);
}
revelar();
console.log(segredo);
{
    {
        const def = 'def';
        console.log(def);
    }
}
for (var i = 0; i < 10; i++) {
    console.log(i);
}
//console.log(i)
// Arrow Fuction
function somar(n1, n2) {
    return n1 + n2;
}
console.log(somar(2, 2));
const subtrair = (n1, n2) => n1 - n2;
console.log(subtrair(2, 3));
const saudacao = () => console.log("Olá!");
saudacao();
const falarCom = (pessoa) => console.log('Olá' + pessoa);
falarCom('João');
// this
function normalcomThis() {
    //    console.log(this)
}
normalcomThis();
//const normalThisEspecial = normalcomThis.bind({nome: 'Ana'})
//normalThisEspecial()
//this ???
//console.log(this)
//const arrowComThis = () => console.log(this)
//arrowComThis()
//const arrowComThisEspecial = arrowComThis.bind({nome: 'Ana'})
//arrowComThisEspecial()
// Parâmetro padrão
function contagemRegressiva(inicio = 5, fim = inicio - 5) {
    console.log(inicio);
    while (inicio > fim) {
        inicio--;
        console.log(inicio);
    }
    console.log("Fim");
}
contagemRegressiva();
contagemRegressiva(3);
// Rest & Spreed
const numbers = [1, 10, 99, -5, 200, 1034];
console.log(Math.max(...numbers));
const turmaA = ['João', 'Maria', 'Fernanda'];
const turmaB = ['Fernando', 'Miguel', 'Lorena', ...turmaA];
console.log(turmaB);
function retornarArray(...args) {
    return args;
}
const numeros = retornarArray(1, 2, 4, 5, 6, 345, 623);
console.log(numeros);
console.log(retornarArray(...numbers));
// Rest & Spred (Tupla)
const tupla = [1, 'abc', false];
function tuplaParam1(a, b, c) {
    console.log(`1) ${a} ${b} ${c}`);
}
tuplaParam1(...tupla);
function tuplaParam2(...params) {
    console.log(Array.isArray(params));
    console.log(`2) ${params[0]} ${params[1]} ${params[2]}`);
}
tuplaParam2(...tupla);
// Destrucuring (arry)
const caracteristicas = ['Motor Zetec 1.8', 2020];
// const motor = caratecisticas[0]
// const ano = caracteristica[1]
const [motor, ano] = caracteristicas;
console.log(motor);
console.log(ano);
//# sourceMappingURL=ecmascript.js.map