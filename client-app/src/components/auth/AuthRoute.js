import React from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import { addNewName } from "../../store/Name";

const AuthRoute = ({ component: Component, ...props }) => {
  return (
    <Route
      {...props}
      render={prop =>
        props.isNullName ? (
          <Component {...prop} />
        ) : (
          <Redirect to={{ pathname: "/login" }} />
        )
      }
    />
  );
};

const MapStoreToProps = store => {
  return {
    isNullName: store.nameReducer.name ? true : false
  };
};

const MapDispatchToProps = dispatch => {
  return {
    addName: name => dispatch(addNewName(name))
  };
};

export default connect(
  MapStoreToProps,
  MapDispatchToProps
)(AuthRoute);
