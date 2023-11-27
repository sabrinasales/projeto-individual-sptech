var express = require("express");
var router = express.Router();

var dadosController = require("../controllers/dadosController");

router.post("/cadastrarDados", function (req, res) {
    dadosController.cadastrarDados(req, res)
});

module.exports = router;
