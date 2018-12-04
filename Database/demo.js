var http=require('http');
var url=require('url');
http.createServer(function(req,res){
  var r=url.parse(req.url,true);
  console.log('request url:',req.url);
  console.log('url parse',r);
  res.writeHead(200,{'Content-Type':'text/html'});
  res.write("Hello World; Wint Wah");
  res.end();
}).listen(80);
console.log("Server is Running..");
