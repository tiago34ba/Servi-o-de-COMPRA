// IMPORTAÇÃO DE MODULO
var express = require('express');
//var mongoose = require('mongoose');
var cors = require('cors');
var bodyParser = require('body-parser');

// CONSECTA BD
//mongoose.connect('mongodb://localhost:27017/mean');
//mongoose.connect('mysql://chamadosUser:chamados2018@ds121599.mlab.com:21599/compra');

// CONFIGURA API
var api = express();
    api.use(cors());
    api.use(bodyParser.json());

// IMPORTA CONTROLLERS
var ControllerFornecedor = require('./fornecedor/controller');
var ControllerProduro = require('./produto/controller');




// CRIA ROTAS
// Rotas autenicação
api.post("/fornecedor", ControllerFornecedor.fornecedor);
api.post("/produto", ControllerProduto.produto);

//Qualquer rota abaixo da instrução abaixo não funcionará sem autenticação, por causa da linha abaixo
api.use(ControllerUsuario.chackLogado);

// Contatos
api.get("/fornecedor", ControllerFornecedor.listarContatos);
api.get("/produto/:id", ControllerProduto.listarFornecedorPorId);
api.put("/fornecedor/:id", ControllerFornecedor.atualizarFornecedor);
api.put("/produto/:id", ControllerProduto.atualizarFornecedor);


// PORTA DO SERVIDOR
api.listen(3000, function(){
	console.log("Servidor rodando na porta 3000!");
});