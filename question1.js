function findDuplicates(items) {
  var duplicates = [];

  items.forEach((item, index) => {
    const tempItems = items.slice(index + 1, items.length);

    if (
      tempItems.find((i) => i === item) &&
      duplicates.find((i) => i === item) === undefined
    ) {
      duplicates.push(item);
    }
  });
  return duplicates;
}

console.log(findDuplicates([1, 2, 3, 4, 4, 5, 2, 2, 6, 7, 8, 5, 0, 9]));
