import "./StudentItem.css";

function StudentItem(props) {
  let retired = props.age >= 60;

  return (
      <div className="StudentItem">
        <div>{props.name}</div>
        <div>{props.surname}</div>
        <div>{props.age}</div>
        <div className={retired ? "Tag Retired" : "Tag Working"}>{retired ? "Retired" : "Working"}</div>
      </div>
  )
}

export default StudentItem;