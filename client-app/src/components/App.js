import React, { Component } from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./layout/Home";
import Page from "./page/Page";
import "../styles/base/_base.scss";
import { connection } from "../store/SignalRConnection";
import SignalRConn from "../store/SignalRConn";

class App extends Component {
  componentDidMount = () => {
    connection.on("Sign", res => console.log("THIS IS THE RESPONSE", res));
    connection
      .start()
      .then(res => {
        connection.invoke("GetFirstTimePost", "UserName");
      })
      .catch(err => console.error("ERROR!!!!", err.toString()));
    connection.on("TestRecieve", resp => console.log("Object", resp));

    window.onbeforeunload = function() {
      connection.connectionClosed();
    };
  };

  render() {
    return (
      <Router>
        <Layout>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/page" component={Page} />
          </Switch>
          <SignalRConn />
        </Layout>
      </Router>
    );
  }
}

export default App;
