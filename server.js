var express = require('express');
var path = require('path');
var app = express();

app.use(express.static('client'));

var port = process.env.PORT || 8081;

if (!process.env.PORT) {
  var morgan = require('morgan');
  app.use(morgan('dev'));
}

app.listen(port, function() {
  console.log('NodeJS server istening on port ' + port);
});
