import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js/auto";

function DailyChart(props) {
  const [val, setVal] = useState("jan");
  const { days, month, dailySale } = props;
  const ds = dailySale();
  // console.log(days);
  // console.log(month);
  // const ds = () => {
  //   return dailySale;
  // };
  // useEffect(() => {
  //   // console.log(dailySale());
  //   console.log(val);
  // }, [val]);

  // console.log(ds[val]);

  const chart = {
    labels: ds[val].map((choc) => choc.id + 1),
    datasets: [
      {
        label: "perk",
        data: ds[val].map((choc) => choc.perk),
        backgroundColor: "rgb(255, 99, 132)",
      },
      {
        label: "dairymilk",
        data: ds[val].map((choc) => choc.dairymilk),
        backgroundColor: "rgb(75, 192, 192)",
      },
      {
        label: "munch",
        data: ds[val].map((choc) => choc.munch),
        backgroundColor: "rgb(53, 162, 235)",
      },
      {
        label: "kitkat",
        data: ds[val].map((choc) => choc.kitkat),
        backgroundColor: "rgb(250, 132, 220)",
      },
    ],
  };

  const options = {
    plugins: {
      title: {
        display: true,
        text: "Daily sales of each month",
      },
    },
    responsive: true,
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true,
      },
    },
  };
  // console.log(Object.keys(ds));
  return (
    <>
      <select onChange={(e) => setVal(e.target.value)} className="dropdown">
        {Object.keys(ds).map((month) => (
          <option value={month}>{month}</option>
        ))}
      </select>
      <Bar data={chart} options={options} />;
    </>
  );
}

export default DailyChart;
