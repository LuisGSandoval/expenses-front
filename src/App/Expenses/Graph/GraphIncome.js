import React from "react";
import { Bar } from "react-chartjs-2";

const GrapthIncome = () => {
  return (
    <Bar
      data={{
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        datasets: [
          {
            label: "Ganancias",
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: "rgba(75, 192, 192, 0.2)",
            borderColor: "rgba(75, 192, 192, 1)",

            borderWidth: 1
          }
        ]
      }}
    />
  );
};

export default GrapthIncome;
