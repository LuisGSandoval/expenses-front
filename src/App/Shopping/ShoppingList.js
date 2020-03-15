import React, { useContext } from "react";
import { CTX } from "../../state/Store";
import { Table, Button } from "reactstrap";

const ShoppingList = () => {
  const [state, dispatch] = useContext(CTX);

  const { productList } = state;

  const enableItem = (id, newStatus) => {
    console.log(id, newStatus);

    let ind = productList.findIndex(x => x.id === id);
    let elem = productList.filter(x => x.id === id);

    elem[0].added = newStatus;

    productList.splice(ind, 1, elem[0]);

    dispatch({ type: "UPDATE_PRODUCT_LIST", payload: productList });
  };

  return (
    <Table dark>
      <tbody>
        {productList &&
          productList.length > 0 &&
          productList.map(item => (
            <tr key={item.id}>
              <th>
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
              </th>
              <td>
                <span>$ {item.productPrice}</span>
                <br />
                <span className="text-secondary">{item.productDesc}</span>
              </td>
            </tr>
          ))}
      </tbody>
    </Table>
  );
};

export default ShoppingList;
