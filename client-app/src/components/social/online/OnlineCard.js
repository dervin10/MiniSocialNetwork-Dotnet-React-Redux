import React from "react";

const OnlineCard = ( { onlines } ) => {
  let counter = 0;
  return (
    <div>
      {onlines &&
        onlines.map(person => {
          return (
            <div className="online-people" key={counter++}>
              <div className="online-status" />
              <b className="online-name">{person.Name}</b>
            </div>
          );
        }) }
    </div>
  );
};

export default OnlineCard;
