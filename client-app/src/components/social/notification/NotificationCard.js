import React from "react";

const NotificationCard = ({ notifications }) => {
  let counter = 0;
  return (
    <div>
      {(notifications &&
        notifications.map(notification => {
          return (
            <div className="notifications-card" key={counter++}>
              <b>{notification.Name}</b> {notification.Information}
            </div>
          );
        })) || <div className="notifications-card">Nothing to show...</div>}
    </div>
  );
};

export default NotificationCard;
