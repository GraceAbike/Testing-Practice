const reverseString = require('./reverse');

test('Reverse string', () => {
  expect(reverseString('grace')).toBe('ecarg');
});

test('String should be a word', () => {
  expect(() => {
    reverseString(3);
  }).toThrow('Input a string, i.e word');
});