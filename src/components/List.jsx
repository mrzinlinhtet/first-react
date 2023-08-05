import React from "react";
import "./List.css";

const List = ({ name, isDone, onChecked, id, onEdit, onDelete }) => {
  // console.log(isDone);
  const handleChange = () => {
    onChecked(id);
  };

  const handleEdit = () => {
    onEdit()
  }   

  const handleDelete = () => {
    onDelete(id)
  }   


  // const myStyle = {
  //     bgStyle:{
  //         backgroundColor:"gray",
  //         textDecoration:"line-through"
  //     }
  // }
  //   const listItems = name.map((name,index) => <li key={index}>{name}, {age}</li>);
  //   console.log(listItems);
  return (
    <div className={`list ${isDone && "done"}`}>
      {/* <ul>{listItems}</ul> */}
      <div className="textContainer">
        <input checked={isDone} onChange={handleChange} type="checkbox" />
        <p>{name}</p>
      </div>
      <div className="btnContainer">
        <button onClick={handleEdit}>Edit</button>
        <button onClick={handleDelete}>Delete</button>
      </div>
    </div>
  );
};

export default List;
