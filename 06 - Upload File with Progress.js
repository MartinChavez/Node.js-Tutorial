/*
 Upload a File with Progress (using streams)
 */

var fs = require('fs');
var http = require('http');

http.createServer(function (request, response) {
    var writeFile = fs.createWriteStream("largeFile_copy");
    // Get the size of the file from the request
    var fileBytes = request.headers['content-length'];

    // This variable is used to keep track of how many bytes were uploaded
    var uploadedBytes = 0;

    request.on('readable', function () {
        var chunk = null;
        while (null !== (chunk = request.read())) {
            // The following code calculates the file upload progress and writes it to the response
            uploadedBytes += chunk.length;
            var progress = (uploadedBytes / fileBytes) * 100;
            response.write("progress: " + parseInt(progress, 10) + "%\n");
        }
    });

    request.pipe(writeFile);

    request.on('end', function () {
        response.end();
    });
}).listen(8080);

console.log('Listening on port 8080...');
/*
 Run the following cmd to start node and read the file

 node '.\06 - Upload File with Progress.js'

 Run the following cmd to make an HTTP request(including a file) to your local server:

 curl --upload-file largeFile.txt http://localhost:8080

 Expected response:

 - A copy of largeFile should be created in your file system
 - You should see the progress printed on the cmd

 */
