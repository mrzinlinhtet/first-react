import React from "react";
import "./List.css";
import {BsFillTrashFill} from "react-icons/bs"
import {BiEdit} from "react-icons/bi"

const List = ({ name, isDone, onChecked, id, onEdit, onDelete }) => {
  // console.log(isDone);
  const handleChange = () => {
    onChecked(id);
  };

  const handleEdit = () => {
    onEdit(id)
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
        <button onClick={handleEdit}><BiEdit /></button>
        <button onClick={handleDelete}><BsFillTrashFill /></button>
      </div>
    </div>
  );
};

export default List;
