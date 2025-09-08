async function printItems(items) {
  items.forEach((item, index) => {
    const promise = new Promise((resolve) => {
      setTimeout(() => {
        resolve(`Resolving item ${item} promise after ${index * 1000} seconds`);
      }, index * 1000 * index);
    }).then(() => console.log(item));
  });
}

printItems(["a", "b", "c", "d"]);
