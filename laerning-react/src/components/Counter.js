import React, { useState } from "react";

export default function Counter() {
	const [likes, setLikes] = useState(0);
	const [value, setValue] = useState("значение в инпуте");

	function increment() {
		setLikes(likes + 1);
	}

	function decriment() {
		setLikes(likes - 1);
	}
	return (
    <div>
      <h1>Лайки: {likes}</h1>
      <h1>{value}</h1>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={increment}>Increment</button>
      <button onClick={decriment}>Decrement</button>
    </div>
  );
}
