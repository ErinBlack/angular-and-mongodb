//requires
var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var index = require('./modules/routes/index');


//use
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use('/', index);


//global
var port = process.env.PORT || 3000;

//spin up server
app.listen(port, function(){
console.log('server up on :', port);
});
