
var express = require('express');
var http = require('http');
var path = require('path');
//var handlebars = require('express3-handlebars')
var bodyParser = require('body-parser')
var total_gallery = 0;
var gallery_map = [];
var title = "untitle";
var date = (new Date()).toString().split(' ').splice(1,3).join(' ');


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

  if (req.body.title != undefined && req.body.title != ""){
  	title = req.body.title;
	}

})

app.post('/map', function (req, res) {
  gallery_map = req.body.map;
})

app.get('/map', function (req, res) {
  res.send(gallery_map);
})

app.get('/info', function(req, res) {
	res.send({'title': title, "date" : date});
})


http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});