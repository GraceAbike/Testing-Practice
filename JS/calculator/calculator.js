class Calculator {
  constructor() {
    this.phrase = 'Your answer is:';
  }

  add(number1, number2) {
    if (!number1 || !number2) {
      throw new Error('Input something.');
    } else if (typeof number1 !== 'number' || typeof number2 !== 'number') {
      throw new Error('Input a number, not a string.');
    }
    return `${this.phrase} ${number1 + number2}`;
  }

  subtract(number1, number2) {
    if (!number1 || !number2) {
      throw new Error('Input something.');
    } else if (typeof number1 !== 'number' || typeof number2 !== 'number') {
      throw new Error('Input a number, not a string.');
    }
    return `${this.phrase} ${number1 - number2}`;
  }

  divide(number1, number2) {
    if (number1 === 0 || number2 === 0) {
      throw new Error('Do not use zero.');
    } else if (!number1 || !number2) {
      throw new Error('Input something.');
    } else if (typeof number1 !== 'number' || typeof number2 !== 'number') {
      throw new Error('Input a number, not a string.');
    }
    return `${this.phrase} ${number1 / number2}`;
  }

  multiply(number1, number2) {
    if (number1 === 0 || number2 === 0) {
      throw new Error('Any multiplication with zero is obviously zero.');
    } else if (!number1 || !number2) {
      throw new Error('Input something.');
    } else if (typeof number1 !== 'number' || typeof number2 !== 'number') {
      throw new Error('Input a number, not a string.');
    }
    return `${this.phrase} ${number1 * number2}`;
  }
}

const calculator = new Calculator();

module.exports = calculator;