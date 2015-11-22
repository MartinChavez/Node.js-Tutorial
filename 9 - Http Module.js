/* Http request Module */

var http = require('http');

var makeRequest = function (message) {

    // Define the options for the http request
    var options = {
        host: 'localhost', port: 8080, path: '/', method: 'POST'
    }

    // Initialize the request
    var request = http.request(options, function (response) {
        // Scpecifies the callback function when data gets received
        response.on('data', function () {
            // In this case, logs the response body
            console.log(data);
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