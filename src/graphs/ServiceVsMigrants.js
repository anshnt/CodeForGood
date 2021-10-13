import React, { useEffect, useState } from "react";
import "./AadharUpdate.css";
import {
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Scatter,
} from "recharts";
import axios from "../axios";

const data = [
  {
    name: "Location 1",
    number: 590,
    pv: 800,
    amt: 1400,
    cnt: 490,
  },
  {
    name: "Page B",
    number: 868,
    pv: 967,
    amt: 1506,
    cnt: 590,
  },
  {
    name: "Page C",
    number: 1397,
    pv: 1098,
    amt: 989,
    cnt: 350,
  },
  {
    name: "Page D",
    number: 1480,
    pv: 1200,
    amt: 1228,
    cnt: 480,
  },
  {
    name: "Page E",
    number: 1520,
    pv: 1108,
    amt: 1100,
    cnt: 460,
  },
  {
    name: "Page F",
    number: 1400,
    pv: 680,
    amt: 1700,
    cnt: 380,
  },
];



export default function ServiceVsMigrants() {
    const [fdata, setfdata] = useState()

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios
      .get("get360Insights")
      .then((response) => {
        console.log(response.data['values']);
        setfdata(response.data.values.map((data) =>{ return data}))
      })
      .catch((error) => console.log(error));
  };

 

  return (
    <div>
        <h1 className="x">Agent Performace</h1>
      <ComposedChart
        width={560}
        height={400}
        data={fdata}
        margin={{
          top: 20,
          right: 20,
          bottom: 20,
          left: 20,
        }}
      >
        <CartesianGrid stroke="#f5f5f5" />
        <XAxis dataKey="Agent Name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Area type="monotone" dataKey="360 Insight Score" fill="#8884d8" stroke="#8884d8" />
        {/* <Bar dataKey="Agent Name" barSize={20} fill="#413ea0" /> */}
        {/* <Line type="monotone" dataKey="Average Time" stroke="#ff7300" /> */}
        <Scatter dataKey="Efficiency (Services/Week)" fill="red" />
      </ComposedChart>

     
    </div>
  );
}
