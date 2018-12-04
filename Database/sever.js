var http = require('http');
var url = require('url');
var fs = require('fs');
var user = require('./user');
http.createServer(function(req, res) {
  var reqUrl = url.parse(req.url, true);
  var html = ' ';
  if (reqUrl.pathname.endsWith('.do')) {


    switch (reqUrl.pathname) {
      case '/':
        html = '<h1> Index page </h1>';
        html += '<a href="/useradd.html">Add user</a><br>';
        html += '<a href="/userlist.html">User list</a>';
        break;

      case '/useradd.do':
        user.add(req, res);

      case '/userlist.do':
        user.list(req, res);
      default:
        res.writeHead(404, {
          'Content-Type': 'text/html'
        });
        res.end('Action not found: ' + reqUrl.pathname);
        break;
    }
    res.writeHead(200, {
      'Content-Type': 'text/html'
    });
    res.end(html);
  } else {
    var filename = '.' + reqUrl.pathname;
    if (filename == './') filename = './index.html';
    fs.readFile(filename, function(err, data) {
      if (err) {
        res.writeHead(404, {
          'Content-Type': 'text/html'
        });
        res.end('File not found: ' + reqUrl.pathname);
      }
      var ctype = 'text/html';
      if (reqUrl.pathname.startsWith('/js/')) {
        ctype = 'text/javascript';
      } else if (reqUrl.pathname.startsWith('/css/')) {
        ctype = 'text/css';
      } else if (reqUrl.pathname.startsWith('/images/')) {
        ctype = 'images/' + /[^.]+$/.exec(filename);
      }
      res.writeHead(200, {
        'Content-Type': ctype
      });
      res.end(data);
    });
  }
}).listen(8080);
console.log('Server is running...');
