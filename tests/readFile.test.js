const readFile = require('../readFile');

test('reads file', () => {
  const expected = 'success';
  const fileContents = readFile('text.txt', 'tests/fixtures').toString();
  expect(fileContents).toEqual(expected);
});
