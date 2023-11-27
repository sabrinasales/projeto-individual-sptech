// Variável que armazena o botão de iniciar o quiz.
const botaoComecarQuiz = document.querySelector(".comecar-quiz");

const botaoProxPergunta = document.querySelector(".proxima-pergunta");

const divContainerPerguntas = document.querySelector(".perguntas-container");

const divContainerRespostas = document.querySelector(".respostas-container");

let indexPerguntaAtual = 0
let totalCorretas = 0;
let totalIncorretas = 0;

const textoPergunta = document.querySelector(".pergunta");

// Aidcionando evento de clique nele
botaoComecarQuiz.addEventListener("click", comecarJogo)

botaoProxPergunta.addEventListener("click", chamarProximaPergunta)

function comecarJogo() {
    botaoComecarQuiz.classList.add("hide")

    divContainerPerguntas.classList.remove("hide")

    chamarProximaPergunta()
}

function chamarProximaPergunta() {
    resetarEstado()

    // Verificação para validar se o índex da pergunta atual é igual ao comprimento do vetor de perguntas.
    // Se sim, ele retorna a função terminarJogo para sair da função de chamar próxima pergunta, e executar a função terminarJogo.
    if (perguntasQuiz.length == indexPerguntaAtual) {
       return terminarJogo()
    }

    textoPergunta.textContent = perguntasQuiz[indexPerguntaAtual].pergunta
    perguntasQuiz[indexPerguntaAtual].respostas.forEach(resposta => {
        const novaResposta = document.createElement("button")
        novaResposta.classList.add("resposta", "botao")
        novaResposta.textContent = resposta.text
        if (resposta.correct) {
            novaResposta.dataset.correct = resposta.correct
// pontuacao++;
        }
        divContainerRespostas.appendChild(novaResposta)

        novaResposta.addEventListener("click", selecionarResposta)
    })
}

function resetarEstado() {
    while(divContainerRespostas.firstChild) {
        divContainerRespostas.removeChild(divContainerRespostas.firstChild)
    }

    botaoProxPergunta.classList.add("hide")
}

function selecionarResposta(event) {
    const respostaClicada = event.target
    if (respostaClicada.dataset.correct) {
        totalCorretas++
        document.body.classList.add("correto")
    } else {
        totalIncorretas++
        document.body.classList.add("incorreto")
    }

    document.querySelectorAll(".resposta").forEach(button => {
        if (button.dataset.correct) {
            
            button.classList.add("correto")
        } else {
            button.classList.add("incorreto")
        }

        button.disabled = true
    })

    botaoProxPergunta.classList.remove("hide")
    indexPerguntaAtual++
}

function terminarJogo() {
    let totalPerguntasQuiz = perguntasQuiz.length;
    let perfomanceUsuario = (totalCorretas * 100 / totalPerguntasQuiz);

    let mensagemFinal = "";

    if (perfomanceUsuario >= 90) {
        mensagemFinal = "Maravilha! Um verdadeiro fã! ;)"
    } else if (perfomanceUsuario >= 70) {
        mensagemFinal = "Impressionante!"
    } else if (perfomanceUsuario >= 50) {
        mensagemFinal = "Bom!"
    } else {
        mensagemFinal = "Poxa! Pode melhorar... :("
    }

    divContainerPerguntas.innerHTML = `
    <p class="mensagem-final-usuario">Você acertou ${totalCorretas} de ${totalPerguntasQuiz} questões!</p>
    <span class="resultado-mensagem-final">Resultado: ${mensagemFinal}</span>
    <button onclick=window.location.reload() class="botao">Tentar novamente!</button>
    <button onclick=cadastrarPontuacao() class="botao">Cadastrar pontuação!</button>`;
}

function cadastrarPontuacao() {
    event.preventDefault()

    // Pega oq precisar do html
    var totalCorretasVar = totalCorretas;
    var totalIncorretasVar = totalIncorretas;
    var fkUsuario = sessionStorage.getItem("id_usuario_meuapp");

    fetch("dados/cadastrarDados", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            totalCorretas: totalCorretasVar,
            totalIncorretas: totalIncorretasVar,
            fkUsuario: fkUsuario
        })
    }).then(
        function (result) {
            if (result.ok) {
                alert("Dados cadastraados com sucesso!")
            } else {
                result.text().then(texto => {
                    console.error(texto);
                });
            }
        }
    ).catch(function(erro){
        console.log(erro);
    })

    return false;
}


const perguntasQuiz = [
    {
        pergunta: "No filme 'A viagem de Chihiro', qual é o nome da bruxa velha?",
        respostas: [
            { text: "Yubaba", correct: true },
            { text: "Haku", correct: false },
            { text: "Chihiro", correct: false },
            { text: "Jiji", correct: false },
        ]
    },
    {
        pergunta: "Qual foi o primeiro filme a ser oficialmente lançado pelo Studio Ghibli?",
        respostas: [
            { text: "A viagem de Chihiro", correct: false },
            { text: "O Serviço de Entregas de Kiki", correct: false },
            { text: "Ponyo: Uma amizade que veio do mar", correct: false },
            { text: "O Castelo no Céu", correct: true },
        ]
    },
    {
        pergunta: "No filme 'O Serviço de Entregas da Kiki', qual é o nome do gatinho de Kiki?",
        respostas: [
            { text: "Mimi", correct: false },
            { text: "Shizuko", correct: false },
            { text: "Jiji", correct: true },
            { text: "Marnie", correct: false },
        ]
    },
    {
        pergunta: "A logo da empresa Studio Ghibli é...",
        respostas: [
            { text: "Totoro", correct: true },
            { text: "Jiji", correct: false },
            { text: "Uma bruxa", correct: false },
            { text: "Um dragão", correct: false },
        ]
    },
    {
        pergunta: "Os filmes possuem muitas referências do...",
        respostas: [
            { text: "Mundo real", correct: false },
            { text: "Folclore japonês", correct: true },
            { text: "Folclore brasileiro", correct: false },
            { text: "Políticas", correct: false },
        ]
    },
    {
        pergunta: "O público alvo dos filmes é:",
        respostas: [
            { text: "Público mais adulto", correct: false },
            { text: "Público infanto-juvenil", correct: false },
            { text: "Público mais velho", correct: false },
            { text: "Todas as alternativas", correct: true },
        ]
    },
    {
        pergunta: "Quantas produções o estúdio possui?",
        respostas: [
            { text: "Entre 5 e 10", correct: false },
            { text: "Entre 10 e 20", correct: false },
            { text: "Mais de 20", correct: true },
            { text: "Mais de 100", correct: false },
        ]
    },
];