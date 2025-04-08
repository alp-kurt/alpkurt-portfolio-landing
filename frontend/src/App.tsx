import pacmanLogo from "./assets/pacman.png";
import webLogo from "./assets/web.png";
import "./App.css";
import Ghost from './components/Ghost';

function App() {
  return (
    <>
    <Ghost /> <Ghost /> <Ghost />
      <div>
        <h1>Alp Kurt's Personal Website</h1>
        <p>-- currently rebuilding the app --</p>
        <a target="_blank" href="https://webdeveloper.alpkurt.com">
          <img src={webLogo} className="logo" alt="Web App logo" />
        </a>
        <a target="_blank" href="https://gamedeveloper.alpkurt.com">
          <img src={pacmanLogo} className="logo react" alt="Pacman logo" />
        </a>
      </div>

      <div className="card">
        <p>portfolio links 👆</p>
        <p>professional links👇</p>
      </div>
      <div className="links-group">
        <p>
          •
          <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/alp-kurt/">LinkedIn</a> •{" "}
          <a target="_blank" rel="noopener noreferrer" href="https://github.com/pabron7">GitHub</a> •{" "}
          <a target="_blank" rel="noopener noreferrer" href="https://pabron.itch.io/">Itch</a> 
          •
        </p>
      </div>
    </>
  );
}

export default App;
