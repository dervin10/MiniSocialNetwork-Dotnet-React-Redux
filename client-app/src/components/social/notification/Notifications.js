import React, { Component } from "react";
import NotificationCard from "./NotificationCard";
import "../../../styles/layout/_notifications.scss";
import { connect } from "react-redux";
import { connection } from "../../../store/SignalRConnection";
import { newStateNotifications } from "../../../store/Notifications";

class Notifications extends Component {
  constructor(props) {
    super(props);

    connection.on("Notifications", response => {
      this.props.newStateNotifications(JSON.parse(response));
    });
  }

  render() {
    const notifications = this.props.notifications;
    console.log("NOTIFICATIONS", notifications);
    return (
      <section className="notifications">
        <div className="notifications-title">Notifications</div>
        <NotificationCard notifications={notifications} />
      </section>
    );
  }
}

const mapStoreToProps = store => {
  return {
    notifications: store.notifications
  };
};

const mapDispatchToProps = dispatch => {
  return {
    newStateNotifications: notifications =>
      dispatch(newStateNotifications(notifications))
  };
};

export default connect(
  mapStoreToProps,
  mapDispatchToProps
)(Notifications);
