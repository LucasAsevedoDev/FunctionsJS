/*Olá internet, eu estava tendo dificuldade pra aprender alguns
tópicos mais modernos de JavaScript, então decidi fazer alguns
exemplos que me ajudam com esse conteúdo, e que talvez alcancem
outras pessoas! Bom, espero que seja úyil hahah, pois ao meu ver
me ajudou bastante.
*/

// -------------------------- Funções escritas de forma normal --------------------------
const a = 12
const b = 15
function somaNormal(a, b){
    return a + b
}
function subNormal(a, b) {
    return a - b
}
function multiNormal(a, b) {
    return a * b
}
function diviNormal(a, b) {
    return a / b
}
//lembrando que o método para escrever as Strings é o template Literals
console.log(`constante a: ${a} e constante b: ${b}`)
console.log(`Soma normal de a + b é:  ${somaNormal(a, b)}`)
console.log(`A subtração de a - b é: ${subNormal(a, b)}`)
console.log(`A multiplicação de a * b é: ${multiNormal(a, b)}`)
console.log(`A divisão de a / b é: ${diviNormal(a, b)}`)
// -------------------------- Funções escritas de forma normal --------------------------


// -------------------------- Funções anônimas --------------------------
const c = 25
const d = 5

somaAnonima = function(c, d) {
    return c + d
}
subAnonima = function(c, d) {
    return c + d
}
multiAnonima = function(c, d) {
    return c + d
}
DiviAnonima = function(c, d) {
    return c + d
}

console.log(`\n\nConstante "c": ${c}, constande "d": ${d}`)
console.log(`A soma de c + d é: ${somaAnonima(c, d)}`)
console.log(`A subtração de c - d é: ${subAnonima(c, d)}`)
console.log(`A multiplicação de c * d é: ${multiAnonima(c, d)}`)
console.log(`A divisão de c / d é: ${multiAnonima(c, d)}`)
//
// -------------------------- Funções anônimas --------------------------


// -------------------------- Arrow Functions --------------------------
const e = 30
const f = 3

//viu como são mais fáceis de escrever?
const arrowSoma = (e, f) => e + f
const arrowSub = (e, f) => e - f
const arrowMulti = (e, f) => e * f
const arrowDivi = (e, f) => e / f

console.log(`\n\nConstante "e": ${e}, constande "f": ${f}`)
console.log(`A soma de e + f é: ${arrowSoma(e, f)}`)
console.log(`A soma de e + f é: ${arrowSub(e, f)}`)
console.log(`A soma de e + f é: ${arrowMulti(e, f)}`)
console.log(`A soma de e + f é: ${arrowDivi(e, f)}`)


//Agora vamos para alguns exemplos de arrow Functions com operações um pouco mais complexas!

//exemplo 1°
const resultado = ((33 + 12 + 5 - 3) / 4) * 5
const operacao = resultado => `
\nAqui teremos algumas funções um pouco mais complexas:
\nExemplo 2°
O resultado da operação "((33 + 12 + 5 - 3) / 4) * 4" é: ${resultado}
`
//Aqui é bem legal que o template literals te permite escrever Strings de forma bem mais prática, facilitando muito o processo!

console.log(operacao(resultado))
//exemplo 1°

//exemplo 2°
let n1 = 20, n2 = 10, n3 = 8, n4 = 7

const media = (n1 + n2 + n3 + n4) / 4
const operacao2 = media => `
Exemplo 3°
Valores utilizados: "n1 = 20, n2 = 10, n3 = 8, n4 = 7
A média dos algoritmos "n1 + n2 + n3 + n4" é: ${media}
`

console.log(operacao2(media))
//exemplo 2°
// -------------------------- Arrow Functions --------------------------


