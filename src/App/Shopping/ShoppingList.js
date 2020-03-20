import React, { useContext } from "react";
import { CTX } from "../../Store/Store";
import { Table, Button } from "reactstrap";

const ShoppingList = () => {
  const [state, dispatch] = useContext(CTX);

  const { productList } = state;

  const filteredItem = id => {
    let ind = productList.findIndex(x => x.id === id);
    let elem = productList.filter(x => x.id === id);
    return { ind, elem };
  };

  const enableItem = (id, newStatus) => {
    const { ind, elem } = filteredItem(id);
    elem[0].added = newStatus;
    updateList(productList, ind, elem[0]);
  };

  const increaseQty = id => {
    const { ind, elem } = filteredItem(id);
    elem[0].qty = elem[0].qty + 1;
    updateList(productList, ind, elem[0]);
  };

  const decreaseItem = id => {
    const { ind, elem } = filteredItem(id);

    if (elem[0].qty < 1) return;

    elem[0].qty = elem[0].qty - 1;
    updateList(productList, ind, elem[0]);
  };

  const updateList = (productList, ind, elm) => {
    productList.splice(ind, 1, elm);
    dispatch({ type: "UPDATE_PRODUCT_LIST", payload: productList });
  };

  /* Long press event */

  const moreOPtions = id => {
    dispatch({ type: "SELECTED_ITEM", payload: id });

    dispatch({
      type: "TOGGLE_MODAL",
      payload: { open: true, content: "moreOptions" }
    });
  };

  return (
    <Table dark>
      <tbody>
        {productList &&
          productList.length > 0 &&
          productList.map(item => (
            <tr key={item.id}>
              <td>
                {item.added ? (
                  <Button
                    color="success"
                    onClick={() => enableItem(item.id, false)}
                  >
                    on
                  </Button>
                ) : (
                  <Button
                    outline
                    color="danger"
                    onClick={() => enableItem(item.id, true)}
                  >
                    off
                  </Button>
                )}
              </td>
              <td onDoubleClick={() => moreOPtions(item.id)}>
                <span>$ {(item.qty * item.productPrice).toLocaleString()}</span>
                <br />
                <span className="text-secondary">
                  {item.qty} {item.productDesc} {item.productPrice} unidad
                </span>
              </td>
              <td className="d-flex flex-row-reverse">
                <Button
                  outline
                  color="primary"
                  onClick={() => increaseQty(item.id)}
                >
                  +
                </Button>
                <Button
                  className="mr-3"
                  outline
                  color="primary"
                  onClick={() => decreaseItem(item.id)}
                >
                  -
                </Button>
              </td>
            </tr>
          ))}
      </tbody>
    </Table>
  );
};

export default ShoppingList;
