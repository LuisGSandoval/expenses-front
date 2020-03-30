import React from "react";
import Navbar from "../../../Components/Navbar";
import AppModal from "../../../Components/AppModal";
import Options from "../Options";
import MonthlyList from "./MonthlyList";

const Monthly = () => {
  return (
    <div>
      <Navbar />
      <MonthlyList />
      <Options />
      <AppModal />
    </div>
  );
};

export default Monthly;
