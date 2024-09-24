import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [newName, changeName] = useState("");

  function handleChange(event) {
    setName(event.target.value);
  }
  function submitName(event) {
    changeName(name);
    event.preventDefault();
  }
  return (
    <div className="container">
      <h1>Hello {newName} </h1>
      <form onSubmit={submitName}>
        <input
          onChange={handleChange}
          type="text"
          placeholder="What's your name?"
          value={name}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
