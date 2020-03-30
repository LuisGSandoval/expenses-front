import React, { useContext } from "react";
import { CTX } from "../../Store/Store";
import {
  ListGroup,
  ListGroupItem,
  ListGroupItemHeading,
  ListGroupItemText
} from "reactstrap";
import Navbar from "../../Components/Navbar";
import AppModal from "../../Components/AppModal";

import { format } from "date-fns";
import { GiReceiveMoney, GiPayMoney, GiOpenChest } from "react-icons/gi";

const ExpenseList = () => {
  const [state, dispatch] = useContext(CTX);

  const { expensesList } = state;

  const moreOPtions = id => {
    dispatch({ type: "SELECTED_ITEM", payload: id });
    dispatch({
      type: "TOGGLE_MODAL",
      payload: { open: true, content: "moreOptions" }
    });
  };

  return (
    <>
      <Navbar />
      <AppModal />
      <div className="container mb-5">
        <ListGroup>
          {expensesList &&
            expensesList.length > 0 &&
            expensesList.map(item => (
              <ListGroupItem
                key={item.id}
                className=" bg-light text-center text-secondary  "
              >
                <div className="row" onDoubleClick={() => moreOPtions(item.id)}>
                  <div className="col-5">
                    <ListGroupItemText>
                      {item.title.toString().toUpperCase()}
                      <br /> {item.description.toString().toLowerCase()}
                    </ListGroupItemText>
                  </div>

                  <div className="col-5">
                    <ListGroupItemHeading
                      className={`text-${item.in ? "success" : "danger"}`}
                    >
                      $ {parseInt(item.qty).toLocaleString()}
                    </ListGroupItemHeading>
                    <i>
                      {format(new Date(item.date), "yyyy-MMM-dd")
                        .toString()
                        .toLowerCase()}
                    </i>
                  </div>
                  <div className="col-2">
                    {item.payed && item.in && (
                      <>
                        <GiReceiveMoney className="text-success h2" /> <br />
                        Pagado
                      </>
                    )}
                    {item.payed && !item.in && (
                      <>
                        <GiPayMoney className="text-success h2" /> <br /> Pagado
                      </>
                    )}
                    {!item.payed && (
                      <>
                        <GiOpenChest className="text-secondary h2" /> <br /> Sin
                        pagar
                      </>
                    )}
                  </div>
                </div>
              </ListGroupItem>
            ))}
        </ListGroup>
      </div>
    </>
  );
};

export default ExpenseList;
