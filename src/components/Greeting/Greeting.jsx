import React from "react";

function Greeting({ name }) {
  return <h1>Hello, {name || "World"}!</h1>;
}

export default Greeting;
