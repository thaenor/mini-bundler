const fs = require('fs');
const path = require('path');
const saveToFile = require('../saveToFile');
const readFile = require('../readFile');

afterAll(() => {
  fs.unlinkSync(path.resolve('./tests/fixtures/bundle.js'));
});

ftest('can save data to a file', () => {
  const entryData = 'success';
  saveToFile(entryData, 'tests/fixtures');
  const contentsOfFile = readFile('bundle.js', 'tests/fixtures').toString();
  expect(contentsOfFile).toEqual(entryData);
});
