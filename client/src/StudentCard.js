import React from "react";

export const StudentCard = ({ name, classes, availability }) => (
  <div className="student-card">
    <h2>{name}</h2>
    <p>Classes: {classes.join(", ")}</p>
    <p>Availability: {availability.join(", ")}</p>
    <button className="view-profile-button">View Profile</button>
  </div>
);
