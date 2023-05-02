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
      <img
        src="https://blackbeltmag.com/media-library/chuck-norris-movies.jpg?id=25805225&width=620&height=350"
        alt="Chuck Norris"
      />
      <br />
      <br />
      <Joke joke={joke} />
      <br />
      <br />
      <RefreshButton onClick={fetchJoke} />
    </div>
  );
}

export default App;
