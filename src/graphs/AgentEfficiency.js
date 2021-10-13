import React, { useEffect, useState } from "react";
import "./AadharUpdate.css";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";
import axios from "../axios";

export default function AgentEfficiency() {
    const [fdata, setfdata] = useState();
    const [data, setdata] = useState();
    useEffect(() => {
        fetchData();
      }, []);
    
      const fetchData = () => {
        axios
          .get("getBondInsurance")
          .then((response) => {
            console.log(response.data['bonds']);
            
            setfdata(
                response.data['bonds']
            );

            setdata(
                response.data['insurance']
            );
           
          })
          .catch((error) => console.log(error));
      };


  return (
      <div>
      <h1 className="x">Gold Loans</h1>
    <LineChart width={800} height={200} data={fdata}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="agent" padding={{ left: 30, right: 30 }} />
      <YAxis />
      <Tooltip />
      <Legend />
      
      <Line type="monotone" dataKey="countOfBonds" stroke="#82ca9d" />
    </LineChart>

    <h1 className="x">Insurance</h1>
    <LineChart width={800} height={200} data={fdata}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="agent" padding={{ left: 30, right: 30 }} />
      <YAxis />
      <Tooltip />
      <Legend />
      
      <Line type="monotone" dataKey="countOfBonds" stroke="#8884d8" />
    </LineChart>
    </div>
  );
}
