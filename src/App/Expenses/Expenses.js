import React from "react";
import Navbar from "../../Components/Navbar";
import Graph from "./Graph/Graph";
import Options from "./Options";
import AppModal from "../../Components/AppModal";
import { Link } from "react-router-dom";

const Expenses = () => {
  return (
    <div>
      <Navbar />
      <Graph />
      <Link className="w-100 btn btn-outline-secondary" to="/expenses/list">
        ver detalle
      </Link>
      <Options />
      <AppModal />
    </div>
  );
};

export default Expenses;
