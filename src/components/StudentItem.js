import "./StudentItem.css";

function StudentItem() {
  const name = "Nuttachai";
  const surname = "Kulthammanit";
  const age = 26;

  return (
      <div className="StudentItem">
        <div>{name}</div>
        <div>{surname}</div>
        <div>{age}</div>
      </div>
  )
}

export default StudentItem;