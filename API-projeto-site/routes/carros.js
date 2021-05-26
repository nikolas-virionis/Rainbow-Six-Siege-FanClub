var express = require('express');
var router = express.Router();
var sequelize = require('../models').sequelize;
var Carros = require('../models').Carros;
let sessoes = [];

router.post('/autenticarCarro', function(req, res, next) {
	console.log('Recuperando usuário por login e senha');
	var id = Number(req.body.idCarro); // depois de .body, use o nome (name) do campo em seu formulário de login	
	let instrucaoSql = `select * from carros where idCarro = ${id}`;
	console.log(instrucaoSql);
	sequelize.query(instrucaoSql, {
		model: Carros
	}).then(resultado => {
		console.log(`Encontrados: ${resultado.length}`);
		console.log(`Encontrado: ${resultado[0]}`);
		res.json(resultado[0]);
	}).catch(erro => {
		console.error(erro);
		res.status(500).send(erro.message);
  	});
});

/* Recuperar todos os usuários */
router.get('/', function(req, res, next) {
	console.log('Recuperando todos os usuários');
	Usuario.findAndCountAll().then(resultado => {
		console.log(`${resultado.count} registros`);

		res.json(resultado.rows);
	}).catch(erro => {
		console.error(erro);
		res.status(500).send(erro.message);
  	});
});

module.exports = router;
