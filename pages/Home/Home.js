import "./Home.css";
import { buttons } from "../../Data/buttons";
import btnListeners from "../../utils/buttonUse";
import { cleanPage } from "../../utils/cleanPage";

const template = () => {
  return `
    <h1>¡Play Now!</h1>
      <div id="game">
      <section id="sec1">
        <button id="rock-btn">
          <img src="/selectimg/rock.svg" alt="rock icon" />
          <h2>Rock</h2>
        </button>
        <button id="paper-btn">
          <img src="/selectimg/paper.svg" alt="paper icon" />
          <h2>Paper</h2>
        </button>
        <button id="scissors-btn">
          <img src="/selectimg/scissors.svg" alt="scissors icon" />
          <h2>Scissors</h2>
        </button>
      </section>
      <section id="sec2">
        <button id="lizard-btn">
          <img src="/selectimg/lizard.svg" alt="lizard icon" />
          <h2>Lizard</h2>
        </button>
        <button id="spock-btn">
          <img src="/selectimg/spock.svg" alt="spock icon" />
          <h2>Spock</h2>
        </button>
      </section>
      </div>
      <h3 id="vs"></h3>
      <h3 id="result">¡I dare you!</h3>
      <section id="sheldomimg">
      <div>
        <h2 id="player">Player</h2>
        <h3 is="countplayer">0</h3>
      </div>  
      <img src="/sheldonHi.png" alt="Sheldon say hi" />
      <div>
        <h2 id="computer">Computer</h2>
        <h3 is="countcompu">0</h3>
      </div>
      </section>
    `;
};

const Home = () => {
  const main = document.querySelector("main");
  cleanPage(main);
  main.innerHTML = template();
  btnListeners();
};

export default Home;
