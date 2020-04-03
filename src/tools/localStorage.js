const SL = "shoppingListProducts";
const EF = "expensesForm";
const EL = "expensesList";
const GD = "graphicsData";

/**
 * LocalStorage.setItem will be used to sabe data in the locaStorage in the whole app
 * @param {string} name name in which the data will be saved in the localstorage
 * @param { object, array } payload The data to be saved
 */
const LSAdd = (name, payload) =>
  window.localStorage.setItem(name, JSON.stringify(payload));

/**
 * LocalStorage.getItem This function helps us get the localStorage with the name recieved as the key
 * @param {string} name Name of the key in the localStorage
 */
const LSGet = name => JSON.parse(window.localStorage.getItem(name));

export { SL, EF, EL, GD, LSAdd, LSGet };
