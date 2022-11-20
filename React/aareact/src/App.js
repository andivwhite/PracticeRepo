import logo from "./logo.svg";
import "./App.css";
import FirstComponent from "./FirstComponent";
import SecondComponent from "./SecondComponent";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <FirstComponent />
        <SecondComponent />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
