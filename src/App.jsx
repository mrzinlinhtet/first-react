import Footer from "./components/Footer";
import Main from "./components/Main";
import Nav from "./components/Nav";
import SideBar from "./components/SideBar";
import "./App.css";
import List from "./components/List";
// import style from "./components/App.module.css"
import { useRef, useState } from "react";
import Form from "./components/Form/Form";

const App = () => {
  const nameList = ["John", "Jane", "Mary"];


  const [initialState, setInitialState] = useState([
    { text: "HW", id: 1, isDone: false },
    { text: "Eat", id: 2, isDone: false },
    { text: "Drink", id: 3, isDone: true },
  ]);

  const handleClick = (text) => {
    // e.preventDefault();
    // console.log(inputRef.current.value);
    // inputRef.current.focus()
    // inputRef.current.style.borderColor = "red";
    const data = {};
    data.text = text;
    data.isDone = false;
    data.id = Math.random(Date.now()) * 1000000;
    setInitialState([...initialState, data]); //...spread op
    // console.log(data);
  };

  const handleCheck = (id) => {
    console.log(id);
    // setInitialState(initialState.map(i => {
    //   if(i.id === id) {
    //     return {text:i.text,isDone:!i.isDone,id:i.id};
    //   }else {
    //     return i
    //   }
    // }))
    setInitialState(initialState.map(i => i.id === id ? {text:i.text,isDone:!i.isDone,id:i.id} : i));
  }

  const handleEdit = () => {
    console.log("edit");
  }

  const handleDelete = (id) => {
    setInitialState(initialState.filter(i => i.id !== id))    
  }
  return (
    <div>
      <Form onSubmit = {handleClick} />
      {/*<h3 onClick={handleClick}>{initialState}</h3>*/}
      {initialState.map((i) => (
        <List key={i.id} name={i.text} id={i.id} isDone={i.isDone} onChecked={handleCheck} onEdit={handleEdit} onDelete={handleDelete}/>
      ))}
      <div className="container">
        <Nav />
        <div className="midContainer">
          <SideBar />
          <Main />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default App;
