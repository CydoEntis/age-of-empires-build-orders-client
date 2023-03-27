import "./App.css";

import "./index.scss";
import Card from "./components/Card";
import Navbar from "./components/Navbar";
import Form from "./components/Form";

function App() {
  return (
    <div className="App">
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
