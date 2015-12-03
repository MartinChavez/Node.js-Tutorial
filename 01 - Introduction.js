/*
 Node.js

 - Allows you to build scalable network applications using JavaScript on the server-side.
 - Runs on top of the V8 JavaScript Runtime (same that is running on the Chrome browser)

 What can you build?

 - Web socket Server
 - File Upload client
 - Ad Server
 - Real-time data apps

 Misconceptions

 - Node.js is not a web framework
 - Node.js is not multi-threaded


 The event loop

 - The first time node interprets the js code and executes it, it registers the events it finds
 - Once the script has been executed, node starts the event loop, which checks for events continuously
 - Once node finds a new event, it will trigger the callback associated with such event
 - Allows us to write code that is non-blocking

 The event Queue

 - Queues the events for the event loop
 - Processes the events, one at a time

 */


/* How to run node.js */
// In this example, we will create a node server and serve an HTTP response

// Use the 'require' keyword to load modules(libraries)
var http = require('http');
// In general, you need to specify a call-back function with most of the Node modules methods
http.createServer(function (request, response) {
    response.writeHead(200); //Status code in header
    response.write("Introduction"); //Response body
    response.end(); //Close the connection
}).listen(8080); //Port in which node will listen for connections

console.log('Listening on port 8080...');

/* Run the following cmd to start node and run the server
 node '01 - Introduction.js'
 */

/* Run the following cmd to make an HTTP request to your local server (you should get a response)
 curl http://localhost:8080
 */