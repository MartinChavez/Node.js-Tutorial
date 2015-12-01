<a name="README"><img src="http://www.dmuth.org/files/nodejs-dark.png" heigth="300px" width="300px"/></a>

# Node.js: Tutorial

Use this tutorial as a guide to learn Node.js. Each unit contains an annotated lesson with working examples.

Topics
================
- Introduction
- Events
- Streams
- File System Manipulation
- Uploading Files
- Modules
- NPM
- Express
- Express Routes
- Socket.io
- Persisting Data with Redis

Suggested prerequisites
====================
<a name="README">[<img src="https://s3-us-west-2.amazonaws.com/martinbucket/JS.png" width="50px" height="50px" />](https://github.com/MartinChavez/Learn-Javascript)</a>

Introduction
====================
```Javascript
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
 node '1 - Introduction.js'
 */

/* Run the following cmd to make an HTTP request to your local server (you should get a response)
 curl http://localhost:8080
 */
```

Events
====================
```Javascript
/* Events

 - Similar to how the DOM works, Node.js triggers events and handles the callback functions
 - Many objects in Node emit events, in general, these are inherited from the EventEmitter constructor
 */
// Loading the EventEmitter constructor
var EventEmitter = require('events').EventEmitter;

//In this case, we want the logger to emit Events by adding a listener
var logger = new EventEmitter();

// The following code demonstrates the syntax for listening to the error event,
// and executing the callback function
logger.on('error', function(message) {
    console.log('ERR: ' + message);
});

// The following code triggers the 'error' event
logger.emit('error', 'This is the first error');
logger.emit('error', 'This is the second error');

/* Run the following cmd to start node and listen/generate events
 node '2 - Events.js'

 You should see the following output:

 ERR: This is the first error
 ERR: This is the second error

 */
```

Contact
====================
[<img src="https://s3-us-west-2.amazonaws.com/martinsocial/MARTIN2.png" />](http://martinchavezaguilar.com/)
[<img src="https://s3-us-west-2.amazonaws.com/martinsocial/github.png" />](https://github.com/martinchavez)
[<img src="https://s3-us-west-2.amazonaws.com/martinsocial/mail.png" />](mailto:info@martinchavezaguilar.com)
[<img src="https://s3-us-west-2.amazonaws.com/martinsocial/linkedin.png" />](https://www.linkedin.com/in/martinchavezaguilar)
[<img src="https://s3-us-west-2.amazonaws.com/martinsocial/twitter.png" />](https://twitter.com/martinchavezag)

Continue Learning
====================
<a name="README">[<img src="https://s3-us-west-2.amazonaws.com/martinbucket/JS.png" width="50px" height="50px" />](https://github.com/MartinChavez/Learn-Javascript)</a>
<a name="README">[<img src="https://pbs.twimg.com/profile_images/2149314222/square.png" width="50px" height="50px" />](https://github.com/MartinChavez/AngularJs-Basics)</a>
<a name="README">[<img src="https://s3-us-west-2.amazonaws.com/testdrivenlearningbucket/angularadvanced.png" width="50px" height="50px" />](https://github.com/MartinChavez/AngularJS-Advanced-Topics)</a>
<a name="README">[<img src="https://s3-us-west-2.amazonaws.com/testdrivenlearningbucket/CSHARP.png" width="50px" height="50px" />](https://github.com/MartinChavez/CSharp)</a>
<a name="README">[<img src="https://s3-us-west-2.amazonaws.com/testdrivenlearningbucket/linqblack.png" width="50px" height="50px" />](https://github.com/MartinChavez/LINQ)</a>
<a name="README">[<img src="http://precision-software.com/wp-content/uploads/2014/04/jQurery.gif" width="50px" height="50px" />](https://github.com/MartinChavez/jQueryBasics)</a>
<a name="README">[<img src="https://s3-us-west-2.amazonaws.com/testdrivenlearningbucket/htmlcss.jpg" width="65px" height="50px" />](https://github.com/MartinChavez/HTML-CSS)</a>
<a name="README">[<img src="https://s3-us-west-2.amazonaws.com/testdrivenlearningbucket/htmlcssblack.jpg" width="65px" height="50px" />](https://github.com/MartinChavez/HTML-CSS-Advanced-Topics)</a>
