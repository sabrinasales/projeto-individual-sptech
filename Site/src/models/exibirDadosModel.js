var database = require("../database/config")

function exibirDadosQuiz(fkUsuario) {
    var instrucao = `
    SELECT idPontuacao, SUM(totalCorretas) AS total_pontos_corretos, SUM(totalIncorretas) AS total_pontos_incorretos FROM Pontuacao WHERE fkUsuario = ${fkUsuario};`
    database.executar(instrucao)
}

module.exports = {
    exibirDadosQuiz,
};