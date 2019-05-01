const esprima = require('esprima');
const ReadFile = require('./readFile');

/**
 * Recurssive function to analyze dependencies. It parses a JS file and looks for "require".
 * Uses Esprima to generate the AST and then looks through all the generated tokens to find required files.
 * It keeps recurssing if there are dependencies
 * @param {String} filePath the relative path to the source file
 * @param {Array} dependencyTree the dependency tree
 * @param {Int} id an Id to keep track of the required files
 * @param {String} projectFolder the relative project path
 */
function generateDependencies(filePath, dependencyTree, id, projectFolder) {
  console.debug(`calling generateDependencies with ${filePath}`);
  let file = ReadFile(filePath, projectFolder);

  console.debug(`parsing ${filePath}`);
  let AST = esprima.parseScript(file, { tokens: true });

  AST.tokens.forEach((token, index) => {
    if (token.value === 'require') {
      let requiredFile = `${AST.tokens[index + 2].value.split("'")[1]}.js`;
      console.debug(`found dependecy: ${filePath} requires ${requiredFile}`);
      dependencyTree.push({
        id,
        name: requiredFile,
        requirer: filePath,
        file: ReadFile(requiredFile, projectFolder)
      });
      id++;
      console.debug(`recurssion next level with file: ${requiredFile}`);
      generateDependencies(requiredFile, dependencyTree, id, projectFolder);
    }
  });

  return dependencyTree;
}

module.exports = generateDependencies;
