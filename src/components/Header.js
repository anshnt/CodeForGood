import React from "react";
import "./css/Header.css";
import SearchIcon from "@material-ui/icons/Search";
// import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "../cart/StateProvider";
import { auth } from "../firebase";

function Header() {
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

      <div className="header_optionLineTwo">360&deg; Insights</div>

      <div className="header_nav">
        <Link to={!user && "/login"}>
          <div className="header_options" onClick={handleAuthentication}>
            <span className="user_name">Hello {user?.email || "Guest"}</span>

            <span className="user_name_options">
              {user ? "SignOut" : "SignIn"}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
