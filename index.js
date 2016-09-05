var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/views'));
app.use(express.static(__dirname + '/public'));


app.get('/', function(request, response) {
  response.header("Access-Control-Allow-Origin", "https://disfecarrouseldemo.herokuapp.com");

  response.sendFile('La_Poste_WiFi.html');
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});


