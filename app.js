var express = require( 'express' );
var app = express();
var swig = require('swig');
var tweetBank = require('./tweetBank');
var routes = require('./routes/');



app.engine('html', swig.renderFile);
app.set('view engine', 'html');
app.set('views', __dirname + '/views');
swig.setDefaults({ cache: false });
app.use(express.static('public'));
app.use('/', routes);
//app.use('/public', express.static('stylesheets'));

//app.get('/', function(req, res) {
//	res.sendfile('/index.html');
//});

// var locals = {
//     title: 'An Example',
//     people: [
//         { name: 'Gandalf'},
//         { name: 'Frodo' },
//         { name: 'Hermione'}
//     ]
// };





//app.use(function(req, res, next) {
	//res.send(req.method + " " + req.originalUrl);
	//var people = [{name: 'Full'}, {name: 'Stacker'}, {name: 'Son'}];
	//res.render( 'index', locals );
	//res.end;
	//next();
//})

//app.get('/tweets/', tweetBank.find());


//app.post('/tweets/' tweetBank.add());
/*
app.use(function(err, req, res, next) {
	console.log("Doesn't exist");
	res.status(404).send("doesn't exist error");
})
*/

// app.delete('/news', function(req, res, next) {
// 	res.send("Hello, this is news");
// })

app.listen(3000);