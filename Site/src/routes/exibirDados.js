var express = require("express");
var router = express.Router();

var exibirDadosController = require("../controllers/exibirDadosController");

router.get("/exibirDadosQuiz/:idUsuario", function (req, res) {
    exibirDadosController.exibirDadosQuiz(req, res)
});

module.exports = router;

// http://localhost:3333/exibirDados/exibirDadosQuiz/1
// id do Usuário como parâmetro. 1 é o idUsuario.