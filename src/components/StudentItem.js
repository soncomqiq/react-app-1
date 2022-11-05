import "./StudentItem.css";

function StudentItem(props) {

  return (
      <div className="StudentItem">
        <div>{props.name}</div>
        <div>{props.surname}</div>
        <div>{props.age}</div>
      </div>
  )
}

export default StudentItem;