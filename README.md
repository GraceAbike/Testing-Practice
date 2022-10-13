### Exercise
In this exercise, I wrote a few practical tests for JavaScript functions using the [Jest](https://jestjs.io/) library. I made sure to follow the [AAA pattern](https://github.com/goldbergyoni/javascript-testing-best-practices#-%EF%B8%8F-12-structure-tests-by-the-aaa-pattern) to make my tests easier for other developers to read and understand. I also used the TDD approach in practice.

### Instructions
- Created a new GitHub repository for this exercise.
#### Task 1
- Wrote a function stringLength(string) that takes any string as an argument and returns its characters count.
- Then, wrote a test for this function.
- Next, I expanded my function to make it check if the string is at least 1 character long and not longer than 10 characters. 
- Threw errors if those conditions are not met.
- Added tests for the new functionality.
#### Task 2
- Wrote a function reverseString(string) function. It takes a string as an argument and returns it reversed.
- Wrote two tests for this function.
#### Task 3
In this task, wrote several tests for each tested function. I could write all of my tests directly at the top level, but, rather I grouped related tests so their output is more readable. Jest has the describe() method just for that. Read about it [here](https://jestjs.io/docs/api#describename-fn) and applied it in my tests for this task:

- Wrote a simple calculator class, which will has 4 methods: add, subtract, divide, and multiply.
- Wrote 4 or more tests for each of the calculator methods.
- Group tests for each method using describe() method.
#### Task 4
In this task I did things differently:

- Started by writing a test for a capitalize(string) function. My test made sure that this function takes a string as an argument and returns that string with the first character capitalized.
- Ran your test - it failed because I don’t have the capitalize(string) function implemented yet.
- Then, I made my tests green by implementing the capitalize(string) function. Thought about the minimum amount of code necessary to pass this test and wrote it.
