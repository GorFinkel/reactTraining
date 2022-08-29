import React, { useState } from "react";
import "./styles.css";
function App() {
  const [things, setThings] = useState(["Thing 1", "Thing 2"]);

  function add() {
    setThings((prevThings) => {
      return [...prevThings, `Thing ${prevThings.length + 1}`];
    });
  }
  const thingsElement = things.map((thing) => <p key={thing}>{thing}</p>);
  return (
    <div>
      <button onClick={add}>Add Thing</button>
      {thingsElement}
    </div>
  );
}
export default App;
