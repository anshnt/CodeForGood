import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { auth } from "../firebase";
import "./css/Login.css";
import InitialHeader from "../components/InitialHeader";

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const signIn = (e) => {
    e.preventDefault();
    auth.signInWithEmailAndPassword(email, password)
    .then((auth) => {
      console.log(auth);
      if (auth) {
        history.push("/dashboard");
      }
    })
    .catch((error) => alert(error.message));
    // firebase
  };

  const register = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        console.log(auth);
        if (auth) {
          history.push("/dashboard");
        }
      })
      .catch((error) => alert(error.message));
    
  };

  return (
    <div>
    <InitialHeader />
    <div className="login">
    <br /> <br />
    <h1 className="welcome"> Welcome! </h1>
    <br /> <br />
      <div className="login_container">
        <h1>Sign-in</h1>
        <form>
          <input
            type="text"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="login_signInButton" onClick={signIn}>
            Sign In
          </button>
          
        </form>
        <button className="login_registerButton" onClick={register}>
          Create Your Account
        </button>
      </div>
    </div>
    </div>
  );
}

export default Login;
