import Footer from "./components/Footer";
import Main from "./components/Main";
import Nav from "./components/Nav";
import SideBar from "./components/SideBar";
import "./App.css";
import List from "./components/List";
// import style from "./components/App.module.css"
import {useRef, useState} from "react"

const App = () => {
  const nameList = ["John", "Jane", "Mary"];

  const inputRef = useRef();

  const [initialState, setInitialState] = useState([
      {text:"HW",id:1,isDone:false},
      {text:"Eat",id:2,isDone:false},
      {text:"Drink",id:3,isDone:true}
  ]);

  const handleClick = (e) => {
      e.preventDefault();
      console.log(inputRef.current.value)
      // inputRef.current.focus()
      inputRef.current.style.borderColor = "red"
      const info = {}
      info.text = inputRef.current.value
      info.isDone = false
      info.id = Math.random(Date.now()) * 1000000
      setInitialState([...initialState,info]) //...spread op
      console.log(info)
    }
  return (
    <>
        {/*<h3 onClick={handleClick}>{initialState}</h3>*/}
        <form className={"formContainer"} action="">
            <input ref={inputRef} type="text"/>
            <button onClick={handleClick}>Add</button>
        </form>
        {initialState.map((i) => <List key={i.id} name={i.text} />)}
      <div className="container">
        <Nav />
        <div className="midContainer">
          <SideBar />
          <Main />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default App;
