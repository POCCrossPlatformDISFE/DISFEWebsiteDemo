var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(function(req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "X-Requested-With");
  next();
});

app.use(express.static(__dirname + '/views'));
app.use(express.static(__dirname + '/public'));


app.get('/', function(request, response) {
  response.sendFile('La_Poste_WiFi.html');
});

app.get('/particulier', function(request, response) {
  response.sendFile('La_Poste_WiFi.html',{root: ___dirname});
});

app.get('/professionnel', function(request, response) {
  response.sendFile('La_Poste_WiFi.html',{root: ___dirname});
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});


