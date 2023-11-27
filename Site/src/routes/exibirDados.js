var express = require("express");
var router = express.Router();

var exibirDadosController = require("../controllers/exibirDadosController");

router.post("/exibirDadosQuiz", function (req, res) {
    exibirDadosController.exibirDadosQuiz(req, res)
});

module.exports = router;