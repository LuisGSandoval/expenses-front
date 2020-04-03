import React, { useContext } from "react";
import { CTX } from "../../../Store/Store";
import { Bar } from "react-chartjs-2";

const GrapthIncome = () => {
  const [state] = useContext(CTX);
  const { graphicsData: gd } = state;

  return (
    <Bar
      data={{
        labels: gd.months,
        datasets: [
          {
            label: "Ganancias",
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

export default GrapthIncome;
