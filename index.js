
var express = require('express');
var http = require('http');
var path = require('path');
//var handlebars = require('express3-handlebars')
var bodyParser = require('body-parser')
var total_gallery = 0;
var gallery_map = [];
var title = "";


var app = express();


// all environments
app.set('port', process.env.PORT || 3000);
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));

app.get('/', function (req, res) {
  res.redirect('login.html');
})

app.post('/gallery', function (req, res) {
  res.send([total_gallery]);
  total_gallery += parseInt(req.body.val);
  console.log(total_gallery);
})

app.post('/map', function (req, res) {
  console.log("In");
  gallery_map = req.body.map;
})

app.get('/map', function (req, res) {
  res.send(gallery_map);
})


http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});