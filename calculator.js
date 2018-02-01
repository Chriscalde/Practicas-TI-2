"use strict";
var args= process.argv.slice(2);
var n1= args[0];
var op= args[1];
var n2= args[2];
if(args.length==3){
    switch(op){
            case'mas':
                console.log("Suma: "+(Number(n1)+Number(n2)));
                break;
            case'menos':
                console.log("Resta: "+(Number(n1)-Number(n2)));
                break;
            case'por':
                console.log("Multiplicación"+(Number(n1)*Number(n2)));
                break;
            case'entre':
                console.log("División"+(Number(n1)/Number(n2)));
                break;
    }
}else{
    console.log("Argumentos no validos, intente de nuevo");
}
    
