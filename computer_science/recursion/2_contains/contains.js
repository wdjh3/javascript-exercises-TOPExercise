const contains = function (object, searchItem) {
  for (const key in object) {
    const searchedItem = object[key];
    if (
      searchedItem === searchItem ||
      (Number.isNaN(searchedItem) && Number.isNaN(searchItem))
    ) {
      return true;
    } else {
      console.log(searchedItem);
      if (typeof searchedItem === "object") {
        if (!contains(searchedItem, searchItem)) {
          continue;
        } else {
          return true;
        }
      }
    }
  }
  return false;
};

// Do not edit below this line
module.exports = contains;
