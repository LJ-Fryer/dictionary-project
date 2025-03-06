import logo from "./ljf-logo.png";
import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="displayBox">
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
            <h1>The Vocabulator</h1>
            <h5 className="mb-4">Okay, it's a dictionary 🔍</h5>
            <Dictionary defaultKeyword="funny" />
          </main>
          <footer>
            <small>
              Coded by{" "}
              <a
                href="https://lj-fryer.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LJ Fryer
              </a>
              , open-sourced on{" "}
              <a
                href="https://github.com/LJ-Fryer/react-weather"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>{" "}
              and hosted on{" "}
              <a
                href="https://ljf-weather-app.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Netlify
              </a>
            </small>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default App;
