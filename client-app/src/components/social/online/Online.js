import React, { Component } from "react";
import OnlineCard from "./OnlineCard";
import "../../../styles/layout/_online.scss";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../../store/Onlines";
import { connection } from "../../../store/SignalRBuilder";
import { newStateOnlines } from "../../../store/Onlines";

class Online extends Component {
  // Me quede por desplegar y conectar los ONLINE's
  // Problema con el json no esta bien representado?
  render() {
    // connection.on("Onlines", response => {
    //   console.log(response)
    //   console.log("JSON RECIEVE", JSON.parse(response))
    //   this.props.NewStateOnlines(JSON.parse(response))
    // });

    const onlines = this.props.onlines;

    return (
      <section className="online-card">
        <div className="online-title">Online's</div>
        <OnlineCard onlines={onlines} />
      </section>
    );
  }
}

const mapStoreToProps = store => {
  return {
    onlines: store.onlines
  };
};

const mapDispatchToProps = dispatch => {
  return {
    NewStateOnlines: onlines => dispatch(newStateOnlines(onlines))
  };
};

export default connect(
  mapStoreToProps,
  mapDispatchToProps
)(Online);

// export default connect(
//   state => state.onlines,
//   dispatch => bindActionCreators(actionCreators, dispatch)
//  )(Online);
