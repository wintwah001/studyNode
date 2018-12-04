var http= require("http");
var dt = require('./newmodule');
http.createServer(function(req,res){
  res.writeHead(200,{'Content-Type':'text/html'});
  res.write("Now: "+dt.myDate()[0]+'<br>'+dt.myDate()[1]+'<br>'+dt.myDate()[2]+'<br>'+dt.myDate()[3]);
  res.write("Now: "+dt.Date().getMonth()+'<br>'+dt.Date().getDate()+'<br>'+dt.Date().getDay()+'<br>'+dt.Date().getFullYear());


} ).listen(8080);
