import "./UseState.css";
import { useState } from "react";

const UseState = () => {
  const [theme, setTheme] = useState("light");
  const [count, setCount] = useState(0);
  return (
    <div className={`${theme} state`}>
      <h1>UseState Component</h1>
      <button
        onClick={() => {
          {
            `${theme === "light" ? setTheme("dark") : setTheme("light")}`;
          }
        }}
      >
        {/* Dark */}
        {`${theme === "light" ? "Dark" : "Light"}`}
      </button>
      {/* <button
        onClick={() => {
          setTheme("light");
        }}
      >
        Light
      </button> */}
      <h1>{count}</h1>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        Increment
      </button>
      <button onClick={() => setCount((prevCount) => prevCount - 1)}>
        Decrement
      </button>
    </div>
  );
};

export default UseState;
