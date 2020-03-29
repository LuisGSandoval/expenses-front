import React from "react";
import { Line } from "react-chartjs-2";

const GraphComparison = () => {
  return (
    <Line
      data={{
        labels: ["Red", "Blue", "Yellow"],
        datasets: [
          {
            label: "Gastos",
            data: [790000, 300000, 200000],
            backgroundColor: "rgba(255, 99, 132, 0)",
            borderColor: "rgba(255, 99, 132, 1)",
            borderWidth: 1
          },
          {
            label: "Ganancias",
            data: [2640000, 7000000, 1000000],
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
