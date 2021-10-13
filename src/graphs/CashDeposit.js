import React, { useEffect, useState } from "react";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend
  } from "recharts";
import axios from "../axios";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));

export default function CashDeposit() {
  const classes = useStyles();
  const [fdata, setfdata] = useState();
  const [data, setdata] = useState();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios
      .get("getAgentDetails")
      .then((response) => {
        console.log(response.data.services_agent_obj);
        
        setfdata(
            response.data.services_agent_obj['Cash Deposit']
        );

        setdata(
            response.data.services_agent_obj['Cash Withdrawal']
        );
       
      })
      .catch((error) => console.log(error));
  };

  return (


    
      <div>

<Grid container spacing={3}>
        
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>
          <h1 className="no-margin center">Top 3 Cash Deposits</h1>
    <BarChart
      width={500}
      height={300}
      data={fdata}
      
    >
         
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="agent_name" />
      <YAxis />
      <Tooltip />
      <Legend />
      {/* <Bar dataKey="agent_name" fill="#8884d8" /> */}
      <Bar dataKey="Cash Deposit_count" fill="#8884d8" />
      
    </BarChart>
              </Paper>
        </Grid>        

        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>  <h1 className="no-margin center">Net Cash Deposits</h1>
    <BarChart
      width={500}
      height={300}
      data={data}
     
    >
         
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="agent_name" />
      <YAxis />
      <Tooltip />
      <Legend />
      {/* <Bar dataKey="agent_name" fill="#8884d8" /> */}
      <Bar dataKey="Cash Withdrawal_count"  fill="#8884d8" />
      
    </BarChart></Paper>
        </Grid>

       
      
        
      </Grid>

        
    </div>
  );
}
