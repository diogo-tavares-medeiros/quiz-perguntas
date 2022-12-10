let titulo = document.querySelector('h1')
let instrucoes = document.querySelector('#instrucoes')
let aviso = document.querySelector('#aviso')
// let respostaEsta = document.querySelector('#respostaEsta')
let pontos = 0
let placar = 0

let numQuestao = document.querySelector('#numQuestao')
let pergunta = document.querySelector('#pergunta')

let a = document.querySelector('#a')
let b = document.querySelector('#b')
let c = document.querySelector('#c')

let articleQuestoes = document.querySelector('.questoes')
let alternativas = document.querySelector('#alternativas')

const q0 = {
    numQuestao: 0,
    pergunta: "Pergunta",
    alternativaA: "Alternativa A",
    alternativaB: "Alternativa B",
    alternativaC: "Alternativa C",
    correta: "0",
}

const q1 = {
  numQuestao: 1,
  pergunta: 'Qual o país que mais vezes ganhou a Copa do Mundo?',
  alternativaA: 'França',
  alternativaB: 'Argentina',
  alternativaC: 'Brasil',
  correta: 'Brasil',
}

const q2 = {
  numQuestao: 2,
    pergunta: 'Quantos títulos da Copa do Mundo o Brasil tem?',
    alternativaA: '5',
    alternativaB: '6',
    alternativaC: '4',
    correta: '5',
}

const q3 = {
    numQuestao: 3,
    pergunta: 'Qual foi o país sede da última Copa?',
    alternativaA: 'Brasil',
    alternativaB: 'Rússia',
    alternativaC: 'Portugal',
    correta: 'Rússia',
}

const q4 = {
    numQuestao: 4,
    pergunta: 'Quem foi o campeão da Copa do Mundo de 2018?',
    alternativaA: 'Espanha',
    alternativaB: 'França',
    alternativaC: 'Brasil',
    correta: 'França',
}

const q5 = {
  numQuestao: 5,
  pergunta: 'Qual foi o vice-campeão da Copa do Mundo de 2018?',
  alternativaA: 'Brasil',
  alternativaB: 'Espanha',
  alternativaC: 'Croácia',
  correta: 'Croácia',
}

const questoes = [q0, q1, q2, q3, q4, q5]

let numero = document.querySelector('#numero')
let total = document.querySelector('#total')

numero.textContent = q1.numQuestao

let totalDeQuestoes = (questoes.length)-1
console.log("Total de questões" + totalDeQuestoes)
total.textContent = totalDeQuestoes

numQuestao.textContent = q1.numQuestao
pergunta.textContent = q1.pergunta
a.textContent = q1.alternativaA
b.textContent = q1.alternativaB
c.textContent = q1.alternativaC

a.setAttribute('value', '1A')
b.setAttribute('value', '1B')
c.setAttribute('value', '1C')

function proximaQuestao(nQuestao) {
    numero.textContent = nQuestao
    numQuestao.textContent = questoes[nQuestao].numQuestao
    pergunta.textContent = questoes[nQuestao].pergunta
    a.textContent = questoes[nQuestao].alternativaA
    b.textContent = questoes[nQuestao].alternativaB
    c.textContent = questoes[nQuestao].alternativaC
    a.setAttribute('value', nQuestao+'A')
    b.setAttribute('value', nQuestao+'B')
    c.setAttribute('value', nQuestao+'C')
}

function bloquearAlternativas() {
    a.classList.add('bloqueado')
    b.classList.add('bloqueado')
    c.classList.add('bloqueado')
}

function desbloquearAlternativas() {
  a.classList.remove('bloqueado')
  b.classList.remove('bloqueado')
  c.classList.remove('bloqueado')
}

function verificarSeAcertou(nQuestao, resposta) {

    let numeroDaQuestao = nQuestao.value
    console.log("Questão" + numeroDaQuestao)

    let respostaEscolhida = resposta.textContent
    console.log('RespU' + respostaEscolhida)

    let certa = questoes[numeroDaQuestao].correta
    console.log('RespC' + certa)

    if(respostaEscolhida == certa) {

        pontos += 10

    }else {

    }

    placar = pontos
    instrucoes.textContent = "Pontos" + placar

    bloquearAlternativas()

    setTimeout(function(){

        proxima = numeroDaQuestao+1

        if(proxima > totalDeQuestoes) {
            console.log('Fim de jogo!')
            fimDoJogo()
        } else {
            proximaQuestao(proxima)
        }
    }, 250)
    desbloquearAlternativas()
}

function fimDoJogo() {
    instrucoes.textContent = "Fim de jogo!"
    numQuestao.textContent = ""

    let pont = ''
    pontos == 0 ? pont = 'ponto' : pont = 'pontos'

    pergunta.textContent = "Você conseguiu " + pontos + " " + pont

    aviso.textContent = "Você conseguiu " + pontos + " " + pont
    
    a.textContent = ""
    b.textContent = ""
    c.textContent = ""

    a.setAttribute('value', '0')
    b.setAttribute('value', '0')
    b.setAttribute('value', '0')

    articleQuestoes.style.display = 'none'

    setTimeout(function() {
        pontos = 0
        location.reload();
    }, 2000)
}

