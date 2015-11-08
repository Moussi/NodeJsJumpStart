var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var port_host = 8081;

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

function authUser (request, response, next) {
	var user = {
		name : "Moussi",
		isAdmin : true
	}
	request.user = user;
	next();
}

app.use(authUser);

app.get('/',function(request, response) {
	console.log('get / ');
	response.send('hello world from express');
});

app.get('/json',function(request, response) {
	console.log('get /json ');
	response.send({
		foo : 'Moussi'
	});
});

// execute this command to test curl -X POST -d "foo=Moussi"  http://localhost:8081/doStuff
// or use rest client exp: postman
app.post('/doStuff',authUser, function (request, response) {
	var param = request.body.foo;
	console.log('post /doStuff with params'+JSON.stringify(request.body));
	response.send({
		foo : param,
		isAdmin: request.user.isAdmin,
		name : request.user.name
	})
});


app.listen(port_host);

console.log('this server is listening on port '+port_host);
