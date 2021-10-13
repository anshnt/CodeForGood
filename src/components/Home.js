import React from "react";
import "./css/Home.css";
import Sidebar from "./Sidebar";
import { useEffect } from "react";
// import DashboardSidebar from '../dashboard/DashboardSidebar'
// import Product from "./Product";
// import AadharVsMigrants from '../graphs/AadharVsMigrants';
// import LocationVsMigrants from '../graphs/LocationVsMigrants';
import ServiceVsMigrants from '../graphs/ServiceVsMigrants';
import axios from "axios";
import Dashboard from "./Dashboard";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router";

function Home() {
  // const fetchData = () => {
  //   return fetch("https://78645108599d.ngrok.io/getAgentDetails")
  //     .then((response) => response.json())
  //     .then((data) => console.log(data));
  // };
  const history = useHistory();


const gettingstarted = () =>{
  history.replace("/login");
} 


  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    return axios.get("http://c18ff572ac2e.ngrok.io/getAgentDetails")
          .then((response) => console.log(response.data))
          .catch((error)=> console.log(error) )
          ;}

  return (
    <div className="home">
      <div className="home_container">
        <Sidebar />
        {/* <h1>Welcome to 360 Insights</h1> */}
{/* <Button variant="outlined" onClick={gettingstarted}>Getting Started</Button> */}
        {/* <Dashboard/> */}

        
        {/* <LocationVsMigrants />
          
          <ServiceVsMigrants />
        
          <AadharVsMigrants /> */}
      </div>
    </div>
  );
}

export default Home;
