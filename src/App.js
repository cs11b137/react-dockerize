import logo from "./logo.svg";
import "./App.css";
import styled from "styled-components";

const Button = styled.button`
  color: grey;
`;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload. Modify again
          <Button>Delete</Button>
          <Button>Delete2</Button>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Dockerizing a react app
        </a>
      </header>
    </div>
  );
}

export default App;
