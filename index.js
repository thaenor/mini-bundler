const generateDependencies = require('./generateGraph');
const bundle = require('./bundle');

/**
 * Main function, sets up and runs the bundler.
 * This can be executed via the terminal (parameters passed via the terminal command) or a standalone module that can be required.
 * @param {String} entryFile The file that serves as the entry point for the bundler
 * @param {String} projectFolder The project folder where all source code to be compiled resides
 */
function processFile(entryFile, projectFolder) {
  let dependencyTree = []; 
  let pathToProjectFolder = `${__dirname}/${projectFolder}`;

  dependencyTree = generateDependencies(entryFile, dependencyTree, 0, pathToProjectFolder);
  bundle(dependencyTree, entryFile, pathToProjectFolder);
  return dependencyTree;
}

if (require.main === module) {
  processFile(process.argv[2], process.argv[3]);
} else {
  module.exports = processFile;
}
