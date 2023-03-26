import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import EnglishFlag from "./assets/english.png";

import "bulma/css/bulma.min.css";
import Card from "./components/Card";

function App() {
  return (
    <div className="App has-background-black-ter ">
      <div className="container p-6">
        <div className="columns is-variable is-8 is-flex-wrap-wrap">
          <div className="column is-3">
            <Card />
          </div>
          <div className="column is-3">
            <Card />
          </div>
          <div className="column is-3">
            <Card />
          </div>
          <div className="column is-3">
            <Card />
          </div>
          <div className="column is-3">
            <Card />
          </div>
          <div className="column is-3">
            <Card />
          </div>
          <div className="column is-3">
            <Card />
          </div>
          <div className="column is-3">
            <Card />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
