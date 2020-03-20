import React, { useReducer } from "react";

const CTX = React.createContext();

export { CTX };

// Reducer

function reducer(state, action) {
  switch (action.type) {
    //******************************* */
    //*         SHOPPING LIST         */
    //******************************* */
    case "UPDATE_PRODUCT_LIST":
      window.localStorage.setItem(
        "shoppingListProducts",
        JSON.stringify(action.payload)
      );
      return {
        ...state,
        productList: action.payload
      };
    case "TOGGLE_MODAL":
      return {
        ...state,
        modal: action.payload
      };
    case "SELECTED_ITEM":
      return {
        ...state,
        selectedItemId: action.payload
      };

    default:
      return Error("reducer error");
  }
}

// Initial state

let provProd = window.localStorage.getItem("shoppingListProducts");
const initialState = {
  productList: provProd ? JSON.parse(provProd) : [],
  modal: false,
  selectedItemId: false
};

export default function Store(props) {
  const stateHook = useReducer(reducer, initialState);
  return <CTX.Provider value={stateHook}>{props.children}</CTX.Provider>;
}
