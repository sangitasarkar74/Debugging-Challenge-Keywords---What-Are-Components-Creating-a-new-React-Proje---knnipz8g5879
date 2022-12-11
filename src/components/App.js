import React, { useEffect, useState } from "react";
import '../styles/App.css';

const App = () => {

  let [count, setCount] = useState(0)

  const handleAlert = () => {
    alert("cant edit it");
  }

  const handleIncrement = () => {
    setCount(count + 1);
  }
  return (
    <div class="ball">
      {/* <h1 class="count" ondoubleclick={() => { alert("cant edit it") }}>{count}</h1> */}
      <h1 class="count" onDoubleClick={handleAlert}>{count}</h1>
      {/* <button class='increment-button' onclick={() => { setCount(count + 1) }}>Increment</button> */}
      <button class='increment-button' onClick={handleIncrement}>Increment</button>
    </div >
  )
}


export default App;