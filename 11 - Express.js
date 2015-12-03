/*
 Express

 - Node.js is very low-level (generally, you would need a framework to build a web app)
 - Express is a web development framework for Node.js
 */

/*
 Install express by running:
 'npm install --save express'

 Note: By using the '--save' flag, apart from installing the module, it adds the required information
 to the dependencies file(package.json)
 */

// In order to start the web application, we need to load the library
var express = require('express');

// Create an instance of express
var app = express();

// Define end-points in the following way
// '/' is the root route
app.get('/', function (request, response) {
    //Read a file from the file system and send it back to the response
    response.sendFile(__dirname + "/README.md");
});
// Receive requests at port 8080
app.listen(8080);

/*
 Run the following cmd to start node and create the end-point:
 node '11 - Express.js'

 Run the following cmd to make an HTTP to your local server:
 curl  http://localhost:8080

 Expected response:
 - HTTP response with README.md file
 */