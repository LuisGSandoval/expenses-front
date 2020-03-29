import React from "react";
import { Bar } from "react-chartjs-2";

const GraphExpenses = () => {
  return (
    <Bar
      data={{
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        datasets: [
          {
            label: "Gastos",
            data: [12, 19, 3, 5, 2, 3],
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
