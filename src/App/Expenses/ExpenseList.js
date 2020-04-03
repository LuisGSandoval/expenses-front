import Options from "./Options";
import React, { useContext, useEffect, useState } from "react";
import { CTX } from "../../Store/Store";
import {
  ListGroup,
  ListGroupItem,
  ListGroupItemText,
  UncontrolledTooltip
} from "reactstrap";
import Navbar from "../../Components/Navbar";
import AppModal from "../../Components/AppModal";
import { sum } from "../../tools/tools";
import { format } from "date-fns";
import { GiReceiveMoney, GiPayMoney, GiOpenChest } from "react-icons/gi";
import { GoCalendar } from "react-icons/go";
import { FaRegLightbulb } from "react-icons/fa";

const ExpenseList = props => {
  const [state] = useContext(CTX);
  const [list, setList] = useState([]);

  const { expensesList, editExpense, selectedItemId, modal } = state;

  const startComponent = () => {
    var d = new Date(parseInt(props.match.params.date)),
      y = d.getFullYear(),
      m = d.getMonth();

    var firstDate = new Date(y, m, 1);
    var lastDate = new Date(y, m + 1, 0);

    let lsItms = JSON.parse(window.localStorage.getItem("expensesList"));
    var selectedExpenses = lsItms.filter(
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
  }, [expensesList, editExpense, selectedItemId, modal]);

  return (
    <div className="bg-dark pb-5">
      <Navbar />
      <AppModal />
      <div className="container mb-5">
        <h4 className="text-white mt-3">
          {format(parseInt(props.match.params.date), "MMM-yyyy")}
        </h4>
        <ExpenseRealList list={list.filter(it => it.income === "0")} />

        <ExpenseRealList list={list.filter(it => it.income === "1")} />

        <ExpenseListBottomTotalizer
          title="resultante"
          total={
            sum(
              list.filter(it => it.income === "1"),
              "qty"
            ) -
            sum(
              list.filter(it => it.income === "0"),
              "qty"
            )
          }
        />
      </div>
      <Options />
    </div>
  );
};

export const ExpenseRealList = ({ list }) => {
  const [, dispatch] = useContext(CTX);

  const moreOPtions = id => {
    dispatch({ type: "SELECTED_ITEM", payload: id });
    dispatch({
      type: "TOGGLE_MODAL",
      payload: { open: true, content: "moreOptions" }
    });
  };
  return (
    <div className="mb-3">
      <ListGroup className="p-0">
        {list
          .sort((a, b) => a.payed - b.payed)
          .map(item => (
            <ListGroupItem
              key={item.id}
              className="bg-light text-center text-secondary"
            >
              <div className="row" onDoubleClick={() => moreOPtions(item.id)}>
                <div className="col-1">
                  <GoCalendar
                    className="text-secondary h3"
                    id={`calendar-${item.id}`}
                  />
                  <UncontrolledTooltip
                    placement="bottom"
                    target={`calendar-${item.id}`}
                  >
                    <i>{format(new Date(item.date), "yyyy-MMM-dd")}</i>
                  </UncontrolledTooltip>
                </div>
                <div className="col-1">
                  <FaRegLightbulb
                    className="text-secondary h3"
                    id={`details-${item.id}`}
                  />
                  <UncontrolledTooltip
                    placement="bottom"
                    target={`details-${item.id}`}
                  >
                    <i>{item.description.toString().toLowerCase()}</i>
                  </UncontrolledTooltip>
                </div>
                <div className="col-4">
                  <ListGroupItemText className="capital">
                    {item.title}
                  </ListGroupItemText>
                </div>

                <div className="col-4">
                  <ListGroupItemText
                    className={`text-${
                      item.income === "1" ? "success" : "danger"
                    }`}
                  >
                    $ {parseInt(item.qty).toLocaleString()}
                  </ListGroupItemText>
                </div>
                <div className="col-1">
                  {item.payed && item.in && (
                    <>
                      <GiReceiveMoney
                        className="text-success h3"
                        id={`payedToMe-${item.id}`}
                      />
                      <UncontrolledTooltip
                        placement="bottom"
                        target={`payedToMe-${item.id}`}
                      >
                        Pagado
                      </UncontrolledTooltip>
                    </>
                  )}
                  {item.payed && !item.in && (
                    <>
                      <GiPayMoney
                        className="text-success h3"
                        id={`payedByMe-${item.id}`}
                      />
                      <UncontrolledTooltip
                        placement="bottom"
                        target={`payedByMe-${item.id}`}
                      >
                        Pagado
                      </UncontrolledTooltip>
                    </>
                  )}
                  {!item.payed && (
                    <>
                      <GiOpenChest
                        className="text-secondary h3"
                        id={`notePayed-${item.id}`}
                      />
                      <UncontrolledTooltip
                        placement="bottom"
                        target={`notePayed-${item.id}`}
                      >
                        Sin pagar
                      </UncontrolledTooltip>
                    </>
                  )}
                </div>
              </div>
            </ListGroupItem>
          ))}
      </ListGroup>

      {list.length > 1 && (
        <ExpenseListBottomTotalizer total={sum(list, "qty").toLocaleString()} />
      )}
    </div>
  );
};

export const ExpenseListBottomTotalizer = ({ title, total }) => {
  return (
    <div
      className={`${
        total < 1 ? "text-danger" : "text-secondary"
      } card bg-light text-right px-4 pt-2`}
    >
      {title ? <span>{title}</span> : null}
      <h4>$ {total.toLocaleString()}</h4>
    </div>
  );
};

export default ExpenseList;
