# podium-sort

Sorts an array of numbers putting the highest numbers in the middle.

## Installation

    npm install --save podium-sort

## Usage

```javascript
const podiumSort = require('podium-sort');

const input = [1, 2, 3, 4, 5];
const output = podiumSort(input);

expect(output).toEqual([2, 4, 5, 3, 1]);
```

Providing a mapper:

```javascript
const podiumSort = require('podium-sort');

const input = [
  { value: 1 }, 
  { value: 2 }, 
  { value: 3 }, 
  { value: 4 }, 
  { value: 5 }
];
const output = podiumSort(input, element => element.value);

expect(output).toEqual([
  { value: 2 }, 
  { value: 4 }, 
  { value: 5 }, 
  { value: 3 }, 
  { value: 1 }
]);
```

