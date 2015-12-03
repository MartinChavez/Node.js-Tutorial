/*
 Upload a File(using streams)
 */

var fs = require('fs');
var http = require('http');
// This example reads from the request and pipes it to a file
http.createServer(function (request, response) {
    var writeFile = fs.createWriteStream("README_copy.md");
    request.pipe(writeFile);

    request.on('end', function () {
        response.end('uploaded');
    });
}).listen(8080);
/*
 Run the following cmd to start node and read the file

 node '.\05 - Upload File.js'

 Run the following cmd to make an HTTP request(including a file) to your local server:

 curl --upload-file readme.md http://localhost:8080

 Expected response:

 - A copy of README.md should be created in your file system
 - The HTTP response should be 'uploaded'

 */