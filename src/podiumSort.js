const podiumSort = (input, mapper = (x) => x) => {
  const mid = Math.floor(input.length / 2);
  const sortedDesc = [...input].sort((a, b) => mapper(b) - mapper(a));
  const output = new Array(input.length).fill(null);

  for (let i = 0; i < sortedDesc.length; i++) {
    const index = i % 2 === 0 ? mid + (i - Math.floor(i / 2)) : mid - (i - Math.floor(i / 2));
    output[index] = sortedDesc[i];
  }

  return output;
};

module.exports = podiumSort
