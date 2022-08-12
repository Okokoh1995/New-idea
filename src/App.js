import React from "react";
import ReactDOM from "react-dom";
import './App.css';
import "./style.css";

function App() {
  // const [isImportant, setIsImportant] = React.useState("Yes")
  // function handleClick() {
  //   setIsImportant("No")
  // }

  // const [count, setCount] = React.useState(0)

  // function add() {
  //   setCount(count + 1)
  // }

  // function subtract() {
  //   setCount(count - 1)
  // }

  const [thingsArray, setThingsArray] = React.useState(["Thing 1", "Thing 2"])

  function addItem() {
    setThingsArray(prevThingsArray => {
        return [...prevThingsArray, `Thing ${prevThingsArray.length + 1}`]
    })
    

  }

  const thingsElement = thingsArray.map(Thing => <p key={Thing}>{Thing}</p>)

  return (
    <div>
      <button onClick={addItem}>Add Item</button>
       {thingsElement}
    </div>


    // <div className="state">
    //   <h1 className="state--title">Is state important to know?</h1>
    //   <div className="state--value" onClick={handleClick}>
    //     <h1>{isImportant}</h1>
    //   </div>
    // </div>

    // <div className="counter">
    //   <button className="counter--minus" onClick={subtract}>-</button>
    //   <div className="counter--count">
    //     <h1>{count}</h1>
    //   </div>
    //   <button className="counter--plus"  onClick={add}>+</button>
    // </div>
  );
}

export default App;
