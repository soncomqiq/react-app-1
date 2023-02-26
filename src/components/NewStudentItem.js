import React, {useState} from "react";

const NewStudentItem = () => {
  const [currentName, setCurrentName] = useState('');
  const [currentLastName, setCurrentLastName] = useState('');
  const [currentAge, setCurrentAge] = useState('');
  const nameChangeHandler = (event) => {
    setCurrentName(event.target.value)
  }

  const lastNameChangeHandler = (event) => {
    setCurrentLastName(event.target.value)
  }

  const ageChangeHandler = (event) => {
    setCurrentAge(event.target.value)
  }

  const submitHandler = (event) => {
    event.preventDefault();
    const newStudent = {
      name: currentName,
      surname: currentLastName,
      age: Number(currentAge)
    }

    console.log(newStudent);
  }

  return (
      <form onSubmit={submitHandler}>
        <div>
          <div className="StudentInput">
            <label>Name</label>
            <input type="text" onChange={nameChangeHandler}/>
          </div>
          <div className="StudentInput">
            <label>Lastname</label>
            <input type="text" onChange={lastNameChangeHandler}/>
          </div>
          <div className="StudentInput">
            <label>Age</label>
            <input type="number" min="1" max="99" step="1" onChange={ageChangeHandler}/>
          </div>
        </div>
        <div className="SubmitButton">
          <button type="submit">Add Student</button>
        </div>
      </form>
  )
}

export default NewStudentItem;