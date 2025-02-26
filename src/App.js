import logo from "./ljf-logo.png";
import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
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
        <main>
          <Dictionary />
        </main>
        <footer>
          <small>Coded by LJ Fryer</small>
        </footer>
      </div>
    </div>
  );
}

export default App;
