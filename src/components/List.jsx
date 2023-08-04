import React from 'react'
import './List.css'

const List = ({name,isDone}) => {
    // console.log(isDone);

    // const myStyle = {
    //     bgStyle:{
    //         backgroundColor:"gray",
    //         textDecoration:"line-through"
    //     }
    // }
//   const listItems = name.map((name,index) => <li key={index}>{name}, {age}</li>);
//   console.log(listItems);
  return (
    <div className={`list ${isDone && "done"}`} >
      {/* <ul>{listItems}</ul> */}
        <input type="checkbox" />
      <p>{name}</p>
    </div>
  )
}

export default List
