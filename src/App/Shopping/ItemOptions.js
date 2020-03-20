import React, { useContext } from "react";
import { CTX } from "../../Store/Store";
import { Button } from "reactstrap";

const ItemOptions = () => {
  const [state, dispatch] = useContext(CTX);

  let { selectedItemId: id, productList } = state;

  const deleteItem = () => {
    productList = productList.filter(x => x.id !== id);
    dispatch({ type: "UPDATE_PRODUCT_LIST", payload: productList });
    dispatch({
      type: "TOGGLE_MODAL",
      payload: { open: false, content: "" }
    });
  };

  return (
    <div>
      <Button outline color="danger" className="w-100" onClick={deleteItem}>
        Borrar
      </Button>
    </div>
  );
};

export default ItemOptions;
