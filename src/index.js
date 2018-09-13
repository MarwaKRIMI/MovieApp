import React from "react";
import { render } from "react-dom";
import MovieApp from "./MovieApp";
import "./MovieApp.css"

const App = () => (
  <div>
    <MovieApp />
  </div>
);

render(<App />, document.getElementById("root"));
