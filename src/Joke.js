import React from "react";

async function jokeOfTurn() {
  const cu = await fetch("https://api.chucknorris.io/jokes/random");
  const buceta = await cu.json();
  console.log(buceta.value);
  return buceta.value;
}

const Joke = () => {
  return <div>Waaa</div>;
};

export default Joke;

// Try to read properly the promise
