/* npm */
/*
- Package manager for Node.js
- Installed with Node.js
- Has a Module repository (npmjs.org)
- Dependency Management built-in
- Easy to publish modules
*/

// Install 'request' package by running:
// 'npm install request'
// This will install the module inside the 'node_modules' directory

// Install modules with executables globally with the 'g' flag
// 'npm install typescript -g'

// Note: Global npm modules can't be required, you still need to install locally

// Tip: you can search modules from command line by using:
// 'npm search <module>'

// Best Practice: When creating a node project, you should create a package.json file where you can specify
// multiple options (name, version, etc), but the most important aspect, is to specify the dependencies, in other words,
// the modules that your application needs in order to be able to run.

// Once the dependencies have been specified, you can verify that they are installed by running:
// 'npm install'
// This will look inside the package.json file and fetch any missing dependencies

// When you work on modules that were fetched from npm, it is not going to have the node_modules directory with all
// the dependencies, you need to run 'npm install' in order to create it.

// It is worth noticing that the modules that your app uses, may contain a package.json that references other modules.
// 'npm install' will install all of the dependencies and create a new node_modules directory