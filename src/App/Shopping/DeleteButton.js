import React, { useContext } from "react";
import { Button } from "reactstrap";
import { CTX } from "../../state/Store";

const DeleteButton = () => {
  const [state, dispatch] = useContext(CTX);

  const deleteData = () => {
    dispatch({ type: "UPDATE_PRODUCT_LIST", payload: [] });
    window.localStorage.removeItem("shoppingListProducts");
  };

  return (
    <>
      {state.productList && state.productList.length > 0 && (
        <Button color="danger" outline className="w-100" onClick={deleteData}>
          borrar todo
        </Button>
      )}
    </>
  );
};

export default DeleteButton;
