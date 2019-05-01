const ReadFile = require('./readFile');
const saveToFile = require('./saveToFile');

/**
 * Bundle all the code into a single file.
 * @param {Array} graph The dependency graph returned from generateDependencies
 * @param {String} entryFilePath The initiall entry file
 * @param {String} projectFolder The project folder 
 */
function bundle(graph, entryFilePath, projectFolder) {
    console.log("\n\n\n\n");
    let entryFile = ReadFile(entryFilePath, projectFolder);
    let bundle = "";
  
    for (let i = graph.length - 1; i >= 0; i--) {
      bundle = bundle.concat("\n", `(function() { ${graph[i].file} }());`);
    }
    bundle = bundle.concat("\n", entryFile);
  
    saveToFile(bundle, projectFolder);
  }

  module.exports = bundle;