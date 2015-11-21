/* Streams

 When writting applications that depend consitently on network access or accesing files in the disk,
 it is important to understand how the data is being trasfered, this is an excellent use-case for Node.js.

 Stream:

 - Streams are like channels, where data flows though
 - There are two main different types: readable and writeable
 - Readable stream: Inherits from EventEmitter

 */
var http = require('http');

// 'request' is a readable stream
// 'response' is a writeable stream
http.createServer(function (request, response) {
    // With the following example, we print to the console the data that we get from the client
    response.writeHead(200);

    request.on('readable', function () {
        var chunk = null;
        while (null !== (chunk = request.read())) {
            response.write(chunk);
            console.log(chunk);
        }
    });
    request.on('end', function () {
        response.end('- end of request');
    });

}).listen(8080);

//Note: This example could be simplified by using:
/*
 http.createServer(function (request, response) {
   response.writeHead(200);
   // pipe helps us write to a writeable stream as soon as you read from a readable stream
   request.pipe(response);
 }).listen(8080);
*/

console.log('Listening on port 8080...');

/*
Run the following cmd to start node and run the server:

 node '.\3 - Streams.js'

Run the following cmd to make an HTTP request to your local server:

 curl -d 'from client' http://localhost:8080

Expected response:

 "from client- end of request"
*/