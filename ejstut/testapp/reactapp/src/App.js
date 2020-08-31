import React from "react";
import axios from "axios";
import "./App.css";

function App() {
  axios
    .get("http://localhost:5000/users")
    .then((res) => res)
    .then((res) => console.log(res));
  return <div className="App">hello</div>;
}

export default App;
