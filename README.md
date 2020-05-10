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

