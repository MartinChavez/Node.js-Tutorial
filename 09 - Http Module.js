/* Http request Module */
// The following example demonstrates how to create an http request with Node.js
var http = require('http');

var makeRequest = function (message) {

    // Define the options for the http request
    var options = {
        host: 'localhost', port: 8080, path: '/', method: 'POST'
    }

    // Initialize the request
    var request = http.request(options, function (response) {
        // Specifies the callback function when data gets received
        response.on('data', function (data) {
            // In this case, logs the response body
            console.log(data.toString());
        });
    });
    // Begins the request
    request.write(message);
    // Finish the request
    request.end();
}
// Declare the global function
module.exports = makeRequest;

/*
 To run, go to "8 - Module Loader"
 */