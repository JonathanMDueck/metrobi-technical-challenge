function getMaxValue(carotTypes, capacity) {
  let bag = [];

  while (getBagAvailableWeight(bag, capacity) > 0) {
    console.log(capacity);
    const type = getBestValueFittingType(
      carotTypes,
      getBagAvailableWeight(bag, capacity)
    );
    console.log(type);
    if (type) {
      bag = fillBagWithType(bag, type);
      filterCarotType(carotTypes, type);
    } else {
      capacity = -1;
    }
  }

  return getBagPrice(bag);

  function getBagPrice(bag) {
    let price = 0;
    bag.forEach((item) => (price += item.price));
    return price;
  }

  function filterCarotType(carotTypes, type) {
    return carotTypes.filter(
      (t) => t.price === type.price && t.weight === type.weight
    );
  }

  function getBagAvailableWeight(bag, capacity) {
    let weight = 0;
    bag.forEach((item) => {
      weight += item.weight;
    });
    return capacity - weight;
  }

  function fillBagWithType(bag, type) {
    while (getBagAvailableWeight(bag, capacity) >= type.weight) {
      bag.push(type);
    }
    return bag;
  }

  function getBestValueFittingType(carotTypes, capacity) {
    let bestFitInWeight = 0;
    let bestFittingType;

    carotTypes.forEach((type) => {
      if (Math.floor(capacity / type.weight) * type.price > bestFitInWeight) {
        bestFittingType = type;
      }
    });
    return bestFittingType;
  }
}

const carrotTypes = [
  { weight: 5, price: 100 },
  { weight: 7, price: 150 },
  { weight: 3, price: 70 },
];
// capacity = 36 //kg

console.log(getMaxValue(carrotTypes, 10));
