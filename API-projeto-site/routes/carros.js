import { Router } from 'express';
var router = Router();
import { sequelize } from '../models';
import { Carros } from '../models';

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

/* Cadastrar usuário */
router.post('/cadastrar', function(req, res, next) {
	console.log('Criando um usuário');
	
	Usuario.create({
		nome : req.body.nome,
		username : req.body.username,
		senha: req.body.senha,
		email: req.body.email,
		carroFav: req.body.carroFav,
		anoNasc: req.body.anoNasc,
		anoInicio: req.body.anoInicio
	}).then(resultado => {
		console.log(`Registro criado: ${resultado}`)
        res.send(resultado);
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

export default router;
