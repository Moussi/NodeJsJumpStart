// Load module dependencies
var http = require('http'),
    fs = require('fs');
var host_port = 8081;

http.createServer(function(request, response) {

    fs.readFile('./data.csv', 'utf-8', function(err, data) {
        var responseData = {};

        var lines = data.split('\n');

        lines.forEach(function(line) {
            var parts = line.split(',');
            responseData[parts[0]] = parts[1];
        });

        response.writeHead(200, {
            'Contetnt-Type':'application/json'
        });

        response.end(JSON.stringify(responseData));

    });

}).listen(host_port);

console.log('node server running on port '+host_port);