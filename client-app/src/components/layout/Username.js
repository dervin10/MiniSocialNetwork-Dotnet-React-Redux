import React from "react";
import person from "../../images/person.jpg";

const Username = () => {
  return (
    <div className="profile">
      <img className="profile-icon" src={person} alt="Person" />
      <p className="profile-name">Dervin Castro</p>
    </div>
  );
};

export default Username;
