// Variável do botão de Começar Quiz
const comecarQuizBotao = document.querySelector(".iniciar-quiz");
// Variável do container de perguntas
const perguntasContainer = document.querySelector(".perguntas-container");
// Var que armazena o container de respostas do quiz. Os botões de respostas.
const respostasContainer = document.querySelector(".respostas-container");
// Var auxiliar que armazena o index da pergunta.
let atualPerguntaIndex = 0;
// Var que armazena o conteúdo do tipo TEXTO da class '.pergunta'.
const perguntaTexto = document.querySelector(".pergunta");
// Var que armazena o botão de 'próxima pergunta'
const proximaPerguntaBtn = document.querySelector(".prox-pergunta");

// No evento de clique, a variável chama a função para exibir o Quiz. A função comecarJogo adiciona a class "hide" para o botão de começar quiz, e remove a mesma class "hide" do container de perguntas.
comecarQuizBotao.addEventListener("click", comecarJogo);
proximaPerguntaBtn.addEventListener("click", displayProxPergunta);

function comecarJogo() {
    comecarQuizBotao.classList.add("hide");
    perguntasContainer.classList.remove("hide");
    displayProxPergunta()
}

function displayProxPergunta() {
    resetarEstado()

    perguntaTexto.textContent = perguntasQuiz[atualPerguntaIndex].pergunta
    perguntasQuiz[atualPerguntaIndex].opcoes.forEach(opcoes => {
        const novasRespostas = document.createElement("button")
        novasRespostas.classList.add("botao", "resposta")
        novasRespostas.textContent = opcoes.texto
        if (opcoes.correct) {
            novasRespostas.dataset.correct = opcoes.correct
        }
        perguntasContainer.appendChild(novasRespostas)

        novasRespostas.addEventListener("click", selecionarResposta)
    })
}

function resetarEstado() {
    while (respostasContainer.firstChild) {
        respostasContainer.removeChild(respostasContainer.firstChild)
    }

    document.body.removeAttribute("class")
    proximaPerguntaBtn.classList.add("hide")
}

function selecionarResposta(event) {
    const respostaClicada = event.target

    // if (respostaClicada.dataset.correct) {
    //     document.body.classList.add("correct")
    // } else {
    //     document.body.classList.add("incorrect")
    // }

    document.querySelectorAll(".resposta").forEach(button => {
        if (button.dataset.correct) {
            button.classList.add("correctButton")
        } else {
            button.classList.add("incorrectButton")
        }

        // button.disabled = true;
    })
// Acessa a class do botão e remove a class hide dele. Tornando-o visível.
    proximaPerguntaBtn.classList.remove("hide")
    // Incrementa a variável que armazena o índex da pergunta atual, tornando visível a próxima pergunta quando o botão "próxima pergunta" é clicado.
    atualPerguntaIndex++
}




// Criando vetor para armazenar as perguntas, onde cada pergunta é um json, e este json armazena as opções de resposta, que por serem mais de uma, são armazenadas em um vetor. Vetor, dentro de um json dentro de outro vetor.
const perguntasQuiz = [
    {
        pergunta: "Qual foi o primeiro filme a ser lançado oficialmente pelo Studio Ghibli?",
        opcoes: [{ texto: "Meu Amigo Totoro", correct: false },
                    { texto: "A Viagem de Chihiro", correct: false },
                    { texto: "O Castelo no Céu", correct: true },
                    { texto: "Túmulo dos Vagalumes", correct: false },
                   ]

    },
    {
        pergunta: "Qual é o nome do gatinho de Kiki?",
        opcoes: [{ texto: "Mimi", correct: false },
                    { texto: "Vivi", correct: false },
                    { texto: "Hime", correct: false },
                    { texto: "Jiji", correct: true },
                   ]

    },
    {
        pergunta: "Haku, em A Viagem de Chihiro, é apenas o disfarce de um ser humano, pois na verdade ele é um espírito de...",
        opcoes: [{ texto: "Cachorro", correct: false },
                    { texto: "Dragão", correct: true },
                    { texto: "Porco", correct: false },
                    { texto: "Gato", correct: false },
                   ]

    },
    {
        pergunta: "Qual o personagem mais popular de todos os filmes?",
        opcoes: [{ texto: "Chihiro", correct: true },
                    { texto: "Yubaba", correct: false },
                    { texto: "Howl", correct: false },
                    { texto: "Shizuko", correct: false },
                   ]

    },
    {
        pergunta: "O logotipo da empresa é o:",
        opcoes: [{ texto: "Totoro", correct: true },
                    { texto: "Porco Russo", correct: false },
                    { texto: "Castelo", correct: false },
                    { texto: "Haku", correct: false },
                   ]

    }
];



