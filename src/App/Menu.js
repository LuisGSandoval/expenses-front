import React from "react";
import Navbar from "../Components/Navbar";
import { FiShoppingCart } from "react-icons/fi";
import { Card, Button, CardTitle, CardText } from "reactstrap";
import { Link } from "react-router-dom";
import { GoGraph } from "react-icons/go";

const Menu = () => {
  return (
    <>
      <Navbar />

      <div className="container mt-5">
        <div className="row">
          <div className="col-12 col-md-6 p-5">
            <Card className="text-center" body inverse color="light">
              <CardTitle>
                <span className="mr-4 text-dark">Gastos</span>
                <GoGraph className="text-dark" />
              </CardTitle>
              <CardText className="text-secondary">
                Haz un rastreo de tus gastos e ingresos
              </CardText>
              <Button tag={Link} to="/expenses">
                listo
              </Button>
            </Card>
          </div>
          <div className="col-12 col-md-6 p-5">
            <Card className="text-center" body inverse color="light">
              <CardTitle>
                <span className="mr-4 text-dark">Compras</span>
                <FiShoppingCart className="text-dark" />
              </CardTitle>
              <CardText className="text-secondary">
                Haz cuentas de tus compras y verifica si te alcanza el dinero
                que traes antes de ir a la caja
              </CardText>
              <Button tag={Link} to="/shopping">
                listo
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};

export default Menu;
