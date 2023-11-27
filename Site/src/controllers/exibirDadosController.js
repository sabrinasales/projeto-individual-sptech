var exibirDadosModel = require("../models/exibirDadosModel");

function exibirDadosQuiz(req, res) {
    var idUsuario = req.params.idUsuario
    
    exibirDadosModel.exibirDadosQuiz(idUsuario)
        .then(
            function (resultado) {
                res.json(resultado);
            }).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o select! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
}

module.exports = {
    exibirDadosQuiz
}