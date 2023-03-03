import React from "react";
import { StudentCard } from "./StudentCard";

/// CSS Modules
import AppCSS from "./App.module.css"
// Get Data from database
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

// App render
function App() {
  return(
    <div className={AppCSS.maincontainer}>

      <div>
        <button>
          View Account Information
        </button>
        <button>
          Log In
        </button>
        <button>
          Sign up
        </button>
      </div>

      <div className={AppCSS.app}>
        <div className={AppCSS.sccontainer}>
          {students.map(student => (
            <StudentCard key={student.name} {...student}/>
          ))}
        </div>
        <div>
          More stuff next to cards if needed
        </div>
      </div>

      <div>
        More down here
      </div>
    </div>
  );
}

export default App;