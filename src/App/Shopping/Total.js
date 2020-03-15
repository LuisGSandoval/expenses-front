import React, { useContext } from "react";
import { CTX } from "../../state/Store";
import { Card, CardBody, CardText } from "reactstrap";

const Total = () => {
  const [state] = useContext(CTX);

  const getTotal = list => {
    let addedItems = list.filter(it => it.added);

    if (!addedItems || addedItems.length < 1) return 0;
    if (addedItems && addedItems.length === 1)
      return addedItems[0].productPrice;

    console.log("Olle si ", addedItems);

    return addedItems.reduce(function(acc, cur) {
      return acc + cur.productPrice;
    }, 0);
  };
  const { productList } = state;
  return (
    <Card color="dark" className="mb-3">
      <CardBody color="dark" className="text-center">
        <h4 className="text-white">$ {getTotal(productList)}</h4>
        <CardText className="text-muted">Total</CardText>
      </CardBody>
    </Card>
  );
};

export default Total;
