import React, { useState } from "react";
import { TabContent, TabPane, Nav, NavItem, NavLink } from "reactstrap";
import GraphIncome from "./GraphIncome";
import GraphExpenses from "./GraphExpenses";
import GraphComparison from "./GraphComparison";

const Graph = () => {
  const [activeTab, setActiveTab] = useState("2");

  const toggle = tab => {
    if (activeTab !== tab) setActiveTab(tab);
  };
  return (
    <div>
      <Nav tabs className="container-md" fill justified>
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
      <TabContent className="container-md" activeTab={activeTab}>
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
