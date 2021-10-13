import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import LocationVsMigrants from '../graphs/LocationVsMigrants';
import AadharVsMigrants from "../graphs/AadharVsMigrants";
import ServiceVsMigrants from "../graphs/ServiceVsMigrants";
import PredictedLocVsMigrant from "../graphs/PredictedLocVsMigrant";
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

export default function FullWidthGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>
            <LocationVsMigrants />
          </Paper>
        </Grid>

        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>
            <PredictedLocVsMigrant />
          </Paper>
        </Grid>

        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>
            {" "}
            <AadharVsMigrants />
          </Paper>
        </Grid>

        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>
            <ServiceVsMigrants />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
