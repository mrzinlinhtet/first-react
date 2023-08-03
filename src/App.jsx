import "./App.css";
import { Fragment } from "react";
import Test from "./Test";
import Bello from "./Bello";





function App() {
  const name = "gamani";
  const textRed = "textRed";
  const textBlue = "textBlue";
  const arr = ["moe moe", 33, "male"];
  const bool = false;

  const items = ["aa", "bb", "cc", "dd", "ee"];

  const Click = (x) => {
    console.log(x);
  };
  return (
    <div className="App">
      <h1>{5 + 5}</h1>
      <p>{name.toUpperCase()}</p>
      <p>{arr.join().toUpperCase()}</p>
      {bool ? <p>true</p> : <p>false</p>}
      {<p className={bool ? textBlue : textRed}>Chit tl Ma Ma</p>}

      {/* <button onClick={Click}>click</button> */}
      <button onClick={Click.bind(null, "gamani")}>Hello</button>

      <div>
        <ul>
          {
            items.map((item, index) => {
              return <li key={index}>{item}</li>
            
            })
          }
        </ul>
      </div>

      <Bello />
      <Test />

    </div>
  );
}

export default App;


