import React, { useEffect, useState } from "react";
import DailyChart from "./DailyChart";
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

function MonthlyChart() {
  const [days, setDays] = useState({
    jan: 31,
    feb: 28,
    march: 31,
    april: 30,
    may: 31,
    june: 30,
    july: 31,
    aug: 31,
    sep: 30,
    oct: 31,
    nov: 30,
    dec: 31,
  });
  const [month, setMonth] = useState([
    "jan",
    "feb",
    "march",
    "april",
    "may",
    "june",
    "july",
    "aug",
    "sep",
    "oct",
    "nov",
    "dec",
  ]);
  // useEffect(() => {
  //   // console.log(months());
  //   // console.log(Data1);
  //   console.log(
  //     Data1.map((choc) => (choc.month === "jan" ? choc : null))[0].perk,
  //     Data1.map((choc) => (choc.month === "jan" ? choc : null))[0].dairymilk,
  //     Data1.map((choc) => (choc.month === "jan" ? choc : null))[0].munch,
  //     Data1.map((choc) => (choc.month === "jan" ? choc : null))[0].kitkat
  //   );
  // }, []);
  const dailySale = () => {
    let obj = {};
    const d = month.map((mon, j) => {
      let arr1 = [];
      for (let i = 0; i < days[mon]; i++) {
        arr1.push(i);
      }
      const rd = arr1.map((day) => {
        return {
          id: day,
          perk: Math.floor(Math.random() * 100),
          dairymilk: Math.floor(Math.random() * 100),
          munch: Math.floor(Math.random() * 100),
          kitkat: Math.floor(Math.random() * 100),
        };
      });
      obj[mon] = rd;
    });
    return obj;
  };

  const daysum = () => {
    let obj = {};
    const ds = dailySale();
    month.map((i, j) => {
      let perk = 0;
      let dairymilk = 0;
      let munch = 0;
      let kitkat = 0;
      ds[i].map((k, l) => {
        perk += k.perk;
        dairymilk += k.dairymilk;
        munch += k.munch;
        kitkat += k.kitkat;
      });
      obj[i] = {
        perk: perk,
        dairymilk: dairymilk,
        munch: munch,
        kitkat: kitkat,
      };
    });
    return obj;
  };

  const data1 = () => {
    const monthsale = daysum();
    return month.map((i, j) => {
      return {
        month: i,
        perk: monthsale[i].perk,
        dairymilk: monthsale[i].dairymilk,
        munch: monthsale[i].munch,
        kitkat: monthsale[i].kitkat,
      };
    });
  };

  const months = () => {
    const d1 = data1();
    const d = month.map((mon) => {
      return {
        label: mon,
        data: [
          d1.filter((choc) => choc.month === mon)[0].perk,
          d1.filter((choc) => choc.month === mon)[0].dairymilk,
          d1.filter((choc) => choc.month === mon)[0].munch,
          d1.filter((choc) => choc.month === mon)[0].kitkat,
          // console.log(d1.filter((choc) => choc.month === mon))
          // console.log(d1.filter((choc) => choc.month === mon)[0])
        ],
      };
    });

    return d;
  };

  
  const data = {
    labels: ["perk", "dairymilk", "munch", "kitkat"],
    datasets: months(),
  };
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "monthly sales chart",
      },
    },
  };
  useEffect(() => {
    // console.log(dailySale());
    // console.log(data1());
    // console.log("this is days", myday);
  }, []);

  return (
    <>
      <Bar data={data} options={options} />
      <DailyChart days={days} month={month} dailySale={dailySale} />
    </>
  );
}

export default MonthlyChart;
