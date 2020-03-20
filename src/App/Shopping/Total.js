import React, { useContext } from "react";
import { CTX } from "../../Store/Store";
import { Card, CardBody, CardText } from "reactstrap";

const Total = () => {
  const [state] = useContext(CTX);

  const getTotal = list => {
    let addedItems = list.filter(it => it.added);

    if (!addedItems || addedItems.length < 1) return 0;

    return addedItems.reduce(function(acc, cur) {
      return acc + cur.productPrice * cur.qty;
    }, 0);
  };
  const { productList } = state;
  return (
    <Card color="dark" className="mb-3">
      <CardBody color="dark" className="text-center">
        <h4 className="text-white">
          $ {getTotal(productList).toLocaleString()}
        </h4>
        <CardText className="text-muted">Total</CardText>
      </CardBody>
    </Card>
  );
};

export default Total;
