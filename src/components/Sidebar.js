import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import Header from "./Header";
import LocationVsMigrants from "../graphs/LocationVsMigrants";
import ServiceVsMigrants from "../graphs/ServiceVsMigrants";
import { useHistory } from "react-router";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AadharVsMigrants from "../graphs/AadharVsMigrants";
import Dashboard from "./Dashboard";
import AadharUpdate from "../graphs/AadharUpdate";
import CashDeposit from "../graphs/CashDeposit";
import Vaccine from "../graphs/Vaccine";
import AgentEfficiency from "../graphs/AgentEfficiency";
import Grievances from '../graphs/Grievances'

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerContainer: {
    overflow: "auto",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

export default function ClippedDrawer() {
  const classes = useStyles();
  const history = useHistory();
  //   const [graph, setgraph] = useState('')

  const dashboard = () => {
    history.replace("/dashboard");
  };

  const locationVsMigrants = () => {
    history.replace("/locationVsMigrants");
  };

  const agentperformace = () => {
    history.replace("/agentperformace");
  };

  const financialinsights = () => {
    history.replace("/financialinsights");
  };

  const aadharupdate = () => {
    history.replace("/aadharupdate");
  };

  const cashdeposit = () => {
    history.replace("/cashdeposit");
  };

  const vaccine = () => {
    history.replace("/vaccine");
  };

  const agentefficiency = () => {
    history.replace("/agentefficiency");
  };

  const grievances = () => {
    history.replace("/grievances");
  };

  return (
    <div className={classes.root}>
      <CssBaseline />

      <AppBar position="fixed" className={classes.appBar}>
        <Header />
      </AppBar>

      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <Toolbar />
        <div className={classes.drawerContainer}>
          <List>
            <ListItem button onClick={dashboard}>
              <ListItemText primary="Dashboard" />
            </ListItem>

            <Divider />

            <ListItem button onClick={financialinsights}>
              <ListItemText primary="Financial insights" />
            </ListItem>

            <ListItem button onClick={agentperformace}>
              <ListItemText primary="Agent Performace" />
            </ListItem>

            <ListItem button onClick={agentefficiency}>
              <ListItemText primary="Agent Financial Inclusion" />
            </ListItem>

            <ListItem button onClick={grievances}>
              <ListItemText primary="Grievances" />
            </ListItem>
          </List>

          <Divider />
          <List>
          <ListItem button onClick={aadharupdate}>
              <ListItemText primary="AadharUpdate" />
            </ListItem>
            <ListItem button onClick={cashdeposit}>
              <ListItemText primary="Cash Deposit" />
            </ListItem>

            <ListItem button onClick={vaccine}>
              <ListItemText primary="Vaccine Registration" />
            </ListItem>
            
          </List>
          
        </div>
      </Drawer>

      <main className={classes.content}>
        <Toolbar />

        <Switch>
          <Route path="/locationVsMigrants">
            <LocationVsMigrants />
          </Route>

          <Route path="/agentperformace">
            <ServiceVsMigrants />
          </Route>

          <Route path="/financialinsights">
            <AadharVsMigrants />
          </Route>

          <Route path="/dashboard">
            <Dashboard />
          </Route>

          <Route path="/aadharupdate">
            <AadharUpdate />
          </Route>

          <Route path="/cashdeposit">
            <CashDeposit />
          </Route>

          <Route path="/vaccine">
            <Vaccine />
          </Route>

          <Route path="/agentefficiency">
            <AgentEfficiency />
          </Route>

          <Route path="/grievances">
          <Grievances />
          </Route>


        </Switch>
      </main>
    </div>
  );
}
