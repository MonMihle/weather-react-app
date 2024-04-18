import "./App.css";
import Weather from "./Weather";
import React from "react";

function App() {
  return (
    <div className="App">
      <div class="container">
        <h1>Hey, it's me!</h1>
        <Weather />

        <footer>
          This project was coded by Monica Mntanywa and is {""}
          <a href="https://github.com/MonMihle/weather-react-app">
            open source on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
