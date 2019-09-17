import React, { Component } from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./layout/Home";
import Page from "./page/Page";
import Auth from "./auth/Auth";
import "../styles/base/_base.scss";
import { connection } from "../store/SignalRBuilder";
import SignalRConn from "../store/SignalRConn";
import AuthRoute from "./auth/AuthRoute";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/login" component={Auth} />
          <Layout>
            <AuthRoute exact path="/" component={Home} />
            <Route path="/page" component={Page} />
            <SignalRConn />
          </Layout>
        </Switch>
      </Router>
    );
  }
}

export default App;
