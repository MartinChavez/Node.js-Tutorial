/* How to run node.js */
// In this example, we will create a node server and serve an HTTP response

// Use the 'require' keyword to load modules(libraries)
var http = require('http');

http.createServer(function(request,response){
    response.writeHead(200); //Status code in header
    response.write("Introduction"); //Response body
    response.end(); //Close the connection
}).listen(8080); //Port in which node will listen for connections

console.log('Listening on port 8080...');

/* Run the following cmd to start node and run the server
 node '1 - Introduction.js'
*/

/* Run the following cmd to make an HTTP request to your local server (you should get a response)
 curl http://localhost:8080
*/