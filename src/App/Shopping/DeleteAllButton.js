import React, { useContext } from "react";
import { Button } from "reactstrap";
import { CTX } from "../../Store/Store";

const DeleteAllButton = () => {
  const [state, dispatch] = useContext(CTX);

  const openDeleteAllConfirmation = () => {
    dispatch({
      type: "TOGGLE_MODAL",
      payload: { open: true, content: "deleteAllConfirmation" }
    });
  };

  return (
    <>
      {state.productList && state.productList.length > 0 && (
        <Button
          color="danger"
          outline
          className="w-100"
          onClick={openDeleteAllConfirmation}
        >
          Borrar todo
        </Button>
      )}
    </>
  );
};

export default DeleteAllButton;
