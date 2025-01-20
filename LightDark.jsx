import { createContext, useContext, useState } from "react";
import "./LightDark.css";

export const LightdarkContext = createContext();

export const LightDarkProvider = ({ children }) => {
  const [mode, setMode] = useState("light");

  const handelBtnclick = () => {
    return setMode((prevmode) => (prevmode === "light" ? "dark" : "light"));
  };

  return (
    <LightdarkContext.Provider value={{ mode, handelBtnclick }}>
      {children}
    </LightdarkContext.Provider>
  );
};

export const LightDark = () => {
  const { mode, handelBtnclick } = useContext(LightdarkContext);
  return (
    <div className={`container ${mode == "dark" ? "bkc" : "bkc2"}`}>
      <h1>This is Light mode and Dark Mode</h1>
      <button
        className={`btn ${mode == "dark" ? "bkc" : "bkc2"}`}
        onClick={handelBtnclick}
      >
        {mode === "light" ? "Dark" : "Light"}
      </button>
    </div>
  );
};
