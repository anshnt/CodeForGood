import React from "react";
import "./css/Header.css";
import SearchIcon from "@material-ui/icons/Search";
// import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "../cart/StateProvider";
import { auth } from "../firebase";

function InitialHeader() {
  const [{ user }, dispatch] = useStateValue();
  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  };
  return (
    <div className="header">
      <Link to="/">
        <img
          className="header_logo"
          src="https://indiamigrationnow.org/wp-content/uploads/2019/12/logo1-1.png"
          alt="logo"
        />
        {/* <h1 className="home_link">Home</h1> */}
      </Link>
      {/* <div className="header_search">
        <input className="header_searchInput" type="text" />
        <SearchIcon className="header_searchIcon" />
      </div> */}

      <div className="header_optionLine">360&deg; Insights</div>
    </div>
  );
}

export default InitialHeader;
