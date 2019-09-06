import React, { Fragment } from "react";
import NavBar from "./components/Navbar/Navbar";
import { useAuth0 } from "./react-auth0-wrapper";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import "./App.css";
import GlobalStyle from "./GlobalStyle";
import MangoLogger from "./components/MangoLogger/MangoLogger";
import createAuth0Client from "@auth0/auth0-spa-js";
import Profile from "./components/Profile/Profile";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute.js";

const App = () => {
  const { loading } = useAuth0();

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="App">
      {/* New - use BrowserRouter to provide access to /profile */}
      <BrowserRouter>
      <header>
        <NavBar />
      </header>
      <Switch>
          <Route path="/" exact />
          <PrivateRoute path="/profile" component={Profile} />
        </Switch>
      </BrowserRouter>
      <MangoLogger />
    </div>
  );
};

export default App;
