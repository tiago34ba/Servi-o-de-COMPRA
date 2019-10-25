var Produto = require('./model');


var cadastrarProduto = function (req,res) {
    var produto = req.body; // se não houver o body-parser, não dá para pegar o json do cliente usando o '.body'

    console.log(req);
    new Produto(produto).save(function (error, data) {
        if (error) {
            res.status(400).json({
                success: false,
                message: "Erro ao cadastrar - " + error.message,
            }); // enviando o resulato para o produto
        } else {
            res.status(201).json({
                success: true,
                message: "produto cadastrado com sucesso.",
		data: data
				});
        }
    });
};

var listarProduto = function (req, res) {
    Produto.find(function (error, data) {
        if (error) {
            res.status(400).json({
                success: false,
                message: error.message,
            });
        } else if (!data) {
            res.status(404).json({
                success: false,
                message: "Nenhum registro localizado."
            });
        } else {
            res.status(200).json({
                success: true,
                message: "Ok - Dados localizados com sucesso.",
                data: data
            });
        }
    });
};

var listarProdutoPorId = function (req, res) {
    Produto.findById(req.params.id, function (error, data) {
        if (error) {
            res.status(400).json({
                success: false,
                message: error.message,
            });
        } else if (!data) {
            res.status(404).json({
                success: false,
                message: "Nenhum registro localizado."
            });
        } else {
            res.status(200).json({
                success: true,
                message: "Ok",
                data: data
            });
        }
    });
}

var atualizarProduto = function (req, res) {
    var query = {
        _id: req.params.id
    };
    var produto = req.body;

    Produto.findOneAndUpdate(query, produto, function (error, data) {
        if (error) {
            res.status(400).json({
                success: false,
                message: "Erro ao atualizar - " + error.message,
            });
        } else {
            res.status(200).json({
                success: true,
                message: "produto atualizado com sucesso.",
                data: data
            });
        }
    });
};

var removerProduto = function (req, res) {
    var query = {
        _id: req.params.id
    };

    Produto.findOneAndRemove(query, function (error, data) {
        if (error) {
            res.status(400).json({
                success: false,
                message: "Erro ao remover - " + error.message,
            });
        } else {
            res.status(200).json({
                success: true,
                message: "produto removido com sucesso.",
                data: data
            });
        }
    });
};


var listaPorProduto = function (req, res) {

    var query = {
        requerente: req.params.requerente
    };
    produto.find(query, function (error, data) {
        if (error) {
            res.status(400).json({
                success: false,
                message: "Erro ao buscar- " + error.message,
            });
        } else {
            res.status(200).json({
                success: true,
                message: "sucesso.",
                data: data
            });
        }
    });
};

exports.cadastrarProduto = cadastrarProduto; // faz com que os outros arquivos "vejam" este
exports.listarProduto = listarProduto;
exports.listarProdutoPorId = listarProdutoPorId;
exports.atualizarProduto = atualizarProduto;
exports.removerProduto = removerProduto;
exports.listaPorProduto = listaPorProduto;