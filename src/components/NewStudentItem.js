import React from "react";

const NewStudentItem = () => {

  return (
      <form>
        <div>
          <div className="StudentInput">
            <label>Name</label>
            <input type="text"/>
          </div>
          <div className="StudentInput">
            <label>Lastname</label>
            <input type="text"/>
          </div>
          <div className="StudentInput">
            <label>Age</label>
            <input type="number" min="1" max="99" step="1"/>
          </div>
        </div>
        <div className="SubmitButton">
          <button>Add Student</button>
        </div>
      </form>
  )
}

export default NewStudentItem;