import React, { useState, useContext } from "react";
import { Table } from "reactstrap";
import { CTX } from "../../Store/Store";
import { InputGroup, InputGroupAddon, Input, Button } from "reactstrap";
import { uuid } from "uuidv4";

const ListForm = () => {
  const [state, dispatch] = useContext(CTX);
  const [itemForm, setItemForm] = useState({ productName: "", price: "" });

  const handleChange = e => {
    const { name, value } = e.target;
    setItemForm({ ...itemForm, [name]: value });
  };

  const { productName, price } = itemForm;

  const addItem = () => {
    if (productName === "" || price === "") return;

    const productInfo = {
      id: uuid(),
      added: true,
      productDesc: productName,
      productPrice: parseInt(price),
      qty: 1
    };

    let productList = state.productList;
    productList.unshift(productInfo);

    dispatch({ type: "UPDATE_PRODUCT_LIST", payload: productList });
    setItemForm({ productName: "", price: "" });
  };

  return (
    <div className="mb-4">
      <Table dark className="mb-1">
        <thead>
          <tr>
            <th>
              <Input
                type="text"
                name="productName"
                placeholder="Producto"
                value={productName}
                onChange={handleChange}
              />
            </th>
            <th>
              <InputGroup>
                <InputGroupAddon addonType="prepend">$</InputGroupAddon>
                <Input
                  placeholder="Precio unidad"
                  min={0}
                  type="number"
                  step="1"
                  name="price"
                  value={price}
                  onChange={handleChange}
                />
              </InputGroup>
            </th>
          </tr>
        </thead>
      </Table>
      {productName !== "" && price !== 0 && price !== "" && (
        <Button color="info" className="w-100" onClick={addItem}>
          Guardar
        </Button>
      )}
    </div>
  );
};

export default ListForm;
