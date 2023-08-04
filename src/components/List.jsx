import React from 'react'

const List = ({name,age}) => {
    console.log(name);
  const listItems = name.map((name,index) => <li key={index}>{name}</li>);
  console.log(listItems);
  return (
    <div>
      <ul>{listItems}</ul>
      {age}
    </div>
  )
}

export default List
