var express = require('express');
var app = express();
var port = process.env.PORT || 8081;

if (!process.env.PORT) {
  var morgan = require('morgan');
  app.use(morgan('dev'));
}

app.use(express.static(__dirname));

app.listen(port, function() {
  console.log('Listening on ' + port);
});
