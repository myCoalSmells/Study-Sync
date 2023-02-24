// import React, { useState, useEffect } from "react";
// import { StudentCard } from "./StudentCard.js";
// import "./App.css";

// const App = () => {
//   const [students, setStudents] = useState([]);

//   useEffect(() => {
//     fetch("./data.json")
//       .then(res => res.json())
//       .then(data => setStudents(data));
//   }, []);

//   return (
//     <div className="app">
//       {students.map(student => (
//         <StudentCard key={student.name} {...student} />
//       ))}
//     </div>
//   );
// };

// export default App;
import React from "react";

const students = [
  {
    "name": "John Doe",
    "classes": ["Calculus", "Biology", "Chemistry"],
    "availability": [9, 10, 11, 13, 14, 15]
  },
  {
    "name": "Jane Doe",
    "classes": ["History", "English", "Psychology"],
    "availability": [9, 10, 11, 12, 13, 14, 15]
  },
  {
    "name": "Bob Smith",
    "classes": ["Computer Science", "Mathematics", "Physics"],
    "availability": [9, 10, 11, 12, 13, 14, 15, 16]
  }
];

const StudentCard = ({ name, classes, availability }) => (
  <div style={cardStyles}>
    <h2>{name}</h2>
    <p>Classes: {classes.join(", ")}</p>
    <p>Availability: {availability.join(", ")}</p>
    <button style={buttonStyles}>View Profile</button>
  </div>
);

const cardStyles = {
  border: "1px solid gray",
  padding: "20px",
  margin: "20px",
  width: "300px",
  textAlign: "center"
};

const buttonStyles = {
  backgroundColor: "blue",
  color: "white",
  padding: "10px 20px",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer"
};

const App = () => (
  <div style={appStyles}>
    {students.map(student => (
      <StudentCard key={student.name} {...student} />
    ))}
  </div>
);

const appStyles = {
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center"
};

export default App;
