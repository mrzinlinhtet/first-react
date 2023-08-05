import React from "react";
import "./Form.css";
import {useRef} from "react";

const Form = ({onSubmit}) => {
     const inputRef = useRef();
    //  console.log(onSubmit);
     const handleClick = (e) => {
          e.preventDefault();
          onSubmit(inputRef.current.value)
          inputRef.current.value = ""
     }
  return (
    <div>
      <form className={"formContainer"} action="">
        <input ref={inputRef} type="text" />
        <button onClick={handleClick}>Add</button>
      </form>
    </div>
  );
};

export default Form;
