const fs = require('fs');
const path = require('path');

/**
 * Reads content of file passed in the first parameter to projectPath passed as the second parameter.
 * Folder paths are resolved within the context of the exectued command
 */
module.exports = (filePath, projectPath) => {
    const fullfilePath = path.resolve(
      projectPath,
      path.normalize(filePath)
    );
    console.debug(`reading file ${filePath} with full path ${fullfilePath}`);
    try {
      return fs.readFileSync(fullfilePath, "utf8").toString();
    } catch (err) {
      console.error("error reading input file", err);
    }
  }