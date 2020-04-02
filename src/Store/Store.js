import React, { useReducer, createContext } from "react";
import { SL, EF, EL } from "../tools/localStorage"; // Only names
import { LSAdd, LSGet } from "../tools/localStorage"; // Functions

const CTX = createContext();

export { CTX };

/**
 * @description This is the reduces of the store
 * @param {Object} state State of the app
 * @param {String} action String the dispatch
 */
function reducer(state, action) {
  const { type, payload } = action;
  switch (type) {
    case "TOGGLE_MODAL":
      return {
        ...state,
        modal: payload
      };
    //******************************* */
    //*         SHOPPING LIST         */
    //******************************* */
    case "UPDATE_PRODUCT_LIST":
      LSAdd(SL, payload);
      return {
        ...state,
        productList: payload
      };
    case "SELECTED_ITEM":
      return {
        ...state,
        selectedItemId: payload
      };
    //******************************* */
    //*           EXPENSES            */
    //******************************* */
    case "EXPENSE_FORM":
      LSAdd(EF, payload);
      return {
        ...state,
        expensesForm: payload
      };

    case "EXPENSES_LIST":
      LSAdd(EL, payload);
      return {
        ...state,
        expensesList: payload
      };
    case "EDIT_EXPENSE":
      return {
        ...state,
        editExpense: payload
      };
    default:
      return Error("reducer error");
  }
}

/**
 * @description This is the initial state on our app
 */
const initialState = {
  // global
  modal: false,
  selectedItemId: false,

  // shopping
  productList: LSGet(SL) ? LSGet(SL) : [],

  // Expenses
  expensesForm: LSGet(EF) ? LSGet(EF) : false,
  expensesList: LSGet(EL) ? LSGet(EL) : [],
  editExpense: false
};

export default function Store(props) {
  const stateHook = useReducer(reducer, initialState);
  return <CTX.Provider value={stateHook}>{props.children}</CTX.Provider>;
}
