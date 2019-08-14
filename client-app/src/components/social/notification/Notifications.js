import React, { Component } from "react";
import NotificationCard from "./NotificationCard";
import "../../../styles/layout/_notifications.scss";
import { connect } from "react-redux";
import { connection } from "../../../store/SignalRConnection";

class Notifications extends Component {
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

// const mapDispatchToProps = dispatch => {
//   return {
//     newStateNotifications: notifications =>
//       dispatch(newStateNotifications(notifications))
//   };
// };

export default connect(mapStoreToProps)(Notifications);
