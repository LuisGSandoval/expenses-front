import React, { useContext } from "react";
import { CTX } from "../../../Store/Store";
import {
  ListGroup,
  ListGroupItem,
  ListGroupItemHeading,
  ListGroupItemText
} from "reactstrap";
import { Link } from "react-router-dom";
import { turnDayDateToZero, groupExpenses } from "../../../tools/monthlyList";
import { createListBy } from "../../../tools/tools";
import { format } from "date-fns";

const MonthlyList = () => {
  const [state] = useContext(CTX);

  let formatedDate = turnDayDateToZero(state.expensesList);

  let groupedByDate = createListBy("date", formatedDate);
  let expenses = groupExpenses(groupedByDate);

  return (
    <div className="bg-dark pb-5">
      <div className="container">
        {expenses.map((ele, i) => (
          <Link
            key={i}
            className="pt-5 monthly-card"
            to={`/expenses/date/${ele.date}`}
          >
            <div>
              <h4 className="text-white mt-4">
                {ele.date ? format(new Date(ele.date), "MMMM-yyyy") : ""}
              </h4>
              <ListGroup>
                <ListGroupItem color="dark">
                  <ListGroupItemText>
                    Ingresos: {ele.income ? ele.income.toLocaleString() : 0}
                  </ListGroupItemText>
                  <ListGroupItemText>
                    Gastos: {ele.expense ? ele.expense.toLocaleString() : 0}
                  </ListGroupItemText>
                  <ListGroupItemHeading>
                    Restante:{" "}
                    {((ele.income || 0) - (ele.expense || 0))
                      .toLocaleString()
                      .toLocaleString()}
                  </ListGroupItemHeading>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MonthlyList;
