### **ES6 Basics**
This project covers tasks that introduce key concepts of ECMAScript 2015 (ES6).

### Tasks Overview

#### **0. Const or Let?**
File: `0-constants.js`

In this task, modify the following code:

- Replace `var` with `const` for variable declarations in `taskFirst`.
- Use `let` for variable declarations in `taskNext`.

Given code:

```javascript
export function taskFirst() {
  var task = 'I prefer const when I can.';
  return task;
}

export function getLast() {
  return ' is okay';
}

export function taskNext() {
  var combination = 'But sometimes let';
  combination += getLast();
  return combination;
}
```

---

#### **1. Block Scope**
File: `1-block-scoped.js`

You need to adjust the variables within `taskBlock` so that they are scoped to the block and won't be overwritten. Use block-scoped variables (`let` or `const`) to ensure proper scoping inside the conditional block.

Original code:

```javascript
export default function taskBlock(trueOrFalse) {
  var task = false;
  var task2 = true;

  if (trueOrFalse) {
    var task = true;
    var task2 = false;
  }

  return [task, task2];
}
```

---

#### **2. Arrow Functions**
File: `2-arrow.js`

Transform the traditional function inside `getNeighborhoodsList` into an arrow function. The original function looks like this:

```javascript
export default function getNeighborhoodsList() {
  this.sanFranciscoNeighborhoods = ['SOMA', 'Union Square'];

  const self = this;
  this.addNeighborhood = function add(newNeighborhood) {
    self.sanFranciscoNeighborhoods.push(newNeighborhood);
    return self.sanFranciscoNeighborhoods;
  };
}
```

---

#### **3. Default Parameters**
File: `3-default-parameter.js`

Simplify the internals of `getSumOfHoods` to a single line by using default parameters.

Original code:

```javascript
export default function getSumOfHoods(initialNumber, expansion1989, expansion2019) {
  if (expansion1989 === undefined) {
    expansion1989 = 89;
  }
  if (expansion2019 === undefined) {
    expansion2019 = 19;
  }
  return initialNumber + expansion1989 + expansion2019;
}
```

---

#### **4. Rest Parameter Syntax**
File: `4-rest-parameter.js`

Refactor `returnHowManyArguments` to utilize the rest parameter syntax and return the total number of arguments.

Original code:

```javascript
export default function returnHowManyArguments() {}
```

---

#### **5. Spread Operator**
File: `5-spread-operator.js`

Use the spread operator to concatenate two arrays and the characters from a string. The entire function body should be a single line.

Original code:

```javascript
export default function concatArrays(array1, array2, string) {}
```

---

#### **6. Template Literals**
File: `6-string-interpolation.js`

Rewrite the return statement of `getSanFranciscoDescription` using template literals for easier variable substitution.

Original code:

```javascript
export default function getSanFranciscoDescription() {
  const year = 2017;
  const budget = {
    income: '$119,868',
    gdp: '$154.2 billion',
    capita: '$178,479',
  };

  return 'As of ' + year + ', it was the seventh-highest income county in the United States' +
         ', with a per capita personal income of ' + budget.income + '. As of 2015, San Francisco' +
         ' proper had a GDP of ' + budget.gdp + ', and a GDP per capita of ' + budget.capita + '.';
}
```

---

#### **7. Shorthand Property Names**
File: `7-getBudgetObject.js`

Simplify the budget object within `getBudgetObject` by using shorthand property names.

Original code:

```javascript
export default function getBudgetObject(income, gdp, capita) {
  const budget = {
    income: income,
    gdp: gdp,
    capita: capita,
  };
  return budget;
}
```

---

#### **8. Computed Property Names**
File: `8-getBudgetCurrentYear.js`

Refactor `getBudgetForCurrentYear` to use computed property names for dynamic object keys.

Original code:

```javascript
function getCurrentYear() {
  const date = new Date();
  return date.getFullYear();
}

export default function getBudgetForCurrentYear(income, gdp, capita) {
  const budget = {};

  budget[`income-${getCurrentYear()}`] = income;
  budget[`gdp-${getCurrentYear()}`] = gdp;
  budget[`capita-${getCurrentYear()}`] = capita;

  return budget;
}
```

---

#### **9. Method Properties**
File: `9-getFullBudget.js`

Update `getFullBudgetObject` to use ES6 method properties within the `fullBudget` object.

Original code:

```javascript
import getBudgetObject from './7-getBudgetObject.js';

export default function getFullBudgetObject(income, gdp, capita) {
  const budget = getBudgetObject(income, gdp, capita);
  const fullBudget = {
    ...budget,
    getIncomeInDollars: function (income) {
      return `$${income}`;
    },
    getIncomeInEuros: function (income) {
      return `${income} euros`;
    },
  };

  return fullBudget;
}
```

---

#### **10. For...of Loops**
File: `10-loops.js`

Refactor the `appendToEachArrayValue` function to use the ES6 `for...of` loop, replacing `var` with block-scoped variables.

Original code:

```javascript
export default function appendToEachArrayValue(array, appendString) {
  for (var idx in array) {
    var value = array[idx];
    array[idx] = appendString + value;
  }
  return array;
}
```

---

#### **11. Iterators**
File: `11-createEmployeesObject.js`

Write `createEmployeesObject`, which takes a department name and an array of employees, and returns an object where the department name maps to the employee array.

---

#### **12. Report Object**
File: `12-createReportObject.js`

Create `createReportObject`, which returns an object containing `allEmployees` (an object with departments as keys and employee lists as values). It should also have a method `getNumberOfDepartments` to return the number of departments.

---

#### **13. Iterator Object**
File: `100-createIteratorObject.js`

Create an iterator function `createIteratorObject` that takes a report object and returns an iterator for all employees in every department.

---

#### **14. Iterating through Objects**
File: `101-iterateThroughObject.js`

Write `iterateThroughObject`, which takes a report with an iterator and returns a string containing all employee names, separated by a pipe (`|`).

---
