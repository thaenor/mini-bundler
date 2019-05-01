const fs = require('fs');
const path = require('path');

/**
 * Saves content passed in the first parameter to projectFolder passed as the second parameter.
 * Folder paths are resolved within the context of the exectued command
 */
module.exports = (content, projectFolder) => {
    try {
      fs.writeFileSync(path.resolve(projectFolder,"bundle.js"), content, "utf-8");
    } catch (err) {
      console.error(content);
      console.error(path.resolve("./demo/bundle.js"));
      console.error("failed to save final bundle", err);
    }
  }