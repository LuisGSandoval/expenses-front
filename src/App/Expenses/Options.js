import React, { useContext } from "react";
import { Button } from "reactstrap";
import { CTX } from "../../Store/Store";
import { Link } from "react-router-dom";

const Options = () => {
  const [, dispatch] = useContext(CTX);

  const toogleModal = () => {
    dispatch({
      type: "TOGGLE_MODAL",
      payload: { open: true, content: "addExpense" }
    });
  };

  return (
    <div className="bg-dark pt-3 pb-3">
      <div className="container text-center">
        {window.location.pathname.includes("/expenses/monthly") ? (
          <Link className="btn btn-outline-secondary" to="/expenses">
            ver grafica
          </Link>
        ) : (
          <Link className="btn btn-outline-secondary" to="/expenses/monthly">
            ver detalle
          </Link>
        )}
        <Button color="success" onClick={toogleModal}>
          Agregar
        </Button>
        {/* <button
          className="btn btn-danger"
          onClick={() => window.localStorage.clear()}
        >
          borrar to
        </button> */}
      </div>
    </div>
  );
};

export default Options;
