import React, { useContext } from "react";
import { Line } from "react-chartjs-2";
import { CTX } from "../../../Store/Store";

const GraphComparison = () => {
  const [state] = useContext(CTX);
  const { graphicsData: gd } = state;

  return (
    <Line
      data={{
        labels: gd.months,
        datasets: [
          {
            label: "Gastos",
            data: gd.expenses,
            backgroundColor: "rgba(255, 99, 132, 0)",
            borderColor: "rgba(255, 99, 132, 1)",
            borderWidth: 1
          },
          {
            label: "queda",
            data: gd.moneyLeft,
            backgroundColor: "rgba(75, 192, 192, 0.2)",
            borderColor: "rgba(75, 192, 192, 1)",
            borderWidth: 1
          }
        ]
      }}
    />
  );
};

export default GraphComparison;
