var database = require("../database/config")

function cadastrarDados(totalCorretas, totalIncorretas, fkUsuario) {
    var instrucao = `INSERT INTO Pontuacao (totalCorretas, totalIncorretas, fkUsuario) VALUES (${totalCorretas}, ${totalIncorretas}, ${fkUsuario})`
    database.executar(instrucao)
}

module.exports = {
    cadastrarDados,
};