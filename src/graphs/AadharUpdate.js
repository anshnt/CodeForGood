import React, { useEffect, useState } from "react";
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
import "./AadharUpdate.css";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

export default function AadharUpdate() {
  const [fdata, setfdata] = useState();
  const classes = useStyles();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios
      .get("getAgentDetails")
      .then((response) => {
        console.log(response.data.services_agent_obj);

        setfdata(response.data.services_agent_obj["Aadhar Update"]);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12}>
          <Paper className={classes.paper}>
            <h1 className="no-margin center x">Aadhar Update</h1>

            <BarChart
              width={500}
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
              <Bar dataKey="Aadhar Update_count" fill="#82ca9d" />
            </BarChart>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
