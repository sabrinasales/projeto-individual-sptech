// Variável do botão de Começar Quiz
const comecarQuizBotao = document.querySelector(".iniciar-quiz");
// Variável do container de perguntas
const perguntasContainer = document.querySelector(".perguntas-container");
// Var que armazena o container de respostas do quiz. Os botões de respostas.
const respostasContainer = document.querySelector(".respostas-container");
// Var auxiliar que armazena o index da pergunta.
let atualPerguntaIndex = 0;

const perguntaTexto = document.querySelector(".pergunta");

// No evento de clique, a variável chama a função para exibir o Quiz. A função comecarJogo adiciona a class "hide" para o botão de começar quiz, e remove a mesma class "hide" do container de perguntas.
comecarQuizBotao.addEventListener("click", comecarJogo);

function comecarJogo() {
    comecarQuizBotao.classList.add("hide");
    perguntasContainer.classList.remove("hide");
    displayProxPergunta()
}

function displayProxPergunta() {
    while (respostasContainer.firstChild) {
        respostasContainer.removeChild(respostasContainer.firstChild)
    }

    perguntaTexto.textContent = perguntasQuiz[atualPerguntaIndex].pergunta
    perguntasQuiz[atualPerguntaIndex].opcoes.forEach(opcoes => {
        
    })
}




// Criando vetor para armazenar as perguntas, onde cada pergunta é um json, e este json armazena as opções de resposta, que por serem mais de uma, são armazenadas em um vetor. Vetor, dentro de um json dentro de outro vetor.
const perguntasQuiz = [
    {
        pergunta: "Qual foi o primeiro filme a ser lançado oficialmente pelo Studio Ghibli?",
        opcoes: ["Meu Amigo Totoro", "O Serviço de Entregas da Kiki", "A Viagem de Chihiro", "Túmulo dos Vagalumes"],
        resposta: "O Castelo no Céu",
    },
    {
        pergunta: "Qual é o nome do gatinho de Kiki?",
        opcoes: ["Mimi", "Hime", "Vivi", "Lili"],
        resposta: "Jiji",
    },
    {
        pergunta: "Haku, em A Viagem de Chihiro, é apenas o disfarce de um ser humano, pois na verdade ele é um espírito de...",
        opcoes: ["Cachorro", "Porco", "Gato", "Panda"],
        resposta: "Dragão",
    },
    {
        pergunta: "Qual o personagem mais popular de todos os filmes?",
        opcoes: ["Yubaba", "Howl", "Shizuko", "Jiji"],
        resposta: "Chihiro",
    },
    {
        pergunta: "O logotipo da empresa é o:",
        opcoes: ["Howl", "Haku", "Porco Russo", "Castelo"],
        resposta: "Totoro",
    }
];



