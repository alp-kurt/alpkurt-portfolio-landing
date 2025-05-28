import pacmanLogo from "./assets/pacman.png";
import webLogo from "./assets/web.png";
import './App.css';
import Ghost from "./components/Ghost";
import { logCustomEvent } from "./analytics";
import GlobalGhostCounter from "./components/GlobalGhostCounter";

function App() {
  const handleClick = (eventName: string, url: string) => {
    logCustomEvent(eventName);
    window.open(url, "_blank");
  };

  return (
    <>
      <Ghost /> <Ghost /> <Ghost />
      <div>
        <h1>Alp Kurt's Personal Website</h1>
        <p>-- currently rebuilding the app --</p>
        <GlobalGhostCounter />
        <img
          src={webLogo}
          className="logo"
          alt="Web App logo"
          onClick={() =>
            handleClick(
              "clicked_web_portfolio",
              "https://webdeveloper.alpkurt.com"
            )
          }
          style={{ cursor: "pointer" }}
        />

        <img
          src={pacmanLogo}
          className="logo react"
          alt="Pacman logo"
          onClick={() =>
            handleClick(
              "clicked_game_portfolio",
              "https://gamedeveloper.alpkurt.com"
            )
          }
          style={{ cursor: "pointer" }}
        />
      </div>
      <div className="card">
        <p>portfolio links 👆</p>
        <p>professional links👇</p>
      </div>
      <div className="links-group">
        <p>
          •{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/alp-kurt/"
            onClick={() => logCustomEvent("LinkedIn")}
          >
            LinkedIn
          </a>{" "}
          •{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/alp-kurt"
            onClick={() => logCustomEvent("clicked_github")}
          >
            GitHub
          </a>{" "}
          •{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://pabron.itch.io/"
            onClick={() => logCustomEvent("clicked_itch")}
          >
            Itch
          </a>
          {" "}•
        </p>
      </div>
    </>
  );
}

export default App;
