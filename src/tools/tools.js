/**
 * This function recieves an array and returns an array of arrays grupoed by the key  recieved
 * @param {*} name
 * @param {*} arr
 */
const createListBy = (property, collection) => {
  var i = 0,
    val,
    index,
    values = [],
    result = [];

  for (; i < collection.length; i++) {
    val = collection[i][property];
    index = values.indexOf(val);
    if (index > -1) result[index].push(collection[i]);
    else {
      values.push(val);
      result.push([collection[i]]);
    }
  }
  return result;
};

export { createListBy };
