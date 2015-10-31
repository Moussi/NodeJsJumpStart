var fs=require("fs");
var http=require("http");
var text
fs.readFile("input.txt",function (err, data) {
	if(err){
		console.log("error");
		console.log(err);
	}else{
		console.log(data.toString());
		text=data.toString();
	}
});

http.createServer(function(request,response) {
	response.writeHead(200, {'Content-Type': 'text/plain'});
	response.end("input file content : "+text);
}).listen(8081);

console.log("programe executed");