import React, { Component } from "react";
import "../../styles/layout/_auth.scss";
import { addNewName } from "../../store/Name";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

class Auth extends Component {
  state = {
    content: "",
    authFails: true
  };

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value.replace(/\s+/g, "")
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.content.length >= 1) {
      this.props.addName(this.state.content);
      this.setState({
        authFails: false
      });
    }
  };

  render() {
    return this.state.authFails ? (
      <form onSubmit={this.handleSubmit} className="card-container">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png"
          alt="logo"
          width="100"
        />
        <div className="card-auth">
          <h1>Enter A Name:</h1>
          <input
            id="content"
            onChange={this.handleChange}
            type="text"
            placeholder="Enter Name"
            value={this.state.content}
          />
          <button>Submit</button>
        </div>
      </form>
    ) : (
      <Redirect to={{ pathname: "/" }} />
    );
  }
}

const MapDispatchToProps = dispatch => {
  return {
    addName: name => dispatch(addNewName(name))
  };
};

export default connect(
  null,
  MapDispatchToProps
)(Auth);
