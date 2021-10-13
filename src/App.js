import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Checkout from "./components/Checkout";
import Login from "./authentication/Login";
import { useEffect } from "react";
import { auth } from "./firebase";
import { useStateValue } from "./cart/StateProvider";
import LocationVsMigrants from "./graphs/LocationVsMigrants";
// import Payment from "./components/Payment";
// import { loadStripe } from "@stripe/stripe-js";
// import { Elements } from "@stripe/react-stripe-js";
// import Orders from "./components/Orders";

// const promise = loadStripe(
//   "pk_test_51IudGeSAc1cEiR3rRIHRklHNJeBu4h80md7By1yDW5WCizEQXhvRgk46hBgS8wPK7QMRHd8qBXS2Z5w6N2cPskzG00KeIPxe0y"
// );

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({ type: "SET_USER", user: authUser });
      } else {
        dispatch({ type: "SET_USER", user: null });
      }
    });
  }, []);

  return (
    <div className="App">
      <Router>
        <Switch>
          {/* <Route path="/checkout">
            <Header />
            <Checkout />
          </Route> */}

          <Route path="/login">
            <Login />
          </Route>

          {/* <Route path="/orders">
            <Orders />
          </Route> */}

          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
