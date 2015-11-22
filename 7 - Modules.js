/*
Modules:

- Libraries that are loaded in order to use them in the current context
- The 'require' keyword is used to load them

*/
var moduleFunction = function(){
    console.log("Module loaded");
}
// In order to expaose this method (make it public), we need to use module.exports
// 'exports' defines what 'require' returns
module.exports = moduleFunction;

// Explicitly setting a function as a public method (same behaviour as previous syntax)
/*
 exports.moduleExport = function(){
 console.log("Module loaded by using exports");
 }
 */

/*
 To run, go to "8 - Module Loader"
*/