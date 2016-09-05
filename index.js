var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/views'));
app.use(express.static(__dirname + '/public'));

// on précise ici qu'on autorise toutes les sources
// puis dans le second header, quels headers http sont acceptés
app.use(function(request, response, next) {
  response.header("Access-Control-Allow-Origin", "*");
  response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/', function(request, response) {  
  response.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, OPTIONS");
  response.sendFile('La_Poste_WiFi.html');
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});


