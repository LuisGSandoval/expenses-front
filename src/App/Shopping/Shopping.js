import React from "react";
import Navbar from "../../Components/Navbar";
import Total from "./Total";
import ListForm from "./ListForm";
import ShoppingList from "./ShoppingList";
import DeleteAllButton from "./DeleteAllButton";
import AppModal from "../../Components/AppModal";

const Shopping = () => {
  return (
    <>
      <Navbar />

      <div className="container my-5">
        <Total />
        <ListForm />
        <ShoppingList />
        <DeleteAllButton />
        <AppModal />
      </div>
    </>
  );
};

export default Shopping;
