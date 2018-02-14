var fs= require('fs');
try{
    fs.mkdirSync('api-rest');
    console.log('api-rest directory created');
} catch(err){
    if(err.code == 'EEXIST'){
        console.log('Dicertory named api-rest exists');
    } else{
        console.log(err);
    }
}
