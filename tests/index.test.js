const mainApp = require('../index');
const fs = require('fs');
const path = require('path');

afterAll(() => {
    fs.unlinkSync(path.resolve('./demo/bundle.js'));
  });

test('smoke test', () => {
  const entryFile = 'entry.js';
  const projectFolder = 'demo';
  let graph = [];
  let bundleContents;

  graph = mainApp(entryFile, projectFolder);
  try {
    bundleContents = fs.readFileSync(path.resolve('./demo/bundle.js')).toString();
  } catch (e) {
    throw e;
  }

  expect(graph).toHaveLength(3);
  expect(bundleContents).toBeDefined();
});
