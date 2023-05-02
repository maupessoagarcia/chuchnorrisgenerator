import "./App.css";
import Joke from "./Joke.js";
import React, { useEffect, useState } from "react";
import RefreshButton from "./RefreshButton";

function App() {
  const [joke, setJoke] = useState();

  const fetchJoke = () => {
    fetch("https://api.chucknorris.io/jokes/random")
      .then((res) => res.json())
      .then((data) => setJoke(data.value));
  };

  useEffect(() => {
    fetchJoke();
  }, []);

  return (
    <div className="App">
      <h1>Welcome to Chuck Norris Random Joke Generator</h1>
      <Joke joke={joke} />
      <RefreshButton onClick={fetchJoke} />
    </div>
  );
}

export default App;
