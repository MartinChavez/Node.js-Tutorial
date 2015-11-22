// Load the custom module using 'require'
var moduleFunction = require('./7 - modules');
// It is possible to use all of the export methods from the custom Module
moduleFunction();


var makeRequest = require('./9 - Http Module');
makeRequest('http req 1');
makeRequest('http req 2');


/*
Run the following cmd to start node and load the custom module

 node '.\8 - Module Loader.js'

Expected response:

 - "Module loaded" on cmd
*/