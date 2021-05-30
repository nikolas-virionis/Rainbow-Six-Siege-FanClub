var express = require('express');
var router = express.Router();
var sequelize = require('../models').sequelize;
var Carros = require('../models').Carros;
router.get('/autenticarCarro/:idCarro', function(req, res, next) {
	var id = req.params.idCarro;
	let instrucaoSql = `select * from carros where idCarro = ${id}`;
	console.log(instrucaoSql);
	sequelize.query(instrucaoSql, {
		model: Carros
	}).then(resultado => res.json(resultado[0])
	).catch(erro => res.status(500).send(erro.message));
});
module.exports = router;