import "./StudentItem.css";
import StudentTags from "./StudentTags";

function StudentItem(props) {
  let age = props.age;

  return (
      <div className="StudentItem">
        <div>{props.name}</div>
        <div>{props.surname}</div>
        <div>{age}</div>
        <StudentTags age={age}/>
      </div>
  )
}

export default StudentItem;