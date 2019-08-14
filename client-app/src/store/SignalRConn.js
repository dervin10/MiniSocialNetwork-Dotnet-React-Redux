import { connection } from "./SignalRConnection";
import Online from "../components/social/online/Online";
import { newStateOnlines } from "../store/Onlines";
import { newStateNotifications } from "../store/Notifications";
import { connect } from "react-redux";

const SignalRConn = props => {
  connection.on("Onlines", response =>
    props.NewStateOnlines(JSON.parse(response))
  );

  connection.on("Notifications", response =>
    props.newStateNotifications(JSON.parse(response))
  );

  connection.on("Posts", response => console.log("POSTS".JSON.parse(response)));

  return null;
};

const mapDispatchToProps = dispatch => {
  return {
    NewStateOnlines: onlines => dispatch(newStateOnlines(onlines)),
    newStateNotifications: notifications =>
      dispatch(newStateNotifications(notifications))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(SignalRConn);
