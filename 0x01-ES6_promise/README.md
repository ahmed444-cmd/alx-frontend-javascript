Here’s a rephrased version of the project description:

---

# Project Title  
**0x01. ES6 Promises**
---

## Requirements

### JavaScript Scripts

- You can use the following editors: `vi`, `vim`, `emacs`, or `Visual Studio Code`.
- All scripts will be run on Ubuntu 20.04 LTS with Node.js (version 14.x).
- Ensure every file ends with a new line.
- The `main.js` files serve as test files for your functions, but you don't need to push them to your repository.
- Your code will be tested using the [Jest Testing Framework](https://jestjs.io/).
- Code will be analyzed using [ESLint](https://eslint.org/) with provided rules.
- Every function should be exported.

---

## Project Overview

This project focuses on learning and working with Promises in JavaScript. You’ll cover:

- What Promises are, how to use them, and why they are useful.
- Methods like `then`, `resolve`, and `catch`.
- Usage of every method in the Promise object.
- How to throw and catch errors.
- The `await` operator and working with `async` functions.

---

## Additional Information

### Node.js Version 14 Installation  
```bash
$ curl -sL https://deb.nodesource.com/setup_14.x | sudo -E bash -
$ sudo apt-get install -y nodejs
```

### Installing Jest, Babel, and ESLint
```bash
$ npm install --save-dev jest
$ npm install --save-dev babel-jest @babel/core @babel/preset-env
$ npm install --save-dev eslint
```

**Once you have the `package.json` file, run `npm install` to install the necessary dependencies. Configuration files like `package.json`, `babel.config.js`, and `.eslintrc.js` can be found in the project directory.**

---

## Task Breakdown

1. **Keep Every Promise You Make**  
   Create a function `getResponseFromAPI()` that returns a Promise.  
   File: `0-promise.js`.

2. **Don't Make a Promise You Can't Keep**  
   Using the given function prototype, return a promise based on a boolean parameter.  
   File: `1-promise.js`.

3. **Catch Me If You Can!**  
   Append three handlers to the provided function and resolve the Promise.  
   File: `2-then.js`.

4. **Handle Multiple Promises**  
   Import `uploadPhoto` and `createUser` from `utils.js`, and use the prototype to resolve both promises, logging the result as `body firstName lastName`.  
   File: `3-all.js`.

5. **Simple Promise**  
   Return a resolved promise containing a specific object using the provided prototype.  
   File: `4-user-promise.js`.

6. **Reject Promises**  
   Write and export a function `uploadPhoto` that accepts a `fileName` (string) as a parameter.  
   File: `5-photo-reject.js`.

7. **Handle Multiple Promises Together**  
   Import `signUpUser` from `4-user-promise.js` and `uploadPhoto` from `5-photo-reject.js`. Write a function `handleProfileSignup` that accepts `firstName`, `lastName`, and `fileName` as arguments. The function should call both of the other functions, and when the promises settle, it should return an array in the specified format.  
   File: `6-final-user.js`.

8. **Load Balancer**  
   Write a function `loadBalancer` that accepts two promises: `chinaDownload` and `USDownload`.  
   File: `7-load_balancer.js`.

9. **Throw Errors Using Try/Catch**  
   Write a function `divideFunction` that takes `numerator` and `denominator` as arguments and handles division errors.  
   File: `8-try.js`.

10. **Throw an Error**  
    Write a function `guardrail` that accepts a `mathFunction` as an argument and handles errors.  
    File: `9-try.js`.

11. **Await and Async**  
    Import `uploadPhoto` and `createUser` from `utils.js`. Write an async function `asyncUploadUser` that calls both functions and returns an object in the specified format.  
    File: `100-await.js`.
