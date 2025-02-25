import logo from "./ljf-logo.png";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <a
          href="https://lj-fryer.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="ljf-link"
        >
          <img src={logo} className="ljf-logo img-fluid" alt="LJF Logo" />
        </a>
      </header>
    </div>
  );
}

export default App;
