var express = require('express');
var app = express();

var server= app.listen(3678,function(){
    var host= server.address().address;
    var port= server.address().port;
    console.log('App listening at http://localhost ',port);
});
//ES6 es el mas reciente estandar del lenguaje de programacion Javascript. Define como debe de ser el lenguaje Javascript.
//'var' es cuando no se reasigna la variable y no se usa para toda la funcion.
//'const' es cuando el identificador no sera reasignado.
//'let' significa que la variable puede ser reasignada o que solo puede ser usada en su bloque