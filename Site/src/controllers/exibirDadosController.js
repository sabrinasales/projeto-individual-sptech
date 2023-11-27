var dadosModel = require("../models/exibirDadosModel");

function exibirDadosQuiz(totalCorretas, totalIncorretas) {
    var totalCorretas = req.body.totalCorretas
    var totalIncorretas = req.body.totalIncorretas
    // var fkUsuario = req.body.fkUsuario

    exibirDadosModel.exibirDadosQuiz(totalCorretas, totalIncorretas)
        .then(
            function (resultado) {
                res.json(resultado);
            }).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
}

module.exports = {
    exibirDadosQuiz
}