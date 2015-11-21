/*
File System (using streams)

Reading from a file in the File system using streams is easy with Node.js, follow this example:
*/
// Require the filesystem module
var fs = require('fs');
// Create a 'read' stream from the original file
var readFile =  fs.createReadStream("README.md");
// Create a 'write' stream to the destination file
var writeFile =  fs.createWriteStream("README_copy.md");
// Streaming is simple with the pipe function
readFile.pipe(writeFile);

/*
 Run the following cmd to start node and read the file

 node '.\4 - File System.js'

 Expected response:

 A copy of README.md should be created in your file system
 */