import React, { useEffect, useState } from "react";
import "./AadharUpdate.css";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import axios from "../axios";

const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

export default function Vaccine() {
  const [fdata, setfdata] = useState();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios
      .get("getAgentDetails")
      .then((response) => {
        console.log(response.data.services_agent_obj);

        setfdata(response.data.services_agent_obj["Vaccine Registration"]);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <h1 className="no-margin center x">Vaccine Registration</h1>
      <BarChart
        width={800}
        height={300}
        data={fdata}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="agent_name" />
        <YAxis />
        <Tooltip />
        <Legend />
        {/* <Bar dataKey="agent_name" fill="#8884d8" /> */}
        <Bar dataKey="Vaccine Registration_count" fill="#82ca9d" />
      </BarChart>
    </div>
  );
}
