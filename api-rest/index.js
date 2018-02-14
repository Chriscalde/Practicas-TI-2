var express = require('express');
var bodyparser= require('body-parser');
var app = express();

app.use(bodyparser.json());

app.get('/suma/:no1/:no2',function(req,res){
    no1 = req.params.no1;
    no2 = req.params.no2;
    n1= parseInt(no1);
    n2= parseInt(no2);
    var sum= n1+n2;
    res.status(200).send({Suma:sum});
});

app.get('/resta/:no1/:no2',function(req,res){
    no1 = req.params.no1;
    no2 = req.params.no2;
    n1= parseInt(no1);
    n2= parseInt(no2);
    var sum= n1-n2;
    res.status(200).send({Resta:sum});
});

app.get('/division/:no1/:no2',function(req,res){
    no1 = req.params.no1;
    no2 = req.params.no2;
    n1= parseInt(no1);
    n2= parseInt(no2);
    var sum= n1/n2;
    res.status(200).send({Division:sum});
});

app.get('/multiplicacion/:no1/:no2',function(req,res){
    no1 = req.params.no1;
    no2 = req.params.no2;
    n1= parseInt(no1);
    n2= parseInt(no2);
    var sum= n1*n2;
    res.status(200).send({Multiplicacion:sum});
});

var server= app.listen(3678,function(){
    var host= server.address().address;
    var port= server.address().port;
    console.log('App listening at http://localhost ',port);
});

//ES6 es el mas reciente estandar del lenguaje de programacion Javascript. Define como debe de ser el lenguaje Javascript.
//'var' es cuando no se reasigna la variable y no se usa para toda la funcion.
//'const' es cuando el identificador no sera reasignado.
//'let' significa que la variable puede ser reasignada o que solo puede ser usada en su bloque