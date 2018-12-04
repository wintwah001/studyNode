var http= require("http");
var dt = require('./mymodule');
http.createServer(function(req,res){
  res.writeHead(200,{'Content-Type':'text/html'});
  res.write("Now: "+dt.myDateTime()+'<br>'+dt.add(4,5)+'<br>');
  res.end('Hello World !! Tech House');
} ).listen(8080);
