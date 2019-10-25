var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Criando a "tabela" Fornecedor  no mongodb
var alunoSchema = new Schema({
    nome: {
        type: String,
        require: true
    },
    nascimento: {
        type: String,
        require: true
    },
    cpf: {
        type: String,
        require: true
    },
    rg: {
        type: String,
        require: true
    },
    mae: {
        type: String,
        require: true
    },
    pai: {
        type: String,
        require: true
    },
});
var Fornecedor  = mongoose.model('fornecedor ', alunoSchema);

module.exports = Fornecedor ;