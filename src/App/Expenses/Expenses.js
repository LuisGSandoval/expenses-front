import React from "react";
import Navbar from "../../Components/Navbar";
import Graph from "./Graph/Graph";
import Options from "./Options";
import AppModal from "../../Components/AppModal";
// import { Link } from "react-router-dom";

const Expenses = () => {
  return (
    <div className="bg-dark">
      <Navbar />

      <Graph />

      <Options />

      <AppModal />
    </div>
  );
};

export default Expenses;
