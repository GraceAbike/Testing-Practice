const calculator = require('./calculator');

describe('Calculator functions', () => {
  describe('For Add method', () => {
    test('Add numbers', () => {
      expect(calculator.add(2, 5)).toBe('Your answer is: 7');
    });
    test('Is it a number', () => {
      expect(() => {
        calculator.add('c', 3);
      }).toThrow('Input a number, not a string.');
    });
    test('Is it a number', () => {
      expect(() => {
        calculator.add(3, 'b');
      }).toThrow('Input a number, not a string.');
    });
    test('Is it empty?', () => {
      expect(() => {
        calculator.add();
      }).toThrow('Input something.');
    });
  });

  describe('For Subtract method', () => {
    test('Subtract numbers', () => {
      expect(calculator.subtract(2, 5)).toBe('Your answer is: -3');
    });
    test('Is it a number', () => {
      expect(() => {
        calculator.subtract('c', 3);
      }).toThrow('Input a number, not a string.');
    });
    test('Is it a number', () => {
      expect(() => {
        calculator.subtract(3, 'b');
      }).toThrow('Input a number, not a string.');
    });
    test('Is it empty?', () => {
      expect(() => {
        calculator.subtract();
      }).toThrow('Input something.');
    });
  });

  describe('For Multiply method', () => {
    test('Multiply numbers', () => {
      expect(calculator.multiply(5, 6)).toBe('Your answer is: 30');
    });
    test('Is it a number', () => {
      expect(() => {
        calculator.multiply('c', 3);
      }).toThrow('Input a number, not a string.');
    });
    test('Is it a number', () => {
      expect(() => {
        calculator.multiply(3, 'b');
      }).toThrow('Input a number, not a string.');
    });
    test('Is it empty?', () => {
      expect(() => {
        calculator.multiply();
      }).toThrow('Input something.');
    });
    test('Is it zero?', () => {
      expect(() => {
        calculator.multiply(0, 2);
      }).toThrow('Any multiplication with zero is obviously zero.');
    });
    test('Is it zero?', () => {
      expect(() => {
        calculator.multiply(3, 0);
      }).toThrow('Any multiplication with zero is obviously zero.');
    });
  });

  describe('For Divide method', () => {
    test('Divide numbers', () => {
      expect(calculator.divide(12, 2)).toBe('Your answer is: 6');
    });
    test('Is it a number', () => {
      expect(() => {
        calculator.divide('c', 3);
      }).toThrow('Input a number, not a string.');
    });
    test('Is it a number', () => {
      expect(() => {
        calculator.divide(3, 'b');
      }).toThrow('Input a number, not a string.');
    });
    test('Is it empty?', () => {
      expect(() => {
        calculator.divide();
      }).toThrow('Input something.');
    });
    test('Is it zero?', () => {
      expect(() => {
        calculator.divide(0, 2);
      }).toThrow('Do not use zero.');
    });
    test('Is it zero?', () => {
      expect(() => {
        calculator.divide(3, 0);
      }).toThrow('Do not use zero.');
    });
  });
});
