var express = require( 'express' );
var app = express();




app.use(function(req, res, next) {
	res.send(req.method + " " + req.originalUrl);
	res.end;
	next();
})

app.get('/news', function(req, res, next) {
	res.send("Hello, this is news");
	res.end;
	next();
})


app.post(function(req, res, next) {
	var user_id = req.query;
	// var token = req.body.token;
	// var geo = req.body.geo;
	res.send(req.method + " " + req.originalUrl);
	next();
})
/*
app.use(function(err, req, res, next) {
	console.log("Doesn't exist");
	res.status(404).send("doesn't exist error");
})
*/

app.delete('/news', function(req, res, next) {
	res.send("Hello, this is news");
})

app.listen(3000);