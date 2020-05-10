# podium-sort

> Sorts an array of numbers putting the highest numbers in the middle.

[![Build Status](https://travis-ci.org/cristianrgreco/podium-sort.svg?branch=master)](https://travis-ci.org/cristianrgreco/podium-sort)
[![npm version](https://badge.fury.io/js/podium-sort.svg)](https://www.npmjs.com/package/podium-sort)
[![npm version](https://img.shields.io/npm/dm/podium-sort.svg)](https://www.npmjs.com/package/podium-sort)

## Installation

```bash
npm install --save podium-sort
```

## Usage

```javascript
const podiumSort = require("podium-sort");

const input = [1, 2, 3, 4, 5];
const output = podiumSort(input);

expect(output).toEqual([2, 4, 5, 3, 1]);
```

Providing a mapper:

```javascript
const podiumSort = require("podium-sort");

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

