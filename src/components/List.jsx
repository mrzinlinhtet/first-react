import React from 'react'
import './List.css'

const List = ({name,age,isDone}) => {
    console.log(isDone);

    const style = {
        bgStyle:{
            
        }
    }
//   const listItems = name.map((name,index) => <li key={index}>{name}, {age}</li>);
//   console.log(listItems);
  return (
    <div className='list'>
      {/* <ul>{listItems}</ul> */}
      <p>{name}</p>
      <p>{age}</p>
    </div>
  )
}

export default List
