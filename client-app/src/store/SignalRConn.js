import { connection } from "./SignalRBuilder";
import Online from "../components/social/online/Online";
import { newStateOnlines } from "../store/Onlines";
import { newStateNotifications } from "../store/Notifications";
import { getPosts } from "./Posts";
import { connect } from "react-redux";

const SignalRConn = props => {
  connection.on("Onlines", response =>
    props.NewStateOnlines(JSON.parse(response))
  );

  connection.on("Notifications", response =>
    props.newStateNotifications(JSON.parse(response))
  );

  connection.on("Posts", response =>
    props.LoadStatePosts(JSON.parse(response))
  );

  if (props.name)
    connection
      .start()
      .then(res => {
        connection.invoke("GetFirstTimePost", props.name);
      })
      .catch(err => console.error("ERROR!!!!", err.toString()));

  window.onbeforeunload = function() {
    connection.connectionClosed();
  };

  return null;
};

const mapStoreToProps = store => {
  return {
    name: store.nameReducer.name
  };
};

const mapDispatchToProps = dispatch => {
  return {
    NewStateOnlines: onlines => dispatch(newStateOnlines(onlines)),
    newStateNotifications: notifications =>
      dispatch(newStateNotifications(notifications)),
    LoadStatePosts: posts => dispatch(getPosts(posts))
  };
};

export default connect(
  mapStoreToProps,
  mapDispatchToProps
)(SignalRConn);
