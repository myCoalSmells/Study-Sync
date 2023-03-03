import React from "react";
// CSS Module
import SCMod from "./StudentCard.module.css"

// since SCMod.button is not working for some reason
// profileStyles as an alternative
const profileStyles = {
  backgroundColor: "blue",
  color: "white",
  padding: "10px 20px",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
};

export function StudentCard({name, classes, availability }) {
  return (
    <div className={SCMod.card}>
      <h2 className={SCMod.name}>{name}</h2>
      <p className={SCMod.classes}>Classes: {classes.join(", ")}</p>
      <p className={SCMod.availability}>Availability: {availability.join(", ")}</p>
      <button className={SCMod.button} style={profileStyles}>View Profile</button>
    </div>
  );
}