const reverseString = (string) => {
  if (typeof string !== 'string') {
    throw new Error('Input a string, i.e word');
  }
  return string.split('').reverse().join('');
};

module.exports = reverseString;