import React, { useContext } from "react";
import { CTX } from "../Store/Store";
import { Button } from "reactstrap";

const ItemOptions = () => {
  const [state, dispatch] = useContext(CTX);

  let { selectedItemId: id, productList, expensesList } = state;

  const deleteItem = () => {
    // Shopping list
    productList = productList.filter(x => x.id !== id);
    dispatch({ type: "UPDATE_PRODUCT_LIST", payload: productList });

    // Expenses
    expensesList = expensesList.filter(x => x.id !== id);
    dispatch({ type: "EXPENSES_LIST", payload: expensesList });

    dispatch({
      type: "TOGGLE_MODAL",
      payload: { open: false, content: "" }
    });
  };

  const toglePayed = () => {
    let filtered = expensesList.filter(x => x.id === id);
    filtered[0].payed = !filtered[0].payed;
    let others = expensesList.filter(x => x.id !== id);
    dispatch({ type: "EXPENSES_LIST", payload: [...others, ...filtered] });
  };

  const editItem = () => {
    dispatch({
      type: "TOGGLE_MODAL",
      payload: { open: true, content: "addExpense" }
    });
    dispatch({
      type: "EDIT_EXPENSE",
      payload: true
    });
  };

  return (
    <div>
      <Button outline color="danger" className="w-100" onClick={deleteItem}>
        Borrar
      </Button>

      {window.location.pathname.includes("expenses") && (
        <>
          <Button
            outline
            color="success"
            className="w-100"
            onClick={toglePayed}
          >
            cambiar estado de pagado
          </Button>
          <Button outline color="info" className="w-100" onClick={editItem}>
            Modificar
          </Button>
        </>
      )}
    </div>
  );
};

export default ItemOptions;
