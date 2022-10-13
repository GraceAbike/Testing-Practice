const getStringLength = require('./length');

test('Returns the length of a string', () => {
  expect(getStringLength('Grace')).toBe(5);
});
test('String should be at least 1 character long and not longer than 10 characters.', () => {
  expect(() => {
    getStringLength('olubukky grace abike atitebi');
  }).toThrow('try again');
});
test('String should be at least 1 character long and not longer than 10 characters.', () => {
  expect(() => {
    getStringLength('Hi! I am Grace from Nigeria');
  }).toThrow('try again');
});