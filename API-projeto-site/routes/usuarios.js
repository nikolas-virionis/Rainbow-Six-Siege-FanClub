var express = require('express');
var router = express.Router();
var sequelize = require('../models').sequelize;
var Usuario = require('../models').Usuario;
// Atualizar usuário 
router.post('/atualizar', function(req, res, next) {
	var email = req.body.email;
	var nome = req.body.nome;
	var senha = req.body.senha;
	var username = req.body.username;
	var carroFav = req.body.carroFav;
	var anoNasc = req.body.anoNasc;
	var anoInicio = req.body.anoInicio;
	let carrofk = null;
	if (carroFav == "Model S") carrofk = 1;
	else if (carroFav == "Model 3") carrofk = 2;
	else if (carroFav == "Model X") carrofk = 3;
	else if (carroFav == "Model Y") carrofk = 4;
	else if (carroFav == "Roadster") carrofk = 5;
	else if (carroFav == "Semi") carrofk = 6;
	else if (carroFav == "Cybertruck") carrofk = 7;
	else console.error("ERRO NA DEFINIÇÃO DA FK DO CARRO NO PERFIL DO USUÁRIO");
	let instrucaoSql = `update usuario set nome = '${nome}', username = '${username}', senha = '${senha}', carroFav = '${carrofk}', anoNasc = '${anoNasc}', anoInicio = '${anoInicio}' where email = '${email}';`;
	console.log(instrucaoSql);
	sequelize.query(instrucaoSql, {
		model: Usuario
	}).then(resultado => res.json(resultado)
	).catch(erro => res.status(500).send(erro.message)
  	);
});
// Recuperar usuário por login e senha
router.post('/autenticar', function(req, res, next) {
	console.log('Recuperando usuário por login e senha');
	var login = req.body.username;
	var senha = req.body.senha;		
	let instrucaoSql = `select * from usuario where username='${login}' and senha='${senha}'`;
	console.log(instrucaoSql);
	sequelize.query(instrucaoSql, {
		model: Usuario
	}).then(resultado => resultado.length != 0 ? res.json(resultado[0]) : res.status(403).send('Login e/ou senha inválido(s)')
	).catch(erro => res.status(500).send(erro.message));
});
// Recuperar usuário por login e senha
router.get('/autenticarRank', function(req, res, next) {
	console.log('Recuperando numeros de carros');
	let instrucaoSql = "select u.carroFav as fkCarro, count(u.carroFav) as qtdFks, c.nomeCarro from carros as c inner join usuario as u on u.carroFav = c.idCarro group by carroFav order by count(carroFav) desc;";
	console.log(instrucaoSql);
	sequelize.query(instrucaoSql, {
		model: Usuario
	}).then(resultado => resultado == null || resultado.length == null ? console.log(`%c VALOR DE RESULTADO DE CARROS INVÁLIDO`, "color: red; background-color: white;") : res.json(resultado)
	).catch(erro => res.status(500).send(erro.message));
});
// Verificação da senha do usuário para edição dos dados
router.post('/autenticarSenha/:email', function(req, res, next) {
	console.log('Recuperando senha');
	var senha = req.body.senha;	
	var email = req.params.email;	
	let instrucaoSQL = `select * from usuario where email = '${email}' and senha='${senha}';`;
	console.log(instrucaoSQL);
	sequelize.query(instrucaoSQL, {
		model: Usuario
	}).then(resultado => {
		console.log(`Encontrados: ${resultado.length}`);
		if (resultado.length == 1) res.json(resultado[0]);
		else if (resultado.length == 0) res.json('Senha incorreta');
		else console.log("%c ERRO DE LÓGICA PARA VERIFICAÇÃO DE EMAILS", 'background: #eee; color: red;');
	}).catch(erro => {
		console.error(erro);
		res.status(500).send(erro.message);
  	});
});
// Cadastrar usuário
router.post('/cadastrar', function(req, res, next) {
	var email = req.body.email;
	let carrofk = null;
	let instrucaoSql = `select * from usuario where email='${email}'`;
	console.log(instrucaoSql);
	sequelize.query(instrucaoSql, {
		model: Usuario
	}).then(resultado => {
		console.log(`Encontrados: ${resultado.length}`);
	if (resultado.length == 0) {
		console.log('Criando um usuário');
		if (req.body.carroFav == "Model S") carrofk = 1;
		else if (req.body.carroFav == "Model 3") carrofk = 2;
		else if (req.body.carroFav == "Model X") carrofk = 3;
		else if (req.body.carroFav == "Model Y") carrofk = 4;
		else if (req.body.carroFav == "Roadster") carrofk = 5;
		else if (req.body.carroFav == "Semi") carrofk = 6;
		else if (req.body.carroFav == "Cybertruck") carrofk = 7;
		else console.log("ERRO NA DEFINIÇÃO DA FK DO CARRO NO PERFIL DO USUÁRIO");
			Usuario.create({
			nome : req.body.nome,
			username : req.body.username,
			senha: req.body.senha,
			email: req.body.email,
			carroFav: carrofk,
			anoNasc: req.body.anoNasc,
			anoInicio: req.body.anoInicio
		}).then(resultado => {
			console.log(`Registro criado: ${resultado}`)
        	res.send(resultado);
    	}).catch(erro => res.status(500).send(erro.message));
		  res.json(resultado[0])
	} 
			else res.json('Conta já existente com esse email');
	}).catch(erro => {
		console.error(erro);
		res.status(500).send(erro.message);
  	});
});
// Recuperar todos os usuários
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