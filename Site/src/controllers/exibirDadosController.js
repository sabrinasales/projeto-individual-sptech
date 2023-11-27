var exibirDadosModel = require("../models/exibirDadosModel");

function exibirDadosQuiz(req, res) {
    var idUsuario = req.params.idUsuario

    exibirDadosModel.exibirDadosQuiz(idUsuario).then(function (resultado) {
        res.status(200).json(resultado);
        console.log("Acerto do Leo")
    }).catch(function (erro) {
        console.log("Erro do leo")
        console.log(erro);
    });

    // exibirDadosModel.exibirDadosQuiz(idUsuario).then(
    //         function (resultado) {
    //             res.json(resultado[0]);
    //         }).catch(
    //             function (erro) {
    //                 console.log(erro);
    //                 console.log(
    //                     "\nHouve um erro ao realizar o select! Erro: ",
    //                     erro.sqlMessage
    //                 );
    //                 res.status(500).json(erro.sqlMessage);
    //             }
    //         );
}

module.exports = {
    exibirDadosQuiz
}