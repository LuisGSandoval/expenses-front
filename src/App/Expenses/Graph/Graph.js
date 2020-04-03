import React, { useState, useEffect, useContext } from "react";
import { CTX } from "../../../Store/Store";
import { TabContent, TabPane, Nav, NavItem, NavLink } from "reactstrap";
import GraphIncome from "./GraphIncome";
import GraphExpenses from "./GraphExpenses";
import GraphComparison from "./GraphComparison";
import { turnDayDateToZero, groupExpenses } from "../../../tools/monthlyList";
import { createListBy } from "../../../tools/tools";
import { format } from "date-fns";

const Graph = () => {
  const [state, dispatch] = useContext(CTX);
  const [activeTab, setActiveTab] = useState("2");

  const { expensesList } = state;

  const toggle = tab => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  const prepareDateToRenderGraphs = () => {
    let formatedDate = turnDayDateToZero(expensesList);
    let groupedByDate = createListBy("date", formatedDate);
    let finalData = groupExpenses(groupedByDate);

    var months = finalData.map(it => format(new Date(it["date"]), "MMMM-yyyy"));
    var moneyLeft = finalData.map(it => it["income"] - it["expense"]);
    var expenses = finalData.map(it => it["expense"]);

    dispatch({
      type: "GRAPHICS_DATA",
      payload: { months, moneyLeft, expenses }
    });
  };

  useEffect(() => {
    prepareDateToRenderGraphs();

    return () => {
      dispatch({
        type: "GRAPHICS_DATA",
        payload: { months: [], moneyLeft: [], expenses: [] }
      });
    };
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <Nav tabs className="container-md bg-secondary" fill justified>
        <NavItem>
          <NavLink
            className={`${activeTab === "1" ? "active" : ""} `}
            onClick={() => {
              toggle("1");
            }}
          >
            Gastos
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={`${activeTab === "2" ? "active" : ""} `}
            onClick={() => {
              toggle("2");
            }}
          >
            Comparativa
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={`${activeTab === "3" ? "active" : ""} `}
            onClick={() => {
              toggle("3");
            }}
          >
            Ganacias
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent
        className="container-md graph-container"
        activeTab={activeTab}
      >
        <TabPane tabId="1">
          <GraphExpenses />
        </TabPane>
        <TabPane tabId="2">
          <GraphComparison />
        </TabPane>
        <TabPane tabId="3">
          <GraphIncome />
        </TabPane>
      </TabContent>
    </div>
  );
};

export default Graph;
