import { useState } from "react";
import { MdOutlineCheckCircle, MdDeleteForever } from "react-icons/md";
import { Headding } from "./Components/Headding";
import "./TodoList.css";
import { DateTime } from "./Components/DateTime";

export const TodoList = () => {
  //for taking inputs from user and evry time input change
  const [textval, settextval] = useState("");

  //for storing inputs in a array
  const [userInput, setuserInput] = useState([]);

  //when typing in textfeild then call this function every time
  const handeltextchange = (value) => {
    settextval(value);
  };

  //when add item button click then fire the function
  const handlesubmitform = (event) => {
    //to prevent forms default behaviour to refresh page evry time
    event.preventDefault();

    //if text field empty then dont add the iteam
    if (!textval) return;

    //if duplicate item type by user then not store in the array
    if (userInput.includes(textval)) return;

    //storing in the array and atore all priveous values
    setuserInput((prevVal) => [...prevVal, textval]);

    //after adding inputfield will empty agin for typing
    settextval("");
  };

  return (
    <section className="Todo-Container">
      <header>
        <Headding />
        <DateTime />
      </header>
      <section className="Form">
        <form onSubmit={handlesubmitform}>
          <div className="Input-div">
            <input
              className="Inputfield"
              autoComplete="off"
              type="text"
              value={textval}
              onChange={(event) => handeltextchange(event.target.value)}
            ></input>
            <span>
              <button className="Add-btn" type="submit">
                Add Task
              </button>
            </span>
          </div>
          <div></div>
        </form>
      </section>
      <section>
        <ul className="IteamList">
          {userInput.map((values, index) => {
            return (
              <li className="Iteams" key={index}>
                <span className="itemtext">{values}</span>
                <button className="check-btn">
                  <MdOutlineCheckCircle className="icon" />
                </button>
                <button className="delete-btn">
                  <MdDeleteForever className="icon" />
                </button>
              </li>
            );
          })}
        </ul>
      </section>
    </section>
  );
};
