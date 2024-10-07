### ES6 Data Manipulation Overview

---

### Resources

You can explore the following topics to deepen your understanding:

- [Array](https://alx-intranet.hbtn.io/rltoken/bcXqK1IaIHtrZ45sv0RxsQ)
- [Typed Array](https://alx-intranet.hbtn.io/rltoken/BQ5bjKk8Q2YrpwVl0gZpXQ)
- [Set Data Structure](https://alx-intranet.hbtn.io/rltoken/Ch8vq39y9QnlTMr8CymgEg)
- [Map Data Structure](https://alx-intranet.hbtn.io/rltoken/W29MV3f8Ii4HmeJSALNIpw)
- [WeakMap](https://alx-intranet.hbtn.io/rltoken/pSetFVFeIR660GPE0flPdg)

---

### Key Learning Objectives

By the end of this project, you should confidently be able to explain the following without external resources:

- Usage of `map`, `filter`, and `reduce` on arrays
- Working with Typed Arrays
- Understanding and utilizing Set, Map, and WeakMap data structures

---

### Project Requirements

- Run your code on Ubuntu 18.04 LTS with NodeJS version 12.11.x
- Use editors such as `vi`, `vim`, `emacs`, or Visual Studio Code
- Files should end with a new line
- A `README.md` file is mandatory at the project root
- Code must have the `.js` extension
- Your code will be tested using Jest (`npm run test`)
- All code must pass ESLint checks
- All functions should be exported, and the entire project can be verified with `npm run full-test`

---

### Setup Instructions

#### Install NodeJS 12.11.x

In your home directory, execute the following commands:

```bash
curl -sL https://deb.nodesource.com/setup_12.x -o nodesource_setup.sh
sudo bash nodesource_setup.sh
sudo apt install nodejs -y
```

Check the versions:

```bash
$ nodejs -v
v12.11.1
$ npm -v
6.11.3
```

#### Install Jest, Babel, and ESLint

In your project directory, run the following:

- Install Jest: `npm install --save-dev jest`
- Install Babel: `npm install --save-dev babel-jest @babel/core @babel/preset-env`
- Install ESLint: `npm install --save-dev eslint`

---

### Configuration Files

You will need the following files for your project:

- `package.json`
- `babel.config.js`
- `.eslintrc.js`

After setting up, don't forget to run `npm install` to install dependencies from `package.json`.

---

### Tasks Overview

#### 0. Basic List of Objects

Create a function called `getListStudents` that returns an array of objects. Each object should have the following properties: `id` (Number), `firstName` (String), and `location` (String). The array should contain:

- Guillaume (id: 1, location: San Francisco)
- James (id: 2, location: Columbia)
- Serena (id: 5, location: San Francisco)

#### 1. More Mapping

Create a function `getListStudentIds` that returns an array of ids from a list of student objects. If the argument is not an array, return an empty array. Make sure to use the `map` method.

#### 2. Filter Students by Location

The function `getStudentsByLocation` should return a filtered list of students based on their location. Use `filter` to implement this.

#### 3. Sum of Student IDs

Using `reduce`, implement a function `getStudentIdsSum` that returns the sum of student ids from the provided list.

#### 4. Update Student Grades by City

Write a function `updateStudentGradeByCity` that updates the grades of students in a particular city. If a student’s grade is not provided, it should default to `N/A`. Use `filter` and `map`.

#### 5. Typed Arrays

The `createInt8TypedArray` function should return a new `ArrayBuffer` with an `Int8` value at a specific position. If the position is out of range, throw the error `Position outside range`.

#### 6. Set Data Structure

Implement `setFromArray` that returns a `Set` from an array.

#### 7. More Set Data Structure

Write `hasValuesFromArray` that returns a boolean indicating whether all elements in an array are found within a set.

#### 8. Clean Set

The `cleanSet` function should return a string of all the values from a set that start with a specific string, concatenated with a hyphen (`-`).

#### 9. Map Data Structure

Create a function `groceriesList` that returns a map with grocery items and their quantities.

#### 10. Update Unique Items in Map

Write `updateUniqueItems` to update the quantities of items in the map that have a quantity of 1 to 100.

#### 11. WeakMap and QueryAPI

Export an instance of `WeakMap` and a function `queryAPI` that tracks the number of times an API endpoint is queried. If the endpoint is called 5 or more times, throw an error `Endpoint load is high`.

---

This concludes the summary of the tasks. Be sure to check the repository `alx-backend-javascript` for complete code and updates.
