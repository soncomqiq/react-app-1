import './App.css';
import StudentItem from "./components/StudentItem";

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
  let statusText = "Available";
  const clickEventHandler = () => {
    console.log("Clicked")
  }

  return (
      <div className="App">
        <h2>This is React Application</h2>
        <p>Let's get started!</p>
        <StudentItem name={studentList[0].name} surname={studentList[0].surname} age={studentList[0].age}></StudentItem>
        <StudentItem name={studentList[1].name} surname={studentList[1].surname} age={studentList[1].age}></StudentItem>
        <StudentItem name={studentList[2].name} surname={studentList[2].surname} age={studentList[2].age}></StudentItem>
        <StudentItem name={studentList[3].name} surname={studentList[3].surname} age={studentList[3].age}></StudentItem>
        <h3>Status: {statusText}</h3>
        <button onClick={clickEventHandler}>Click me</button>
      </div>
  );
}

export default App;
