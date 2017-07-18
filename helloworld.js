var http = require('http');
var urlParser = require('url');

var server = http.createServer().listen(3001);

console.log("I'm listening on port: 3001");

server.on('request', function(request, response){
  console.log(request.url);
  var urlObj = urlParser.parse(request.url);
  var pathname = urlObj.pathname;
  console.log("requested: " + pathname);

  response.writeHead(200, {'Content-Type': 'text/html'});


  if(pathname === "/fun-times") {
      response.write("<html><h1>Fun times!</h1>");
      response.write("<script>console.log('hello world in the console')</script>");
      response.write("</html>");
  } else {
      response.write("<html>Hello World!");
      response.write("<script>console.log('hello world in the console')</script>");
      response.write("</html>");
  }

  if(pathname === "/favorite-movies") {
      response.write("<html><h1>Favorite Movies!</h1>");
      response.write("<script>console.log('fave movies')</script>");
      response.write("</html>");
  } else if(pathname === "/coming-soon") {
      response.write("<html><h1>Coming Soon!</h1>");
      response.write("<script>console.log('hello world in the console')</script>");
      response.write("</html>");
  }

  else {
      response.writeHead(404, {'Content-Type' : 'text/html'});
      response.write("404NOTFOUND");
  }


  response.write("<html>Hello World!");
  response.write("<script>console.log('hello world in the console')</script>")
  response.write("</html>");
  response.end();
});