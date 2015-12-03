// Load the custom module using 'require'
var moduleFunction = require('./7 - modules');
// It is possible to use all of the export methods from the custom Module
moduleFunction();

// When you require a module using './', it is going to look in the same directory
// as the application, for a file with that name
var makeRequest = require('./9 - http module');
makeRequest('http req 1');
makeRequest('http req 2');

// When you use '../', it is going to look in the parent directory

// When you don't specify any directory, it is going to search in node_modules directory (inside the current app)

// When 'require' doesn't find the module in the current app, it is going to search
// in node_modules directory (Home directory)

/*
 Run the following cmd to start node and load the custom module

 node '.\08 - Module Loader.js'

 Expected response:

 - "Module loaded" from '7 - Modules'
 - Two HTTP requests from '9 - Http Module'
 */