// var express = require('express');
// var router = express.Router();
// var sequelize = require('../models').sequelize;
// var Carros = require('../models').Carros;
// router.post('/autenticarCarro', function(req, res, next) {
// 	console.log('Recuperando usuário por login e senha');
// 	var id = Number(req.body.idCarro); // depois de .body, use o nome (name) do campo em seu formulário de login	
// 	let instrucaoSql = `select * from carros where idCarro = ${id}`;
// 	console.log(instrucaoSql);
// 	sequelize.query(instrucaoSql, {
// 		model: Carros
// 	}).then(resultado => res.json(resultado[0])
// 	).catch(erro => res.status(500).send(erro.message));
// });
// module.exports = router;

var express = require('express');
var router = express.Router();
var sequelize = require('../models').sequelize;
var Carros = require('../models').Carros;
router.get('/autenticarCarro/:idCarro', function(req, res, next) {
	var id = req.params.idCarro; // depois de .body, use o nome (name) do campo em seu formulário de login	
	let instrucaoSql = `select * from carros where idCarro = ${id}`;
	console.log(instrucaoSql);
	sequelize.query(instrucaoSql, {
		model: Carros
	}).then(resultado => res.json(resultado[0])
	).catch(erro => res.status(500).send(erro.message));
});
module.exports = router;