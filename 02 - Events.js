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
 node '02 - Events.js'

 You should see the following output:

 ERR: This is the first error
 ERR: This is the second error

 */