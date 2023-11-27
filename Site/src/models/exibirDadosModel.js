var database = require("../database/config")

function exibirDadosQuiz(totalCorretas, totalIncorretas) {
    var instrucao = `
    SELECT totalCorretas, totalIncorretas, fkUsuario FROM Pontuacao WHERE idPontuacao = ${idPontuacao};`
    database.executar(instrucao)
}


module.exports = {
    cadastrarDados,
};