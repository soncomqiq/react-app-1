import './App.css';
import StudentItem from "./components/StudentItem";
import {useState} from "react";
import NewStudentItem from "./components/NewStudentItem";

function App() {
  const studentList = [
    {
      name: "Samuel",
      surname: "Jackson",
      age: 73
    }, {
      name: "Keanu",
      surname: "Reeves",
      age: 58
    }, {
      name: "Tom",
      surname: "Cruise",
      age: 60
    }, {
      name: "Johnny",
      surname: "Depp",
      age: 59
    }
  ]
  const [status, setStatus] = useState("Available")

  const clickEventHandler = () => {
    setStatus("Busy")
    console.log("status: ", status)
  }

  return (
      <div className="App">
        <NewStudentItem/>
        <StudentItem name={studentList[0].name} surname={studentList[0].surname} age={studentList[0].age}></StudentItem>
        <StudentItem name={studentList[1].name} surname={studentList[1].surname} age={studentList[1].age}></StudentItem>
        <StudentItem name={studentList[2].name} surname={studentList[2].surname} age={studentList[2].age}></StudentItem>
        <StudentItem name={studentList[3].name} surname={studentList[3].surname} age={studentList[3].age}></StudentItem>
        <h3>Status: {status}</h3>
        <button onClick={clickEventHandler}>Click me</button>
      </div>
  );
}

export default App;
