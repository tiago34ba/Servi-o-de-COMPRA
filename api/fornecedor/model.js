var mangusto =  require ( ' mangusto ' );
var Esquema =  mangusto . Esquema ;

// Criando uma "tabela" Fornecedor no mongodb
var fornecedorSchema =  new  Schema ({
    nome : {
        tipo :  String ,
        exigir :  verdadeiro
    }
    nascimento : {
        tipo :  String ,
        exigir :  verdadeiro
    }
    cpf : {
        tipo :  String ,
        exigir :  verdadeiro
    }
    rg : {
        tipo :  String ,
        exigir :  verdadeiro
    }
    mae : {
        tipo :  String ,
        exigir :  verdadeiro
    }
    pai : {
        tipo :  String ,
        exigir :  verdadeiro
    }
});
var Fornecedor =  mangusto . modelo ( ' fornecedor ' , fornecedorSchema);

módulo . exportações  = Fornecedor;