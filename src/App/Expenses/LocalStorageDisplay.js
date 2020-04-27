import React, { useState, useEffect } from "react";
import {
  Card,
  Button,
  CardHeader,
  CardFooter,
  CardBody,
  CardText,
} from "reactstrap";
import Navbar from "../../Components/Navbar";
import Options from "./Options";

const LocalStorageDisplay = () => {
  const [jsonData, setJsonData] = useState("");

  const copyText = () => {
    var copyText = document.querySelector("#jsonData");

    copyText.select();
    document.execCommand("copy");
  };

  const getDataFromLS = () => {
    let lsData = JSON.stringify(window.localStorage);
    setJsonData(lsData);
  };

  useEffect(() => {
    getDataFromLS();
  }, []);

  return (
    <div className="container mt-5">
      <Navbar />

      <Card>
        <CardHeader>Json de gastos</CardHeader>
        <CardBody>
          <Button className="mb-4" onClick={copyText}>
            Copiar texto
          </Button>
          {/* <CardTitle>Special Title Treatment</CardTitle> */}
          <CardText>{jsonData.toString()}</CardText>
          <input type="hidden" value={jsonData.toString()} id="jsonData" />
        </CardBody>
      </Card>

      <Options />
    </div>
  );
};

export default LocalStorageDisplay;
