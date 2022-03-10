import logo from "./logo.svg";
import "./App.css";
import { Button } from "reactstrap";
import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [cool, setCool] = useState([]);
  useEffect(() => {
    axios
      .get("https://my-json-server.typicode.com/fre13/cool/cool")
      .then((res) => {
        setCool(res.data);
      });
  }, [cool]);
  console.log(cool);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>

        <ul>
          {cool.map((item) => {
            return <li>{item.title}</li>;
          })}
        </ul>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Button color="danger">Danger!</Button>
      </header>
    </div>
  );
}

export default App;
