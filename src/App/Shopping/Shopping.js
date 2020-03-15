import React from "react";
import Navbar from "../../Components/Navbar";
import Total from "./Total";
import ListForm from "./ListForm";
import ShoppingList from "./ShoppingList";
import DeleteButton from "./DeleteButton";

const Shopping = () => {
  return (
    <>
      <Navbar />

      <div className="container mt-5">
        <Total />
        <ListForm />
        <ShoppingList />
        <DeleteButton />
      </div>
    </>
  );
};

export default Shopping;
