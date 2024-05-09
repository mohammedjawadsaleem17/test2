Please Develop a Web Application in Node.js and React.js that accepts an array of values,

The Application should do the following for each value in the array;

1.if the value is a multiple of 3 then output the word fizz;
2.if the value is a multiple of 5 then output the word buzz;
3.if the value is divisible by both 3 and 5 then output the word fizzBuzz.
4.At the end of the run the program should display each division that was performed

test case:
1 - Divided 1 by 3
3 - Fizz
5 - Buzz
<empty> - Invalid item
15 - FizzBuzz
A - Invalid Item
23 - Divided 23 by 3
     Divided 23 by 5

Demonstrate Single Responsiblity Principle
Seperation of Concerns
Test Automations 


/*
Backend (Node.js):

We'll create an Express server to handle the API requests.
We'll define a route to accept the array of values and process them.
We'll create a separate module to handle the fizzbuzz logic, following the Single Responsibility Principle.
We'll write unit tests for the fizzbuzz logic module using a testing framework like Jest or Mocha.


Frontend (React.js):

We'll create a React application to interact with the backend API.
We'll have a form component to accept the array of values from the user.
We'll send the array to the backend API and display the results.
We'll create a separate component to display the results in a user-friendly way.
We'll write unit tests for the React components using a testing framework like Jest or React Testing Library.

*/