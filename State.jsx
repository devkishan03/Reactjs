import { useState } from "react";
export const State = () => {
  const [value, setValue] = useState(0);
  const handleButtonclick = () => {
    setValue(() => value + 1);
  };
  return (
    <div className="container">
      <h2>{value}</h2>
      <button onClick={handleButtonclick}>Increment</button>
    </div>
  );
};
