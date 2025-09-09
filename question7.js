function getMaxValue(carotTypes, capacity) {
  let bag = [];

  while (getBagAvailableWeight(bag, capacity) > 0) {
    const type = getBestValueFittingType(
      carotTypes,

      getBagAvailableWeight(bag, capacity)
    );

    if (type) {
      bag = fillBagWithType(bag, type);

      filterCarotType(carotTypes, type);
    } else {
      capacity = -1;
    }
  }

  return `The maximum value that the bag can hold is ${getBagPrice(bag)}`;

  function getBagPrice(bag) {
    let price = 0;

    bag.forEach((item) => (price += item.price));

    return price;
  }

  function filterCarotType(carotTypes, type) {
    return carotTypes.filter((t) => t.price === type.price && t.kg === type.kg);
  }

  function getBagAvailableWeight(bag, capacity) {
    let weight = 0;

    bag.forEach((item) => {
      weight += item.kg;
    });

    return capacity - weight;
  }

  function fillBagWithType(bag, type) {
    while (getBagAvailableWeight(bag, capacity) >= type.kg) {
      bag.push(type);
    }

    return bag;
  }

  function getBestValueFittingType(carotTypes, capacity) {
    let bestFitInWeight = 0;

    let bestFittingType;

    carotTypes.forEach((type) => {
      if (Math.floor(capacity / type.kg) * type.price > bestFitInWeight) {
        bestFittingType = type;
      }
    });

    return bestFittingType;
  }
}

carrotTypes = [
  { kg: 3, price: 40 }, // 13.33 per kg
  { kg: 4, price: 50 }, // 12.5 per kg
  { kg: 5, price: 65 }, // 13 per kg
];
capacity = 10;

console.log(getMaxValue(carrotTypes, capacity));
