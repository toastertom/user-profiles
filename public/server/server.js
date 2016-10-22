var express = require("express");
var app = express();
var config = require('./config');
var port = 8000;
var bodyParser = require('body-parser');
var session = require('express-session');
var cors = require('cors');
var corsOptions = {
  origin: 'http://localhost:8000'
};

app.use(bodyParser.json());
app.use(cors(corsOptions));

// Makes it so the request can only come from this port.
app.use(session({
  secret: config.sessionSecret
}));


app.listen(port, function(){
  console.log("Listeing on port ", port, " All your base belong to us!");
});
