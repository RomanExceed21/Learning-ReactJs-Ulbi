import React, { useState } from "react";
import { ClassCounter } from './components/ClassComponent';
import Counter from "./components/Counter";
function App() {
  const [value, setValue] = useState("значение в инпуте");
  return (
    <div className="App">
      <Counter />
      <ClassCounter/>
    </div>
  );
}

export default App;
