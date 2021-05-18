var express = require('express');
var router = express.Router();
var sequelize = require('../models').sequelize;
var Usuario = require('../models').Usuario;
let sessoes = [];

/* Recuperar usuário por login e senha */
router.post('/autenticar', function(req, res, next) {
	console.log('Recuperando usuário por login e senha');

	var login = req.body.username; // depois de .body, use o nome (name) do campo em seu formulário de login
	var senha = req.body.senha; // depois de .body, use o nome (name) do campo em seu formulário de login	
	
	let instrucaoSql = `select * from usuario where username='${login}' and senha='${senha}'`;
	console.log(instrucaoSql);

	sequelize.query(instrucaoSql, {
		model: Usuario
	}).then(resultado => {
		console.log(`Encontrados: ${resultado.length}`);
		if (resultado.length == 1) {
			sessoes.push(resultado[0].dataValues.login);
			console.log('sessoes: ',sessoes);
			res.json(resultado[0]);
		} else if (resultado.length == 0) {
			res.status(403).send('Login e/ou senha inválido(s)');
		} else {
			res.status(403).send('Mais de um usuário com o mesmo login e senha!');
		}
	}).catch(erro => {
		console.error(erro);
		res.status(500).send(erro.message);
  	});
});
/* Verificação da senha do usuário para edição dos dados */
router.post('/autenticarSenha', function(req, res, next) {
	console.log('Recuperando senha');
	var senha = req.body.senha; // depois de .body, use o nome (name) do campo em seu formulário de login	
	var email = req.body.email; // depois de .body, use o nome (name) do campo em seu formulário de login	
	let instrucaoSQL = `select * from usuario where email = '${email}' and senha='${senha}';`;
	console.log(instrucaoSQL);
	sequelize.query(instrucaoSQL, {
		model: Usuario
	}).then(resultado => {
		console.log(`Encontrados: ${resultado.length}`);
		if (resultado.length == 1) {
			res.json(resultado[0]);
		}
		else if (resultado.length == 0) {
			res.json('Senha incorreta');
		} 
		else console.log("%c ERRO DE LÓGICA PARA VERIFICAÇÃO DE EMAILS", 'background: #eee; color: red;');
	}).catch(erro => {
		console.error(erro);
		res.status(500).send(erro.message);
  	});
});

/* Cadastrar usuário */
router.post('/cadastrar', function(req, res, next) {
	var email = req.body.email; // depois de .body, use o nome (name) do campo em seu formulário de login
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
    	}).catch(erro => {
			console.error(erro);
			res.status(500).send(erro.message);
  		});
		  res.json(resultado)
	} 
			else if (resultado.length != 0){
				res.json('Conta já existente com esse email');
			}
	}).catch(erro => {
		console.error(erro);
		res.status(500).send(erro.message);
  	});
});

/* Atualizar usuário */
router.post('/atualizar', function(req, res, next) {
	var email = req.body.email; // depois de .body, use o nome (name) do campo em seu formulário de login
	var nome = req.body.nome; // depois de .body, use o nome (name) do campo em seu formulário de login
	var senha = req.body.senha; // depois de .body, use o nome (name) do campo em seu formulário de login
	var username = req.body.username; // depois de .body, use o nome (name) do campo em seu formulário de login
	var carroFav = req.body.carroFav; // depois de .body, use o nome (name) do campo em seu formulário de login
	var anoNasc = req.body.anoNasc; // depois de .body, use o nome (name) do campo em seu formulário de login
	var anoInicio = req.body.anoInicio; // depois de .body, use o nome (name) do campo em seu formulário de login
	let carrofk = null;
	if (req.body.carroFav == "Model S") carrofk = 1;
	else if (req.body.carroFav == "Model 3") carrofk = 2;
	else if (req.body.carroFav == "Model X") carrofk = 3;
	else if (req.body.carroFav == "Model Y") carrofk = 4;
	else if (req.body.carroFav == "Roadster") carrofk = 5;
	else if (req.body.carroFav == "Semi") carrofk = 6;
	else if (req.body.carroFav == "Cybertruck") carrofk = 7;
	else console.error("ERRO NA DEFINIÇÃO DA FK DO CARRO NO PERFIL DO USUÁRIO");
	let instrucaoSql = `update usuario set nome = '${nome}', username = '${username}', 
	senha = '${senha}', carroFav = '${carrofk}', anoNasc = '${anoNasc}', anoInicio = '${anoInicio}' 
	where email='${email}';`;
	console.log(instrucaoSql);
	sequelize.query(instrucaoSql, {
		model: Usuario
	}).then(resultado => {
		
	}).catch(erro => {
		console.error(erro);
		res.status(500).send(erro.message);
  	});
});

/* Verificação de usuário */
router.get('/sessao/:login', function(req, res, next) {
	let login = req.params.login;
	console.log(`Verificando se o usuário ${login} tem sessão`);
	
	let tem_sessao = false;
	for (let u=0; u<sessoes.length; u++) {
		if (sessoes[u] == login) {
			tem_sessao = true;
			break;
		}
	}

	if (tem_sessao) {
		let mensagem = `Usuário ${login} possui sessão ativa!`;
		console.log(mensagem);
		res.send(mensagem);
	} else {
		res.sendStatus(403);
	}
	
});


/* Logoff de usuário */
router.get('/sair/:login', function(req, res, next) {
	let login = req.params.login;
	console.log(`Finalizando a sessão do usuário ${login}`);
	let nova_sessoes = []
	for (let u=0; u<sessoes.length; u++) {
		if (sessoes[u] != login) {
			nova_sessoes.push(sessoes[u]);
		}
	}
	sessoes = nova_sessoes;
	res.send(`Sessão do usuário ${login} finalizada com sucesso!`);
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