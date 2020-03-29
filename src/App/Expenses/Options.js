import React, { useContext } from "react";
import { Button } from "reactstrap";
import { CTX } from "../../Store/Store";
import { uuid } from "uuidv4";

const Options = () => {
  const [, dispatch] = useContext(CTX);

  const toogleModal = () => {
    dispatch({
      type: "TOGGLE_MODAL",
      payload: { open: true, content: "addExpense" }
    });
  };

  const addExpense = type => {
    dispatch({
      type: "EXPENSE_FORM",
      payload: {
        id: uuid(),
        in: type,
        description: "",
        title: "",
        qty: "",
        date: "",
        payed: false,
        type: "expense"
      }
    });

    toogleModal();
  };

  return (
    <div className="container text-center my-5">
      <h3>Agregar</h3>

      <div className="d-flex justify-content-around mt-5">
        <Button color="success" onClick={() => addExpense(true)}>
          Entrada
        </Button>
        <Button color="danger" outline onClick={() => addExpense(false)}>
          Gastos
        </Button>
      </div>
    </div>
  );
};

export default Options;
