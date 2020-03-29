import React, { useContext } from "react";
import { CTX } from "../Store/Store";
import { Modal } from "reactstrap";
import DeleteAllConfirmation from "../App/Shopping/DeleteAllConfirmation";
import ItemOptions from "./ItemOptions";
import AddExpenseForm from "../App/Expenses/AddExpenseForm";

const ConfirmDeletion = () => {
  const [state, dispatch] = useContext(CTX);
  const { modal } = state;

  const closeModal = () => {
    dispatch({
      type: "TOGGLE_MODAL",
      payload: { open: false, content: "" }
    });
  };

  return (
    <div>
      <Modal isOpen={modal.open} toggle={closeModal} centered>
        {modal.content === "deleteAllConfirmation" && <DeleteAllConfirmation />}
        {modal.content === "moreOptions" && <ItemOptions />}
        {modal.content === "addExpense" && <AddExpenseForm />}
      </Modal>
    </div>
  );
};

export default ConfirmDeletion;
