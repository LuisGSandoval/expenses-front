import React, { useContext } from "react";
import { CTX } from "../../Store/Store";
import { Card, Button } from "reactstrap";

const DeleteAllConfirmation = () => {
  const [, dispatch] = useContext(CTX);

  const deleteAllShoppingData = () => {
    dispatch({ type: "UPDATE_PRODUCT_LIST", payload: [] });
    window.localStorage.removeItem("shoppingListProducts");
    dispatch({
      type: "TOGGLE_MODAL",
      payload: { open: false, content: "" }
    });
  };

  const closeModal = () => {
    dispatch({
      type: "TOGGLE_MODAL",
      payload: { open: false, content: "" }
    });
  };

  return (
    <div className="row">
      <Card body outline color="danger">
        <h1 className="text-center  text-muted">Cuidado</h1>
        <span className="text-center  text-muted">
          ¿Está segur@ de borrar todo?
        </span>

        <div className="d-flex justify-content-around mt-5">
          <Button onClick={deleteAllShoppingData}>Borrar</Button>

          <Button color="danger" onClick={closeModal}>
            Cancelar
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default DeleteAllConfirmation;
