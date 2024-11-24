import React from "react";

let num1 = null;
let num2 = null;
function takenumbers() {
  num1 = Number(prompt("enter first num"));
  num2 = Number(prompt("enter Second num"));
}
takenumbers();
function add() {
  return num1 + num2;
}
function substract() {
  return num1 - num2;
}

function multiply() {
  return num1 * num2;
}
function devide() {
  return Number(num1 / num2).toFixed(2);
}

function App() {
  return (
    <>
      <h1>Simple calculator</h1>
    </>
  );
}

export default App;
export { add, substract, devide, multiply };
