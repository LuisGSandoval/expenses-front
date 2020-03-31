import React, { useContext, useEffect, useState } from "react";
import { CTX } from "../../Store/Store";
import {
  ListGroup,
  ListGroupItem,
  ListGroupItemHeading,
  ListGroupItemText
} from "reactstrap";
import Navbar from "../../Components/Navbar";
import AppModal from "../../Components/AppModal";

import { turnDayDateToZero } from "../../tools/monthlyList";

import { format } from "date-fns";
import { GiReceiveMoney, GiPayMoney, GiOpenChest } from "react-icons/gi";

const ExpenseList = props => {
  const [state, dispatch] = useContext(CTX);
  const [list, setList] = useState([]);

  const { expensesList } = state;

  useEffect(() => {
    let formatedDate = turnDayDateToZero(expensesList);
    let selectedExpenses = formatedDate.filter(
      ite => ite.date === props.match.params.date
    );
    setList(selectedExpenses);

    return () => {
      setList([]);
    };
  }, [expensesList, props.match.params.date]);

  const moreOPtions = id => {
    dispatch({ type: "SELECTED_ITEM", payload: id });
    dispatch({
      type: "TOGGLE_MODAL",
      payload: { open: true, content: "moreOptions" }
    });
  };

  return (
    <div className="bg-dark pb-5">
      <Navbar />
      <AppModal />
      <div className="container mb-5">
        <h4 className="text-white mt-3">
          {format(new Date(props.match.params.date), "yyyy-MMM-dd")}
        </h4>
        <ListGroup>
          {list.map(item => (
            <ListGroupItem
              key={item.id}
              className="bg-light text-center text-secondary"
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
                    className={`text-${
                      item.income === "1" ? "success" : "danger"
                    }`}
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
    </div>
  );
};

export default ExpenseList;
