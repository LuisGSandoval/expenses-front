import React, { useContext } from "react";
import { CTX } from "../../../Store/Store";
import { Bar } from "react-chartjs-2";

const GraphExpenses = () => {
  const [state] = useContext(CTX);
  const { graphicsData: gd } = state;

  return (
    <Bar
      data={{
        labels: gd.months,
        datasets: [
          {
            label: "Gastos",
            data: gd.expenses,
            backgroundColor: "rgba(255, 99, 132, 0.2)",
            borderColor: "rgba(255, 99, 132, 1)",
            borderWidth: 1
          }
        ]
      }}
    />
  );
};

export default GraphExpenses;
