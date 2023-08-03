import "./App.css";
import { Fragment } from "react";

function App() {

  const name= "gamani";
  const arr = ["moe moe",33,"male"];
  const bool = true;

  return (
    <div className="App">
      <h1>{5+5}</h1>
      <p>{name.toUpperCase()}</p>
      <p>{arr.join().toUpperCase()}</p>
      {
        bool ? <p>true</p> : <p>false</p>
      }
      {
        bool && <p className="textRed">Chit tl Ma Ma</p>
      }
    </div>
  );
}

export default App;
