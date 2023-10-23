import logo from "./logo.svg";
import "./App.css";
import ButtonComponent from "./components/ButtonComponent";
import Image from "./components/Image-component";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Image MyImage="https://placedog.net/300" myAlt="Image of Cat" />
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
        <ButtonComponent buttonText="Registration" />
        <ButtonComponent buttonText="Log In" />
      </header>
    </div>
  );
}

export default App;
