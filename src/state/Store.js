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

    default:
      return Error("reducer error");
  }
}

// Initial state

let provProd = window.localStorage.getItem("shoppingListProducts");
const initialState = {
  productList: provProd ? JSON.parse(provProd) : []
};

export default function Store(props) {
  const stateHook = useReducer(reducer, initialState);
  return <CTX.Provider value={stateHook}>{props.children}</CTX.Provider>;
}
