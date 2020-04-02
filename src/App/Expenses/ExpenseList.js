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

import { format } from "date-fns";
import { GiReceiveMoney, GiPayMoney, GiOpenChest } from "react-icons/gi";

const ExpenseList = props => {
  const [state, dispatch] = useContext(CTX);
  const [list, setList] = useState([]);

  const { expensesList, editExpense, selectedItemId } = state;

  const startComponent = () => {
    var d = new Date(parseInt(props.match.params.date)),
      y = d.getFullYear(),
      m = d.getMonth();

    var firstDate = new Date(y, m, 1).getTime();
    var lastDate = new Date(y, m + 1, 0).getTime();

    var selectedExpenses = expensesList.filter(
      exp => exp.date >= firstDate && exp.date <= lastDate
    );

    setList(selectedExpenses);
  };

  useEffect(() => {
    startComponent();
    return () => {
      setList([]);
    };
    // eslint-disable-next-line
  }, [expensesList, editExpense, selectedItemId]);

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
          {format(parseInt(props.match.params.date), "MMM-yyyy")}
        </h4>
        <ListGroup>
          {list
            .sort((a, b) => a.income - b.income)
            .map(item => (
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
                    <i>{format(new Date(item.date), "yyyy-MMM-dd")}</i>
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
