var express = require('express');

var app = express();

app.get("/hello", function(req, res){
    res.send('Hello World');
});

app.listen(1337);
console.log('garycollinscv App listening on port 1337');

