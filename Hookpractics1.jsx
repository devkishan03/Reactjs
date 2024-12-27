import { useState } from "react";

export const UsestateHook = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <h1>This is useStste() example with counter</h1>
      <p>Count {count}</p>
      <br></br>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </>
  );
};
