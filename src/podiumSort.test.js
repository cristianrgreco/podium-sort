const podiumSort = require("./podiumSort");

test("should return empty list", () => {
  expect(podiumSort([])).toEqual([]);
});

test("should sort highest score in middle #1", () => {
  const input = [1, 2];
  const output = [1, 2];

  expect(podiumSort(input)).toEqual(output);
});

test("should sort highest score in middle #2", () => {
  const input = [1, 2, 3];
  const output = [2, 3, 1];

  expect(podiumSort(input)).toEqual(output);
});

test("should sort highest score in middle #3", () => {
  const input = [1, 2, 3, 4];
  const output = [1, 3, 4, 2];

  expect(podiumSort(input)).toEqual(output);
});

test("should sort highest score in middle #4", () => {
  const input = [1, 2, 3, 4, 5];
  const output = [2, 4, 5, 3, 1];

  expect(podiumSort(input)).toEqual(output);
});

test("should sort given a mapper", () => {
  const input = [{ value: 1 }, { value: 2 }, { value: 3 }, { value: 4 }, { value: 5 }];
  const output = [{ value: 2 }, { value: 4 }, { value: 5 }, { value: 3 }, { value: 1 }];

  expect(podiumSort(input, (x) => x.value)).toEqual(output);
});
