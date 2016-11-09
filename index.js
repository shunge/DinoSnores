
var express = require('express');
var http = require('http');
var path = require('path');
//var handlebars = require('express3-handlebars')


var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function (req, res) {
  res.redirect('login.html')
})


http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});