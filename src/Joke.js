import React, { useEffect, useState } from "react";

// fetch("https://api.chucknorris.io/jokes/random");

const Joke = () => {
  const [joke, setJoke] = useState();

  const fetchJoke = () => {
    fetch("https://api.chucknorris.io/jokes/random")
      .then((res) => res.json())
      .then((data) => setJoke(data.value));
  };

  useEffect(() => {
    fetchJoke();
  }, []);

  return <div>{joke}</div>;
};

export default Joke;

// Try to read properly the promise
