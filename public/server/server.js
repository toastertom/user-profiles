var express = require("express");
var app = express();
var port = 8000
var bodyParser = require('body-parser');
var session = require('express-session');

app.use(bodyParser.json());
app.use(cors());

// Makes it so the request can only come from this port.
var corsOptions = {
  origin: 'http://localhost:8000'
}


app.listen(port, function(){
  console.log("Listeing on port ", port, " All your base belong to us!");
});
